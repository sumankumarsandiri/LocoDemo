import React from "react";

import { FaCheck } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { plans } from "../../assets/assets";

const Pricing = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Transparent Pricing for Every Business
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choose the plan that's right for your business. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className=" grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative flex flex-col gap-5 p-6 border border-gray-300 shadow-xl"
            >
              <div>
                <h1 className="text-xl">{plan.name}</h1>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      {feature.included ? (
                        <FaCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      ) : (
                        <HiX className="h-5 w-5 mr-2 text-red-500 flex-shrink-0" />
                      )}
                      <span
                        className={!feature.included ? "text-gray-500" : ""}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button
                  className="w-full bg-black text-white p-3 shadow-xl"
                  variant={index === 1 ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
