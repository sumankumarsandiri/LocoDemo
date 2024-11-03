import React from "react";
// import { Zap, BarChart, Users } from "lucide-react";
import { LuZap, LuBarChart3 } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";

const KeyFeatures = () => {
  //   const [isVisible, setIsVisible] = useState({ features: false });
  return (
    <div className="w-full  py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-white-800 transition-opacity duration-1000">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="h-full p-4 pb-8 pt-6 border border-gray-300 shadow-lg ">
            <div>
              <LuZap className="h-8 w-8 mb-4  " />
              <h1 className="text-2xl mb-3">AI-Powered Chatbots</h1>
            </div>
            <div>
              <p className=" text-gray-600">
                Engage customers 24/7 with intelligent conversation.
              </p>
            </div>
          </div>
          <div className="h-full p-4 pb-8 pt-6 border border-gray-300 shadow-lg">
            <div>
              <LuBarChart3 className="h-8 w-8 mb-2" />
              <h1 className="text-2xl mb-3">Analytics Dashboard</h1>
            </div>
            <div>
              <p className=" text-gray-600">
                Gain insights from customer interactions and improve your
                service.
              </p>
            </div>
          </div>
          <div className="h-full p-4 pb-8 pt-6 border border-gray-300 shadow-lg">
            <div>
              <FaUsers className="h-8 w-8 mb-2" />
              <h1 className="text-2xl mb-3">Multi-Channel Support</h1>
            </div>
            <div>
              <p className=" text-gray-600">
                {" "}
                Integrate with websites, social media, and messaging apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
