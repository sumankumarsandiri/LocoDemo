import React from "react";
import { assets } from "../assets/assets";
import sideImage from "../assets/images/roky.png";

const Header = () => {
  return (
    <div>
      <div className=" w-full flex flex-col md:flex-row flex-wrap  rounded-lg px-6 md:px-10 lg:px-20 ">
        {/* --------- Header Left --------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-5 py-12 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="p-2 text-3xl md:text-4xl lg:text-5xl text-teal-700 font-semibold leading-tight md:leading-tight lg:leading-tight">
            Transform Your Local Business <br /> With Automated Conversations!
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-zinc-700 text-sm font-normal">
            {/* <img className="w-28" src={assets.group_profiles} alt="" /> */}
            <h3 className="text-xl pl-2 ">
              Reach your customers on their preferred platforms without the
              hassle of manual messaging.
              <br className="hidden sm:block" />
            </h3>
          </div>
          <a
            href="#speciality"
            className="flex items-center gap-2 bg-teal-400 px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          >
            Request a demo
            <img className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>

        {/* --------- Header Right --------- */}
        <div className="md:w-1/2 left-14 relative  ">
          {/* <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />{" "} */}
          <img
            className="w-full md:absolute top-8 h-auto rounded-lg right-0"
            src={sideImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
