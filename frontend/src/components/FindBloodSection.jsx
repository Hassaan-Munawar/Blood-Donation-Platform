import React from 'react';

function FindBloodSection() {
    return (
        <div className="min-h-screen mb-20 bg-white p-4">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <header className="py-6 text-center">
                    <h1 className="text-4xl font-bold text-[#500732]">Find Blood</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Locate donors and save lives. Every drop counts.
                    </p>
                </header>

                {/* Search Section */}
                <section className="mt-8 rounded-lg bg-gradient-to-r from-[#500732] to-[#A8174E] p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">Search for Blood Donors</h2>
                    <form className="space-y-6">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label htmlFor="bloodGroup" className="w-full md:w-40 text-left  md:text-right text-sm">
                                Blood Group
                            </label>
                            <select
                                id="bloodGroup"
                                className="flex-1 p-2 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            >
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label htmlFor="location" className="w-full md:w-40 text-left  md:text-right text-sm">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Enter your city or area"
                                className="flex-1 p-2 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="rounded-md bg-black px-6 py-2 text-white shadow-md hover:bg-gray-800 transition duration-200"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </section>

                {/* Info Section */}
                <section className="mt-12 space-y-6">
                    <h2 className="text-2xl font-bold text-[#500732]">Why Donate Blood?</h2>
                    <p className="text-gray-600">
                        Blood donation is a simple act that can save lives. Your donation helps
                        those in need, including accident victims, surgery patients, and individuals
                        with chronic illnesses. By donating, you are contributing to a healthier and
                        more compassionate community.
                    </p>
                </section>

                {/* Footer */}
                <footer className="mt-12 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Your Organization. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default FindBloodSection;
