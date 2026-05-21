import { useState } from "react";
import { LuUser, LuMail, LuLock, LuArrowRight } from "react-icons/lu";
import { Link,useNavigate  } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate()

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSignup=async(e)=>{
      e.preventDefault();
        const response=await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    email,
                    password
                })
            }
        )

        const data = await response.json()
        console.log(data)

        navigate("/login")
    }

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

      <form className="space-y-5">
        {/* Username */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block px-1">
            Username
          </label>
          <div className="relative flex items-center">
            <LuUser className="absolute left-4 text-slate-400 dark:text-slate-500 text-lg" />
            <input
              type="text"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder="johndoe"
              className="w-full pl-11 pr-4 h-11 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950/50 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600"
            />
          </div>
        </div>

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
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block px-1">
            Password
          </label>
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
          onClick={handleSignup}
          className="w-full mt-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium h-11 rounded-xl shadow-sm shadow-purple-200 dark:shadow-none flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer group"
        >
          <span>Sign Up</span>
          <LuArrowRight className="text-base group-hover:translate-x-0.5 transition-transform" />
        </button>
        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Already have an account?{" "}
            
            <Link
                to="/login"
                className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
                Sign in
            </Link>

        </div>
      </form>
    </div>
  );
};

export default Signup;