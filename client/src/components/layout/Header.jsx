import { useState, useEffect } from 'react'
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import logo from "../../assets/logo.png"

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 border-b border-slate-100 dark:bg-slate-900/80 dark:border-slate-800 backdrop-blur-md px-6 py-2 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="">
          <img 
            src={logo} 
            alt="notes logo"  
            className='h-15 drop-shadow-xl/40'  
          />
        </div>
        
        <button 
          onClick={() => setIsDark(!isDark)}
          className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-800 transition-all active:scale-95 shadow-sm bg-white dark:bg-slate-900"
          aria-label="Toggle Theme"
        >
          {isDark ? <IoSunnySharp size={18} /> : <IoMoonSharp size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Header;