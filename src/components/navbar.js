import React from "react";

const Navbar = () => {
  return (
    <div className=" container  border border-amber-300">
      <img src = "" alt="LOGO"/>
        <ul className=" flex justify-end space-x-9 ">
          <li>Home</li> 
          <li>Blog</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
    </div>
  );
};

export default Navbar;
