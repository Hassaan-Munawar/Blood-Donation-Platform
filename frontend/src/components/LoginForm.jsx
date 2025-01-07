import React from 'react';
import submit from '../assets/submit.png';

function LoginForm() {
  return (
    <div className="min-h-screen pb-20 flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        {/* Header */}
        <div className="bg-gradient-to-r rounded-md from-[#500732] to-[#A8174E] p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Login</h1>
        </div>

        {/* Form */}
        <form className="space-y-6 rounded-lg bg-white p-8 shadow-2xl">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-left text-sm text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-left text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-black text-white shadow-md px-8 py-2"
            >
              <span>Submit</span>
              <img className="h-6 w-6" src={submit} alt="submit" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
