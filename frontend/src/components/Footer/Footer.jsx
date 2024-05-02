import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div id="footer" className="text-[#d9d9d9]  bg-[#323232] flex flex-col items-center gap-5 py-5 pt-20 mt-16 sm:mt-20 px-[8vw]">
      <div className="w-full flex flex-col gap-7 sm:grid grid-cols-4 sm:gap-20 ">
        <div className="flex flex-col items-start gap-5 col-span-2">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            laborum vitae labore veniam ducimus, fugit odit perspiciatis quis
            delectus esse assumenda ullam ea praesentium rem, iure perferendis
            recusandae enim sed.
          </p>
          <div className="flex justify-center items-center gap-4">
            <img className="w-10 cursor-pointer" src={assets.facebook_icon} alt="" />
            <img className="w-10 cursor-pointer" src={assets.twitter_icon} alt="" />
            <img className="w-10 cursor-pointer" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 col-span-1">
            <h2 className="text-xl font-semibold text-white">COMPANY</h2>
            <ul>
                <li className="mb-1 cursor-pointer">Home</li>
                <li className="mb-1 cursor-pointer">About us</li>
                <li className="mb-1 cursor-pointer">Delivary</li>
                <li className="mb-1 cursor-pointer">Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-5 col-span-1">
            <h2 className="text-xl font-semibold text-white">GET IN TOUCH</h2>
            <ul>
                <li className="mb-1 cursor-pointer">8078382787</li>
                <li className="mb-1 cursor-pointer">sreeraj2122@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full my-5 h-0.5 bg-gray-200 border-none "/>
      <p className="text-center">Copyright 2024 © Tomato.com . All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
