import { useEffect, useRef, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import Input from "../../ui/Input";
import UserQuestion from "../../ui/UserQuestion";
import OculaResponse from "../../ui/OculaResponse";
import type { OculaChatMessage } from "./types";

function OculaAiChatArea({
  isLoading,
  messages,
  onBack,
  onPromptSubmit,
}: {
  isLoading: boolean;
  messages: OculaChatMessage[];
  onBack: () => void;
  onPromptSubmit: (prompt: string) => void;
}) {
  const [prompt, setPrompt] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isLoading, messages]);

  function handleSubmit(value: string) {
    onPromptSubmit(value);
    setPrompt("");
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col">
      <button
        className="flex w-fit items-center gap-1.5 text-gray-600 transition hover:text-gray-900 dark:text-slate-300 dark:hover:text-white"
        onClick={onBack}
        type="button"
      >
        <IoChevronBackSharp />
        <span className="font-medium">Ocula Ai</span>
      </button>

      <div className="mx-auto mt-8 flex w-full max-w-4xl flex-1 flex-col sm:mt-10">
        <div className="flex-1 space-y-8 pb-8">
          {messages.map((message) =>
            message.role === "user" ? (
              <UserQuestion content={message.content} key={message.id} />
            ) : (
              <OculaResponse content={message.content} key={message.id} />
            ),
          )}
          {isLoading && <OculaResponse isLoading />}
          <div ref={bottomRef}></div>
        </div>

        <div className="sticky bottom-0 w-full bg-gray-100 pb-4 pt-3 dark:bg-[#111827] sm:pb-8">
          <Input
            disabled={isLoading}
            onChange={setPrompt}
            onSubmit={handleSubmit}
            placeholder="Ask about your tasks"
            value={prompt}
          />
        </div>
      </div>
    </section>
  );
}

export default OculaAiChatArea;
