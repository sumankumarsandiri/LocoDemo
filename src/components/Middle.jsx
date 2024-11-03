import React from "react";

import next from "../assets/images/annual-maintenance-contract.jpg";

const Middle = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 left-5 relative">
          <img
            width={500}
            height={400}
            className=" rounded-t-3xl shadow-lg "
            src={next}
            alt="img"
          />
        </div>
        <div className="w-full relative top-0 md:w-3/5">
          {/* <div className="w-full md:w-1/2"> */}
          <h2 className="text-sm uppercase text-gray-600 mb-2">
            GET TO KNOW US
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Local Business with Loco's -
            <span className="text-teal-600">
              Smart Communication Solutions!
            </span>
          </h1>
          <p className="text-gray-600 mb-6">
            LOCO empowers local businesses with smart tools for customer
            engagement in a digital-first world. From WhatsApp chatbots to
            Telegram chatbots campaigns, Loco lets you connect with customers
            instantly and personally – no extra staff needed. Save time, boost
            satisfaction, and stay top-of-mind with an easy-to-use platform
            built for seamless communication. Whether you're running a boutique,
            restaurant, or service, Loco helps you grow by building lasting
            connections, one conversation at a time. Transform your local
            business with Loco today!
          </p>
          <ul className="space-y-2 text-base">
            <li>24x7 Customer Support</li>
            <li>Support & Maintenance</li>
            <li>Faster Development Time</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Middle;
