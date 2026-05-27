import { FiCopy } from "react-icons/fi";
import UserImg from "../assets/default-avatar.jpg";
import { useUser } from "../Features/Authentication/useUser";

function UserQuestion({ content }: { content: string }) {
  const { user } = useUser();

  function handleCopy() {
    navigator.clipboard?.writeText(content);
  }

  return (
    <div className="flex items-start justify-end gap-3">
      <img
        src={
          user?.user_metadata.has_custom_avatar
            ? user?.user_metadata.custom_avatar
            : (user?.user_metadata.picture ?? UserImg)
        }
        alt="User"
        className="h-8 w-8 shrink-0 rounded-full"
      />
      <div className="min-w-0 space-y-3">
        <p className="text-wrap break-words rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[15px] font-medium tracking-normal text-gray-700 shadow-sm dark:bg-slate-800 dark:text-slate-100 sm:text-[16px]">
          {content}
        </p>
        <button
          className="flex items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          onClick={handleCopy}
          type="button"
        >
          <FiCopy />
          Copy
        </button>
      </div>
    </div>
  );
}

export default UserQuestion;
