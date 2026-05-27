import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import OculaAiIntro from "./OculaAiIntro";
import OculaAiChatArea from "./OculaAiChatArea";
import type { OculaChatMessage } from "./types";
import { useActiveTasks } from "../../hooks/useActiveTasks";
import {
  askOculaAi,
  type OculaChatMessageForAi,
  type OculaTaskAction,
  type OculaTaskPayload,
} from "../../services/apiAi";
import {
  createTask,
  deleteTask,
  editTask,
} from "../../services/apiTasks";
import type { status, tasktype } from "../../utilities/type";

const CHAT_STORAGE_KEY = "ocula-ai-chat";
const CHAT_EXPIRY_MS = 2 * 24 * 60 * 60 * 1000;

type StoredChat = {
  expiresAt: number;
  messages: OculaChatMessage[];
};

function createMessage(
  role: OculaChatMessage["role"],
  content: string,
): OculaChatMessage {
  return {
    content,
    createdAt: Date.now(),
    id: crypto.randomUUID(),
    role,
  };
}

function readStoredChat() {
  const storedChat = localStorage.getItem(CHAT_STORAGE_KEY);

  if (!storedChat) return [];

  try {
    const parsed = JSON.parse(storedChat) as StoredChat;

    if (!parsed.messages?.length || Date.now() > parsed.expiresAt) {
      localStorage.removeItem(CHAT_STORAGE_KEY);
      return [];
    }

    return parsed.messages;
  } catch {
    localStorage.removeItem(CHAT_STORAGE_KEY);
    return [];
  }
}

function writeStoredChat(messages: OculaChatMessage[]) {
  if (!messages.length) {
    localStorage.removeItem(CHAT_STORAGE_KEY);
    return;
  }

  const lastPrompt = [...messages]
    .reverse()
    .find((message) => message.role === "user");

  localStorage.setItem(
    CHAT_STORAGE_KEY,
    JSON.stringify({
      expiresAt: (lastPrompt?.createdAt ?? Date.now()) + CHAT_EXPIRY_MS,
      messages,
    }),
  );
}

function isTaskRelatedPrompt(prompt: string, hasChatHistory: boolean) {
  if (hasChatHistory) return true;

  const normalizedPrompt = prompt.toLowerCase();
  const taskKeywords = [
    "calendar",
    "complete",
    "create",
    "deadline",
    "delete",
    "due",
    "edit",
    "focus",
    "in progress",
    "inprogress",
    "list",
    "move",
    "overdue",
    "priority",
    "productivity",
    "project",
    "reminder",
    "schedule",
    "status",
    "task",
    "todo",
    "update",
    "work",
  ];

  return taskKeywords.some((keyword) => normalizedPrompt.includes(keyword));
}

