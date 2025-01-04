import React from 'react'
import submit from '../assets/submit.png'

function LoginForm() {
  return (
      <div className="min-h-screen mb-20 p-4">
                <div className="mx-auto">
                    {/* Header */}
                    <div className="mx-6 bg-gradient-to-r from-[#500732] to-[#A8174E] p-6">
                        <h1 className="text-2xl font-bold text-white">Login</h1>
                    </div>
    
                    {/* Form */}
                    <form className="space-y-6 rounded-lg bg-white p-8 shadow-2xl">
                        {/* Email */}
                        <div className="flex flex-col md:flex-row items-start gap-4">
                            <label
                                htmlFor="email"
                                className="w-full md:w-40 text-left md:text-right pt-2 text-sm text-gray-600"
                            >
                                 Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="flex-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email"
                            />
                        </div>
    
                        {/* Password */}
                        <div className="flex flex-col md:flex-row items-start gap-4">
                            <label
                                htmlFor="password"
                                className="w-full md:w-40 text-left md:text-right pt-2 text-sm text-gray-600"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="flex-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Password"
                            />
                        </div>
    
                        {/* Submit Button */}
                        <div className="flex justify-center md:justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 md:gap-6 rounded-md bg-black text-white shadow-md px-8 py-2"
                            >
                                <span>Submit</span>
                                <img className="h-6 w-6" src={submit} alt="submit" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
  )
}

export default LoginForm