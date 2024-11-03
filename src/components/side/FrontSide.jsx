import React from "react";

const FrontSide = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 py-8 md:px-6 bg-slate-200">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl/none">
                Empower Your Business with AI
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Loco provides cutting-edge AI chatbots to boost your customer
                engagement and streamline your operations.
              </p>
            </div>
            <div className="space-x-4 flex">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-light hidden md:block">
                Get Started
              </button>
              <button variant="outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontSide;
