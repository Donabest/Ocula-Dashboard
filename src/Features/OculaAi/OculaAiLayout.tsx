import { useState } from "react";
import OculaAiIntro from "./OculaAiIntro";
import OculaAiChatArea from "./OculaAiChatArea";

function OculaAiLayout() {
  const [isChat] = useState(false);

  return (
    <section className="min-h-screen bg-gray-100 px-4 pb-6 pt-20 dark:bg-[#111827] sm:px-6 lg:px-8">
      {isChat ? <OculaAiChatArea /> : <OculaAiIntro />}
    </section>
  );
}

export default OculaAiLayout;
