import { useState } from "react";
import OculaAiIntro from "./OculaAiIntro";
import OculaAiChatArea from "./OculaAiChatArea";

function OculaAiLayout() {
  const [isChat, setISChat] = useState(true);
  return <>{isChat ? <OculaAiChatArea /> : <OculaAiIntro />}</>;
}

export default OculaAiLayout;
