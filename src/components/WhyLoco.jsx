import React from "react";
// import { Search, GraduationCap, Globe } from "lucide-react";

const WhyLoco = () => {
  return (
    <section className="w-full  py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-white-800 transition-opacity duration-1000">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="flex flex-col items-center text-center p-4 border border-gray-300 ">
            <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-4">Sign Up</h3>
            <p>Create your account and tell us about your business.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-gray-300 ">
            <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Customize</h3>
            <p>Tailor your AI chatbot to match your brand and needs.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-gray-300">
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
