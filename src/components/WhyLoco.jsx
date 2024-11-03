import React from "react";
import { features } from "../assets/assets";

const WhyLoco = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        {/* Left Section */}
        <div
          className="lg:w-1/2 lg:sticky lg:top-12 p-6"
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl pl-5 lg:text-7xl font-bold text-navy-900 leading-tight">
            How
            <p className="py-3 text-teal-600">LOCO</p>
            <div className="relative  inline-block mt-2">
              <p className="bg-black text-white px-6 py-2 rounded-md transform -rotate-2 inline-block shadow-lg">
                works !
              </p>
            </div>
          </h1>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Curved connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 hidden lg:block" />

            <div className="space-y-16 sm:space-y-24">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-6 group relative"
                >
                  {/* Icon */}
                  <div
                    className={`${feature.bgColor} p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h2>
                    <p
                      className={`${feature.textColor} font-medium mb-3 text-lg`}
                    >
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLoco;
