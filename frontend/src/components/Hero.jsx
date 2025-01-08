import React from 'react'
import hero from '../assets/hero.png'

function Hero() {
  return (
    <div className="relative md:min-h-screen flex items-start md:items-center overflow-hidden bg-white">
    {/* Left side shape image */}
    <div className="hidden md:block absolute left-0 top-0 h-full w-[50%]">
      <img
        src={hero}
        alt="Decorative shape"
        className="w-full h-full"
      />
    </div>

    {/* Content */}
    <div className="relative px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        {/* Left side - empty for the background shape */}
        <div></div>
        
        {/* Right side content */}
        <div className="text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 mb-8 leading-tight">
            Save Life Donate Blood
          </h1>
          <p className="text-gray-600 mb-10 max-w-2xl text-base leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <a
            href="/findblood"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base font-medium"
          >
            Get Blood Now
          </a>
        </div>
      </div>
    </div>
  </div>
 
  )
}

export default Hero