import type { FallbackProps } from "react-error-boundary";

function ErrorFallBack({ error, resetErrorBoundary }: FallbackProps) {
  const err = error as Error;
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-semibold">Something went wrong 😬</h1>
      <p className="text-gray-500 text-sm">{err.message}</p>
      <button
        className="px-6 py-2 bg-black text-white rounded-lg cursor-pointer dark:bg-white dark:text-black transition hover:opacity-80"
        onClick={resetErrorBoundary}
      >
        Go back home
      </button>
    </div>
  );
}

export default ErrorFallBack;
