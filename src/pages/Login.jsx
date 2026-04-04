import React from "react";
import { Link, Links } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border-primary border-2 p-8">
        
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-primary">Welcome Back 👋</h1>
          <p className="text-sm text-secondary">
            Login to your Nirvoya account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="text-sm text-secondary">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-secondary">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          {/* Options */}
          
          <Link to='/Forget'>
          <div className="flex items-center justify-between text-sm pb-5">
            <label className="flex items-center gap-2 text-secondary">
              <input type="checkbox" className="accent-brand" />
              Remember me
            </label>
            <a href="#" className="text-brand hover:underline">
              Forgot Password?
            </a>
          </div>
          </Link>

          {/* Button */}
          <Link to='/' >
          <button
            type="submit"
            className="w-full bg-brand text-white py-2 rounded-lg hover:bg-brandtransition duration-300"
          >
            Login
          </button>
          </Link>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-3">
          <div className="flex-1 h- bg-secondary/20"></div>
          <span className="text-xs text-secondary">OR</span>
          <div className="flex-1 h- bg-secondary/20"></div>
        </div>

        {/* Social Login */}
        <Link to='/' className="space-y-3">
          <button className="w-full border border-secondary/30 py-2 rounded-lg hover:bg-secondary/10 flex items-center justify-center gap-2">
            <img src="/google.png" alt="" className="w-8 h-8" />
            Continue with Google
          </button>
          <button className="w-full border border-secondary/30 py-2 rounded-lg hover:bg-secondary/10 flex items-center justify-center gap-2">
            <img src="/facebook.png" alt="" className="w-8 h-8" />
            Continue with Facebook
          </button>
        </Link>

        {/* Footer */}
        <p className="text-center text-sm text-secondary mt-6">
          Don’t have an account?{" "}
          <Link to='/Register'>
          <span className="text-brand cursor-pointer hover:underline">
            Sign up
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;