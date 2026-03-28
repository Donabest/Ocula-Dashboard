import LogoSymbol from "../assets/logo-symbol.png";

interface placeholder {
  placeholder: string;
}

function Input({ placeholder }: placeholder) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <input
        placeholder={placeholder}
        className=" px-4 py-3 bg-white w-full outline-0 rounded-lg drop-shadow-gray-300 drop-shadow-2xl focus:scale-101 dark:drop-shadow-slate-800 dark:text-black"
      />
      <button className="absolute right-3 bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-300 active:scale-95">
        <img src={LogoSymbol} alt={LogoSymbol} className="invert h-8 w-8" />
      </button>
    </div>
  );
}

export default Input;
