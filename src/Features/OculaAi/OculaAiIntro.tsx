import { useState } from "react";
import { motion } from "motion/react";
import LogoSymbol from "../../assets/logo-symbol.png";
import Input from "../../ui/Input";
import { useUser } from "../Authentication/useUser";

const suggestPrompts = [
  "Show me my overdue tasks and what to do first",
  "Create a high priority task to review today's project blockers",
  "Move my most urgent todo task to in progress",
  "Suggest 3 tasks I should focus on this week",
  "Delete the task I no longer need after I name it",
];
const greetings = [
  "Good Night",
  "Good Morning",
  "Good Afternoon",
  "Good Evening",
];
const hours = new Date().getHours();
const greeting = greetings[Math.floor(hours / 6) % 4];

function OculaAiIntro({
  isLoading,
  onPromptSubmit,
}: {
  isLoading: boolean;
  onPromptSubmit: (prompt: string) => void;
}) {
  const [prompt, setPrompt] = useState("");
  const { user } = useUser();
  function handleSubmit(value: string) {
    onPromptSubmit(value);
    setPrompt("");
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-3xl flex-col items-center justify-center space-y-8 text-center dark:text-white sm:space-y-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <img src={LogoSymbol} alt="Ocula AI" className="h-9 w-9 dark:invert" />
        <h1 className="font-raleway text-2xl font-medium">
          {greeting}, <span>{user?.user_metadata.lastName}</span>
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-raleway text-4xl font-bold sm:text-5xl lg:text-6xl">
          How can I help with your tasks?
        </h1>
        <p className="w-full max-w-xl text-sm text-gray-500 font-raleway dark:text-gray-300">
          Ask about priorities, deadlines, project work, or tell Ocula to
          create, edit, or delete a task.
        </p>
      </div>

      <Input
        disabled={isLoading}
        onChange={setPrompt}
        onSubmit={handleSubmit}
        placeholder="Ask about your tasks"
        value={prompt}
      />

      <ul className="grid w-full grid-cols-1 gap-3 border-t border-gray-300 pt-6 dark:border-slate-700 sm:grid-cols-2 sm:pt-8">
        {suggestPrompts.map((suggest, index) => (
          <motion.li
            key={suggest}
            className="cursor-pointer rounded-2xl border border-white/70 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md active:scale-[0.99] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index / 12 }}
            onClick={() => handleSubmit(suggest)}
          >
            {suggest}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default OculaAiIntro;
