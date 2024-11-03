import React from "react";
import { Search, GraduationCap, Globe } from "lucide-react";

const WhyLoco = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Explore",
      subtitle: "Different courses and trending skills",
      description:
        "Explore the million possibilities of getting in touch with all the trending skills in the market",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learn",
      subtitle: "From the best of mentors",
      description:
        "Learn from mentors who have real-time expertise in their respective fields",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Inspire",
      subtitle: "The world around you",
      description:
        "Inspire people close to you and help make a tangible difference in society",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:sticky lg:top-12">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 leading-tight">
            How
            <br />
            Loco
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-cyan-400 text-white px-6 py-2 rounded-md transform -rotate-2 inline-block">
                works
              </span>
            </span>
          </h1>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Curved connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 hidden lg:block" />

            <div className="space-y-16">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-6 group relative"
                >
                  {/* Connection dot */}
                  <div className="hidden lg:block absolute left-8 w-2 h-2 rounded-full bg-white border-2 border-gray-200 transform -translate-x-[5px]" />

                  {/* Icon */}
                  <div
                    className={`${feature.bgColor} p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h2>
                    <p className={`${feature.textColor} font-medium mb-2`}>
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
