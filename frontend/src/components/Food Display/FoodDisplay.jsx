import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../Food Item/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-6">
      <h2 className="text-3xl	font-semibold ">Top dishes near you</h2>
      <div className="grid grid-cols-1 mt-7 gap-y-10 sm:grid-cols-3 gap-8 lg:grid-cols-4">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
