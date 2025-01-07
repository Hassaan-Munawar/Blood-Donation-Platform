import React, { useState } from 'react';

function Mission() {
  const [selected, setSelected] = useState(1);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <section className="py-16 lg:my-10 px-4 md:px-8">
      {/* Mission Section */}
      <div
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        className="mb-20 p-10 rounded-md"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis blanditiis maxime quam expedita facere, dolorem quas velit officia totam ea ab. Porro est quos reprehenderit dolores facere nihil at ratione! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis suscipit aliquid adipisci et similique nihil reiciendis dolor vero voluptate ex ipsa, iure quia delectus numquam, ratione illo, reprehenderit veniam minus!
        </p>
      </div>

      {/* Collaborators Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Collaborators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['NCC', 'NSS', 'YMCA'].map((collaborator, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              style={{
                boxShadow:
                  selected === index
                    ? '0 4px 8px rgba(0, 0, 0, 0.4)'
                    : '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
              className={`bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-[200px] cursor-pointer transition-shadow duration-300`}
            >
              <span
                className={`text-4xl ${
                  selected === index ? 'text-gray-800' : 'text-gray-300'
                } font-bold`}
              >
                {collaborator}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {['NCC', 'NSS', 'YMCA'].map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-2 h-2 rounded-full ${
                selected === index ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
