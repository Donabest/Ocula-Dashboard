import { IoChevronBackSharp } from "react-icons/io5";

import Input from "../../ui/Input";
import UserQuestion from "../../ui/UserQuestion";
import OculaResponse from "../../ui/OculaResponse";

function OculaAiChatArea() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col">
      <div className="flex items-center gap-1.5 cursor-pointer dark:text-slate-300">
        <IoChevronBackSharp />
        <span className="font-medium text-gray-600 dark:text-slate-300">
          Ocula Ai
        </span>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-4xl flex-1 flex-col sm:mt-10">
        <div className="flex-1 space-y-8 pb-8">
          <UserQuestion />
          <OculaResponse />
        </div>
        <div className="sticky bottom-0 w-full bg-gray-100 pb-4 pt-3 dark:bg-[#111827] sm:pb-8">
          <Input placeholder="Type a prompt" />
        </div>
      </div>
    </section>
  );
}

export default OculaAiChatArea;
