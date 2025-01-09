import React from 'react'
import submit from '../assets/submit.png'

function OrganizationRegistrationForm() {
    return (
        <div className="min-h-screen mb-20 p-4">
            <div className="mx-auto">
                {/* Header */}
                <div className="mx-6 bg-gradient-to-r rounded-md from-[#500732] to-[#A8174E] p-6">
                    <h1 className="text-2xl font-bold text-white">Register As Organization</h1>
                </div>

                {/* Form */}
                <form className="space-y-6 rounded-lg bg-white p-8 shadow-2xl">
                    {/* Organization Name */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <label
                            htmlFor="orgName"
                            className="w-full md:w-40 text-left md:text-right pt-2 text-sm text-gray-600"
                        >
                            Organization Name
                        </label>
                        <input
                            type="text"
                            id="orgName"
                            className="flex-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Name"
                        />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <label
                            htmlFor="address"
                            className="w-full md:w-40 text-left md:text-right pt-2 text-sm text-gray-600"
                        >
                            Address
                        </label>
                        <textarea
                            id="address"
                            rows={4}
                            className="flex-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type Here"
                        />
                    </div>

                    {/* Head of Organization */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <label
                            htmlFor="head"
                            className="w-full md:w-40 text-left md:text-right pt-2 text-sm text-gray-600"
                        >
                            Head of Organization
                        </label>
                        <input
                            type="text"
                            id="head"
                            className="flex-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Name"
                        />
                    </div>

                    {/* Services */}

                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <label
                            htmlFor="services"
                            className="w-full md:w-40 text-left md:text-right pt-2 text-sm text-gray-600"
                        >
                           Services
                        </label>
                        <input
                            type="text"
                            id="services"
                            className="flex-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Services"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <label
                            htmlFor="phone"
                            className="w-full md:w-40 text-left md:text-right pt-2 text-sm text-gray-600"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="flex-1 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Number"
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

export default OrganizationRegistrationForm
