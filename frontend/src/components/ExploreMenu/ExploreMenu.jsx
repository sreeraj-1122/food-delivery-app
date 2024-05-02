import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="flex flex-col gap-5"  >
      <h1 className="text-[#262626] font-semibold text-3xl">
        Explore our menu
      </h1>
      <p className="md:max-w-screen-sm max-w-full  text-gray-800 text-[14px] sm:text-[16px] font-medium">
        Choose from a diverse menu featuring a delectable array of dishes.Our
        mission is to satisfy your cravings and elevate your dining
        experience,one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-7 my-5 overflow-x-scroll scrollbar-hide ">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center"
            >
              <img
                className={
                  category === item.menu_name
                    ? "border-4 border-orange-600 w-[7.5vw] min-w-20 cursor-pointer p-0.5 rounded-full "
                    : "w-[7.5vw] min-w-20 cursor-pointer rounded-full"
                }
                src={item.menu_image}
                alt=""
              />
              <p className="cursor-pointer mt-1 text-gray-700 font-medium text-sm md:text-base">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-0 my-1 h-0.5  bg-gray-400 border-0" />
    </div>
  );
};

export default ExploreMenu;
