import React from "react";
import chatBot from "../assets/images/Chatbot_720x480_header.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 ">
      <div className="flex flex-col md:flex-row items-center 0 justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Step into automation
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-600">
            launch your first chatbot for success!
          </h2>
          {/* <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full">
            Create account
          </Button> */}
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-teal-600 text-sm sm:text-base text-[#f5f2f2] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all "
          >
            Create account
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={chatBot}
            alt="Friendly chatbot illustration"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
