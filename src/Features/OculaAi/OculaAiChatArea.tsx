import { IoChevronBackSharp } from "react-icons/io5";

import Input from "../../ui/Input";
import UserQuestion from "../../ui/UserQuestion";
import OculaResponse from "../../ui/OculaResponse";

function OculaAiChatArea() {
  return (
    <section className=" pt-20 h-screen">
      <div className="flex items-center gap-1.5 ml-6 cursor-pointer dark:text-slate-300">
        <IoChevronBackSharp />
        <span className="font-medium text-gray-600 dark:text-slate-300">
          Ocula Ai
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto mt-10 space-y-8  ">
        <UserQuestion />
        <OculaResponse />
        <div className="fixed bottom-0 pb-10  w-4xl ml-4 bg-gray-100 dark:bg-[#111827]">
          <Input placeholder="Type a prompt" />
        </div>
      </div>
    </section>
  );
}

export default OculaAiChatArea;
