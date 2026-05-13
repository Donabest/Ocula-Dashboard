import LogoSymbol from "../assets/logo-symbol.png";

interface placeholder {
  placeholder: string;
}

function Input({ placeholder }: placeholder) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <input
        placeholder={placeholder}
        className="w-full rounded-lg bg-white px-4 py-3 pr-16 outline-0 drop-shadow-gray-300 drop-shadow-2xl focus:scale-101 dark:drop-shadow-slate-800 dark:text-black"
      />
      <button className="absolute right-3 rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-300 active:scale-95">
        <img src={LogoSymbol} alt={LogoSymbol} className="invert h-8 w-8" />
      </button>
    </div>
  );
}

export default Input;
