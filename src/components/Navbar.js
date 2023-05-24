import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
      <div className="border border-red-700 items-center pt-4 pb-4">
      <ul className=" flex justify-end space-x-10 cursor-pointer pr-6">
      <div className="container flex justify-items-start">
        <img src = "" alt="LOGO"/> 
        </div>
        <NavLink to= "/" className="hover:underline ">Home</NavLink>
        <NavLink  className="hover:underline">Blog</NavLink>
        <NavLink className="hover:underline">Profile</NavLink>
        <NavLink to="/cart" className="hover:underline">Cart</NavLink>
        </ul>
      </div>
  );
};

export {Navbar};
