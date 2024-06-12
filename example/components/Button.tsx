import { useState } from "react";
const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className="flex items-center justify-center w-60 h-12 rounded-full bg-yellow-500 text-black font-bold px-4 py-1 cursor-pointer transition-all duration-200 active:duration-75 active:shadow-sm active:scale-95 active:brightness-90 active:contrast-120"
      onClick={handleClick}
    >
      <span className='pr-2'>🐻</span>
      Click me
    </button>
  );
};

export default Button;
