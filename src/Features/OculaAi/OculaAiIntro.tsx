import { motion } from "motion/react";

import LogoSymbol from "../../assets/logo-symbol.png";
import Input from "../../ui/Input";

const SuggestPrompt: string[] = [
  "Let's talk about...",
  "Help me with..",
  "Teach me to..",
  "Analyse this topic...",
  "Write story about...",
];

function OculaAiIntro() {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] w-full max-w-2xl flex-col items-center justify-center mx-auto text-center space-y-8 sm:space-y-10 dark:text-white">
      <div className="flex flex-col justify-center items-center space-y-2">
        <img
          src={LogoSymbol}
          alt={LogoSymbol}
          className=" h-8 w-8 dark:invert"
        />
        <h1 className="font-raleway text-2xl font-medium">
          Good Evening, <span>Don</span>
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-raleway font-bold sm:text-5xl lg:text-6xl">
          How can i help you?
        </h1>
        <p className="w-full max-w-xl text-sm text-gray-500 font-raleway dark:text-gray-300">
          it all start with a prompt.write your owm request or get inspired by
          one of the suggested ones
        </p>
      </div>

      <Input placeholder="Type a prompt" />

      <ul className="flex w-full flex-wrap items-center justify-center gap-3 pt-6 sm:pt-8 border-t border-gray-300 dark:border-slate-400">
        {SuggestPrompt.map((suggest, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 text-sm text-white bg-slate-950 rounded-full cursor-pointer active:scale-95 dark:bg-slate-700 sm:px-6 sm:py-2.5 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index / 10 }}
          >
            {suggest}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default OculaAiIntro;