function getDateOffset(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function normalizeStatus(value: string | undefined, fallback: status): status {
  const normalizedValue = value?.toLowerCase().replace(/\s+/g, "");

  if (normalizedValue === "todo") return "Todo";
  if (normalizedValue === "completed") return "Completed";
  if (normalizedValue === "inprogress") return "Inprogress";

  return fallback;
}

function normalizePriority(value: string | undefined, fallback: string) {
  if (value === "High" || value === "Med" || value === "Low") return value;

  return fallback;
}

function normalizeTaskPayload(
  payload: OculaTaskPayload,
  fallback?: tasktype,
): tasktype {
  return {
    EndDate: payload.EndDate || fallback?.EndDate || getDateOffset(1),
    StartDate: payload.StartDate || fallback?.StartDate || getDateOffset(0),
    description: payload.description ?? fallback?.description ?? "",
    id: fallback?.id ?? 0,
    priority: normalizePriority(payload.priority, fallback?.priority ?? "Med"),
    project_id: payload.project_id ?? fallback?.project_id ?? null,
    status: normalizeStatus(payload.status, fallback?.status ?? "Todo"),
    title: payload.title?.trim() || fallback?.title || "New task",
    userId: fallback?.userId,
  };
}

function findTaskFromAction(tasks: tasktype[], action: OculaTaskAction) {
  const taskId =
    "taskId" in action && typeof action.taskId === "number"
      ? action.taskId
      : null;

  if (taskId !== null) {
    return tasks.find((task) => task.id === taskId);
  }

  const actionTitle =
    "title" in action ? action.title?.trim().toLowerCase() : undefined;

  if (!actionTitle) return undefined;

  return (
    tasks.find((task) => task.title.toLowerCase() === actionTitle) ??
    tasks.find((task) => {
      const taskTitle = task.title.toLowerCase();
      return taskTitle.includes(actionTitle) || actionTitle.includes(taskTitle);
    })
  );
}

function toAiMessages(messages: OculaChatMessage[]): OculaChatMessageForAi[] {
  return messages.map((message) => ({
    content: message.content,
    role: message.role,
  }));
}

function OculaAiLayout() {
  const [messages, setMessages] = useState<OculaChatMessage[]>(readStoredChat);
  const [isChat, setIsChat] = useState(() => readStoredChat().length > 0);
  const [isLoading, setIsLoading] = useState(false);
  const { tasks } = useActiveTasks();
  const queryClient = useQueryClient();

  useEffect(() => {
    writeStoredChat(messages);
  }, [messages]);

  async function executeTaskActions(actions: OculaTaskAction[]) {
    const summaries: string[] = [];
    let didChangeTasks = false;

    for (const action of actions) {
      if (action.type === "create") {
        const newTask = normalizeTaskPayload(action.task);
        await createTask(newTask);
        summaries.push(`Created task: ${newTask.title}`);
        didChangeTasks = true;
      }

      if (action.type === "edit") {
        const taskToEdit = findTaskFromAction(tasks, action);

        if (!taskToEdit) {
          summaries.push("I could not find the task to edit.");
          continue;
        }

        const updatedTask = normalizeTaskPayload(action.updates, taskToEdit);
        await editTask(updatedTask, taskToEdit.id);
        summaries.push(`Updated task: ${updatedTask.title}`);
        didChangeTasks = true;
      }

      if (action.type === "delete") {
        const taskToDelete = findTaskFromAction(tasks, action);

        if (!taskToDelete) {
          summaries.push("I could not find the task to delete.");
          continue;
        }

        await deleteTask(taskToDelete.id);
        summaries.push(`Deleted task: ${taskToDelete.title}`);
        didChangeTasks = true;
      }
    }

    if (didChangeTasks) {
      await queryClient.invalidateQueries({ queryKey: ["Tasks"] });
      toast.success("Ocula updated your tasks");
    }

    return summaries;
  }

  async function handlePromptSubmit(prompt: string) {
    if (isLoading) return;

    const userMessage = createMessage("user", prompt);
    const nextMessages = [...messages, userMessage];

    setIsChat(true);
    setMessages(nextMessages);

    if (!isTaskRelatedPrompt(prompt, messages.length > 0)) {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage(
          "assistant",
          "I can only help with tasks, projects, deadlines, schedules, and productivity. Ask me about your task list and I will jump in.",
        ),
      ]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await askOculaAi({
        messages: toAiMessages(messages),
        prompt,
        tasks,
      });
      const actions = Array.isArray(response.actions) ? response.actions : [];
      const actionSummaries = response.inScope
        ? await executeTaskActions(actions)
        : [];
      const assistantContent = [
        response.reply,
        actionSummaries.length
          ? `\n\n${actionSummaries.map((summary) => `- ${summary}`).join("\n")}`
          : "",
      ].join("");

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("assistant", assistantContent),
      ]);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Ocula could not answer right now.";

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("assistant", message),
      ]);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleBackToIntro() {
    setIsChat(false);
  }

  return (
    <section className="min-h-screen bg-gray-100 px-4 pb-6 pt-20 dark:bg-[#111827] sm:px-6 lg:px-8">
      {isChat ? (
        <OculaAiChatArea
          isLoading={isLoading}
          messages={messages}
          onBack={handleBackToIntro}
          onPromptSubmit={handlePromptSubmit}
        />
      ) : (
        <OculaAiIntro
          isLoading={isLoading}
          onPromptSubmit={handlePromptSubmit}
        />
      )}
    </section>
  );
}

export default OculaAiLayout;
