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
    <div className="flex flex-col items-center justify-center mx-auto text-center h-screen space-y-10 max-w-2xl dark:text-white">
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
        <h1 className="text-6xl font-raleway font-bold ">
          How can i help you?
        </h1>
        <p className="text-sm text-gray-500 font-raleway w-xl dark:text-gray-300">
          it all start with a prompt.write your owm request or get inspired by
          one of the suggested ones
        </p>
      </div>

      <Input placeholder="Type a prompt" />

      <ul className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t border-gray-300 dark:border-slate-400">
        {SuggestPrompt.map((suggest, index) => (
          <motion.li
            key={index}
            className=" px-6 py-2.5 text-white bg-slate-950 rounded-full cursor-pointer active:scale-95 dark:bg-slate-700"
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
