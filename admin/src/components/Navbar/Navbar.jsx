import React from "react";
import { assets } from './../../assets/assets';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img className="w-[20%] md:w-[10%]" src={assets.logo} alt="" />
      <img className="w-11" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
