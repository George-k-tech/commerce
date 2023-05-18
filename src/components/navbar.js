import React from "react";

const Navbar = () => {
  return (
      <div className="border border-red-700 items-center pt-4 pb-4">
      <ul className=" flex flex-row justify-end space-x-4 ">
      <div className="container flex justify-items-start">
        <img src = "" alt="LOGO"/> 
        </div>
          <li>Home</li> 
          <li>Blog</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
  );
};

export {Navbar};
