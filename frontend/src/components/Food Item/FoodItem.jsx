import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { url } from "../../baseUrl/baseUrl";

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems,setCartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div className="w-full h-full m-auto rounded-xl shadow shadow-gray-300 fade-in">
      <div className="relative">
        <img className="w-full rounded-t-xl " src={`${url}/images/${image}`} alt="" />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            className="w-10 absolute bottom-4 right-3 cursor-pointer rounded-full"
          />
        ) : (
          <div className="absolute bottom-4 flex items-center gap-3 p-1 rounded-full right-3 bg-white">
            <img
            className="w-8"
              onClick={() =>removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
            className="w-8"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-3 mt-1">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold">{name}</p>
          <img className="w-16" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[15px] text-start">{description}</p>
        <p className="text-[tomato] text-lg font-semibold my-2 mx-1 mb-0 ">
        ₹  {price}
        </p>
      </div>
      
    </div>
  );
};

export default FoodItem;
