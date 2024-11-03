import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src="https://www.bew-web-agency.fr/wp-content/uploads/2023/10/chatbot-e1698791092318.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-lg text-gray-600">LOCO</p>
          <p className=" text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className=" text-gray-500">
            Tel: (415) 555-0132 <br /> Email: locov@gmail.com
          </p>
          <p className=" font-semibold text-lg text-gray-600">
            CAREERS AT LOCO
          </p>
          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
