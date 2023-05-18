import React from "react";
import {FaWhatsappSquare,FaTwitterSquare,FaFacebookSquare,FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    
      <div className="border border-blue-900 grid grid-cols-3 bg-slate-500 text text-black ">
        <div className="">
          <div className="">
            <h1>G-Commerce</h1>
          </div>
          <div className="">
            <p>
              Exercitation cupidatat commodo nulla nisi esse duis. Laboris minim
              anim labore sunt commodo Lorem sint non voluptate duis. Ut sint
              amet adipisicing laborum elit consectetur minim. Reprehenderit
              aute mollit officia anim veniam velit et id et esse nostrud.
            </p>
          </div>
          <div>
            <p className="flex justify-between">
                <FaWhatsappSquare/>
                <FaTwitterSquare/>
                <FaFacebookSquare/>
                <FaLinkedin/>

            </p>
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <h1>Important Links</h1>
          </div>
          <div>
            <h1>F.A.Q</h1>
          </div>
          <div>
            <h1>cookies</h1>
          </div>
          <div>
            <h1>Terms of Service</h1>
          </div>
          <div>
            <h1>Support</h1>
          </div>
        </div>
        <div className="">
          <div className="">
            <h1> News letter</h1>
          </div>
          <div className="flex justify-stretch">
            <input type="email" placeholder="Input Email" className="flex-auto w-auto pt-2 pb-2 border-2 border-red-600 rounded-lg"></input>
          </div> 
          <div className="flex justify-center pt-2 ">
          <button type="submit" className="border rounded-full bg-blue-700 w-32">Subscribe</button>
            </div>         

        </div>
      </div>
  );
};

export { Footer };
