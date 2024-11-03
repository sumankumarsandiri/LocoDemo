import React from "react";
import { Link } from "react-router-dom";
import { businessDemo } from "../assets/assets";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-32 text-center">
      <h2 className="text-base uppercase text-gray-600 mb-2">What We Do ?</h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Grow Your Business With <span className="text-teal-600">LOCO</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Transform Your Business with LOCO's Innovative Tools!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {businessDemo.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img
              className="w-full h-40 sm:h-44 object-cover rounded-full mb-2 "
              src={item.image}
              alt=""
            />
            <p className="text-lg font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
