import OculaAiImg from "../assets/logo-symbol.png";

function OculaResponse() {
  return (
    <div className="flex items-start gap-3">
      <img
        src={OculaAiImg}
        alt={OculaAiImg}
        className="h-8 w-8 rounded-full bg-slate-300"
      />
      <div>
        <p className="text-wrap text-[15px] text-slate-600 pt-1.5 pb-30 tracking-normal font-medium dark:text-slate-300">
          Got it! This agenda ensures that all key aspects of the project are
          covered while allowing time for questions and clarifications.Here are
          notes and reminder: Got it! This agenda ensures that all key aspects
          of the project are covered while allowing time for questions and
          clarifications.Here are notes and reminder: Got it! This agenda
          ensures that all key aspects of the project are covered while allowing
          time for questions and clarifications.Here are notes and reminder:
        </p>
      </div>
    </div>
  );
}

export default OculaResponse;
