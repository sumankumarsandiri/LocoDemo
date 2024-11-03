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
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 transition-opacity duration-1000"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Sign Up</h3>
            <p>Create your account and tell us about your business.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Customize</h3>
            <p>Tailor your AI chatbot to match your brand and needs.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Go Live</h3>
            <p>Launch your chatbot and start engaging customers instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLoco;
