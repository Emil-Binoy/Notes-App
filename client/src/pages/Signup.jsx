import { useState } from "react";
import toast from "react-hot-toast";
import {
  LuUser,
  LuMail,
  LuLock,
  LuArrowRight,
  LuEye,
  LuEyeOff,
} from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "../components/ui/LoadingButton";
import { errorSound } from "../utils/audio";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("Please enter all the fields.");
      errorSound.play();
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "failed to sign up");
        setIsLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);

      toast.success("Account created! Welcome.");
      navigate("/");
    } catch (error) {
      toast.error("Cannot connect to server.");
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mt-5 max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors duration-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Create an Account
        </h2>
        <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">
          Get started with your personal notebook
        </p>
      </div>

      <form onSubmit={handleSignup} className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block px-1">
            Username
          </label>
          <div className="relative flex items-center">
            <LuUser className="absolute left-4 text-slate-400 dark:text-slate-500 text-lg" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe"
              className="w-full pl-11 pr-4 h-11 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950/50 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block px-1">
            Email Address
          </label>
          <div className="relative flex items-center">
            <LuMail className="absolute left-4 text-slate-400 dark:text-slate-500 text-lg" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-11 pr-4 h-11 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950/50 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block px-1">
            Password
          </label>
          <div className="relative flex items-center">
            <LuLock className="absolute left-4 text-slate-400 dark:text-slate-500 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-11 pr-12 h-11 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950/50 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none cursor-pointer"
            >
              {showPassword ? (
                <LuEyeOff className="text-lg" />
              ) : (
                <LuEye className="text-lg" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
        <LoadingButton
          type="submit"
          isLoading={isLoading}
          loadingText="Creating Account..."
          defaultText="Sign Up"
          icon={LuArrowRight}
          className="mt-2"
        />
      </form>
    </div>
  );
};

export default Signup;
