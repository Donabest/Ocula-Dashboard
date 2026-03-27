import { motion } from "motion/react";

function Invite() {
  return (
    <div className="mt-3 py-2 px-4 bg-indigo-700 rounded-2xl text-white w-full dark:bg-blue-700">
      <h1>Ocula,</h1>
      <p className="text-xs text-gray-300">
        New member will gain access to public Spaces,Docs and Dashboard
      </p>
      <motion.button
        className="bg-white text-black text-sm px-4 py-2 w-full mx-auto mt-3 rounded-lg cursor-pointer hover:bg-white/90"
        whileHover={{ y: -2 }}
      >
        Invite People
      </motion.button>
    </div>
  );
}

export default Invite;
