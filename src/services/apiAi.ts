import type { status, tasktype } from "../utilities/type";

export type OculaChatMessageForAi = {
  role: "user" | "assistant";
  content: string;
};

export type OculaTaskPayload = {
  title?: string;
  description?: string;
  priority?: "High" | "Med" | "Low";
  status?: status;
  StartDate?: string;
  EndDate?: string;
  project_id?: number | null;
};

export type OculaTaskAction =
  | {
      type: "create";
      task: OculaTaskPayload;
    }
  | {
      type: "edit";
      taskId?: number;
      title?: string;
      updates: OculaTaskPayload;
    }
  | {
      type: "delete";
      taskId?: number;
      title?: string;
    };

export type OculaAiResult = {
  inScope: boolean;
  reply: string;
  actions: OculaTaskAction[];
};

type GroqResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
};

function getJsonFromResponse(text: string) {
  const trimmed = text.trim();

  if (trimmed.startsWith("{")) return trimmed;

  const jsonStart = trimmed.indexOf("{");
  const jsonEnd = trimmed.lastIndexOf("}");

  if (jsonStart >= 0 && jsonEnd > jsonStart) {
    return trimmed.slice(jsonStart, jsonEnd + 1);
  }

  throw new Error("Ocula could not format the response.");
}

export async function askOculaAi({
  prompt,
  tasks,
  messages,
}: {
  prompt: string;
  tasks: tasktype[];
  messages: OculaChatMessageForAi[];
}): Promise<OculaAiResult> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("Groq API key is missing.");
  }

  const taskContext = tasks.map((task) => ({
    id: task.id,
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
    StartDate: task.StartDate,
    EndDate: task.EndDate,
    project_id: task.project_id,
  }));

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.2,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `You are Ocula AI, a task-management assistant inside a productivity app.
Only answer questions about the user's tasks, projects, deadlines, schedules, priorities, productivity, or managing work.
If the user asks anything unrelated, set inScope to false, actions to [], and politely redirect them to ask about tasks.
You may create, edit, or delete tasks only when the user clearly asks for that action.
For edit/delete, prefer an existing task id from the task list. If you are not sure which task the user means, do not create an action; ask for clarification in reply.
Return ONLY valid JSON with this exact shape:
{
  "inScope": true,
  "reply": "short helpful answer",
  "actions": [
    { "type": "create", "task": { "title": "", "description": "", "priority": "High|Med|Low", "status": "Todo|Inprogress|Completed", "StartDate": "YYYY-MM-DD", "EndDate": "YYYY-MM-DD", "project_id": null } },
    { "type": "edit", "taskId": 1, "title": "", "updates": { "title": "", "description": "", "priority": "High|Med|Low", "status": "Todo|Inprogress|Completed", "StartDate": "YYYY-MM-DD", "EndDate": "YYYY-MM-DD" } },
    { "type": "delete", "taskId": 1, "title": "" }
  ]
}
Current date: ${new Date().toISOString().slice(0, 10)}
Current tasks: ${JSON.stringify(taskContext)}`,
          },
          ...messages.slice(-8),
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    },
  );

  const data = (await response.json()) as GroqResponse;

  if (!response.ok) {
    throw new Error(data.error?.message ?? "Ocula could not answer right now.");
  }

  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("Ocula returned an empty response.");
  }

  return JSON.parse(getJsonFromResponse(content)) as OculaAiResult;
}
