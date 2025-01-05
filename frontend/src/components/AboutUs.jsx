import React from 'react';

function AboutUs() {
    return (
        <div className="min-h-screen mb-20 p-4">
            <div className="mx-auto">
                {/* Header */}
                <header className="py-6">
                    <h1 className="text-3xl px-4 rounded-md mx-6 text-white py-6 bg-gradient-to-r from-[#500732] to-[#A8174E] font-bold">About Us</h1>
                    
                </header>

                {/* Content */}
                <section className="space-y-6 bg-white text-black p-8 rounded-lg shadow-2xl">
                    <h2 className="text-2xl font-bold">Who We Are</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <h2 className="text-2xl font-bold">Our Mission</h2>
                    <p className="text-gray-600">
                        At our core, we believe in innovation, integrity, and excellence. 
                        Our mission is to empower individuals and organizations through 
                        cutting-edge technology and outstanding service. We strive to deliver 
                        exceptional value to our clients and contribute positively to the community.
                    </p>

                    <h2 className="text-2xl font-bold">Our Vision</h2>
                    <p className="text-gray-600">
                        To be a global leader in our industry, recognized for our expertise, 
                        innovation, and unwavering commitment to our clients. We envision a future 
                        where our solutions create a lasting impact and help shape a better world.
                    </p>
                </section>

                {/* Footer */}
                <footer className="mt-12 text-center">
                    <p>&copy; {new Date().getFullYear()} Your Organization. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default AboutUs;
