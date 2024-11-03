import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { online } from "../assets/assets";

const MiddleDown = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Transform customer interactions with {""}
        <span className="text-teal-600">Loco AI-integrated chatbots</span>
      </h1>
      <h2 className="text-2xl text-teal-700 md:text-2xl font-semibold text-center mb-8">
        The key to unified and efficient communication.
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        LOCO platform offers flexible messaging and personalized support
        solutions, seamlessly adapting to the unique demands of every Business
        industry to boost success.
      </p>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {online.slice(0, 3).map((item) => (
            <NavLink to="/login">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="relative h-48 sm:h-64">
                  <img
                    src={item.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-pink-500 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-gray-800 leading-tight">
                    {item.title}
                  </h2>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/products");
          }}
          className="bg-[#cdcfcf] text-gray-700 px-12 py-3 rounded-full mt-6 uppercase "
        >
          more
        </button>
      </div>
    </div>
  );
};

export default MiddleDown;
