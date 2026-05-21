import { useState } from "react";
import { LuMail, LuLock, LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent page refresh behavior

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                // 2. Alert the user on UI with the error message from server
                toast.error(data.message || "Something went wrong on the server.");
                console.log("Server Error Data:", data);
                return;
            }

            // If everything is completely fine:
            localStorage.setItem('token', data.token);
            toast.success("Welcome back!");
            navigate("/");
            
        } catch (error) {
            // Catches network connection errors
            toast.error("Cannot connect to backend server.");
            console.error(error);
        }
    };

  return (
    <div className="w-full mt-5 max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors duration-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">
          Sign in to access your personal notebook
        </p>
      </div>

      <form className="space-y-5">
        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block px-1">
            Email Address
          </label>
          <div className="relative flex items-center">
            <LuMail className="absolute left-4 text-slate-400 dark:text-slate-500 text-lg" />
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-11 pr-4 h-11 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950/50 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center px-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Password
            </label>
            <a href="#" className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
              Forgot?
            </a>
          </div>
          <div className="relative flex items-center">
            <LuLock className="absolute left-4 text-slate-400 dark:text-slate-500 text-lg" />
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-11 pr-4 h-11 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950/50 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="w-full mt-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium h-11 rounded-xl shadow-sm shadow-purple-200 dark:shadow-none flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer group"
        >
          <span>Sign In</span>
          <LuArrowRight className="text-base group-hover:translate-x-0.5 transition-transform" />
        </button>
        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?{" "}

            <Link
                to="/signup"
                className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
                Sign up
            </Link>

        </div>
      </form>
    </div>
  );
};

export default Login;