import OculaAiImg from "../assets/logo-symbol.png";

function LoadingDots() {
  return (
    <span className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((dot) => (
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-300"
          key={dot}
          style={{ animationDelay: `${dot * 120}ms` }}
        ></span>
      ))}
    </span>
  );
}

function OculaResponse({
  content,
  isLoading = false,
}: {
  content?: string;
  isLoading?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <img
        src={OculaAiImg}
        alt="Ocula AI"
        className="h-8 w-8 shrink-0 rounded-full bg-slate-300 p-1 dark:invert"
      />

      <div className="min-w-0">
        <div className="max-w-3xl rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[15px] font-medium tracking-normal text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
          {isLoading ? (
            <LoadingDots />
          ) : (
            <p className="whitespace-pre-wrap break-words">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OculaResponse;
