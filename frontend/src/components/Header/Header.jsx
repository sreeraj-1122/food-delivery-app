import React from "react";

const Header = () => {
  return (
    <div className="bg-backgroundImage h-[35vw] bg-no-repeat my-7 mx-auto bg-contain relative">
      <div className="absolute flex flex-col items-start gap-[1.5vw]  max-w-[65%] md:max-w-[50%] sm:bottom-7 md:bottom-6 lg:bottom-20 bottom-4  left-[6vw] text-white animate-fadeIn">
        <h2 className=" text-[4.2vw] leading-none	  font-medium	">Order your favourite food here</h2>

        <p className="hidden sm:block text-[1.1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.Our mission
          is to satisfy your cravings and elevate your dining experience,one
          delicious meal at a time.
        </p>
        <button className="border-none text-gray-700 font-semibold sm:text-[1.3vw] text-[10px] bg-white rounded-3xl sm:py-[.5vw] sm:px-[2vw] py-[.8vw] px-[2.3vw] ">
          View menu
        </button>
      </div>
    </div>
  );
};

export default Header;
