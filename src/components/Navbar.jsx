import React from "react";
import { useLogto } from "@logto/react";

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex sticky top-0 z-10 backdrop-blur-md items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
      <button
        onClick={() => navigate("/")}
        className="font-bold  text-4xl text-teal-600 "
      >
        LOCO
      </button>
      <ul className="md:flex items-start gap-10 font-medium hidden">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-teal-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/products">
          {/* <NavLink to="/doctors"> */}
          <li className="py-1">PRODUCTS</li>
          <hr className="border-none outline-none h-0.5 bg-teal-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/">
          {/* <NavLink to="/about"> */}
          <li className="py-1">PRICING</li>
          <hr className="border-none outline-none h-0.5 bg-teal-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-teal-400 w-3/5 m-auto hidden " />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 ">
        <button
          onClick={() => navigate("/login")}
          className="bg-teal-600 text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
