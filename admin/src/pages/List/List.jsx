import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../baseUrl/baseUrl";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (id) => {
    const response=await axios.post(`${url}/api/food/remove`,{id:id})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []); 
  return (
    <div className="w-3/4 mx-auto mt-10">
      <p className="text-lg mb-3 font-semibold">All Foods List</p>
      <div>
        <div className="grid grid-cols-5 gap-8 sm:gap-2 p-3 border border-gray-400 text-[15px] place-items-center ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-5 gap-7 sm:gap-2 p-3 border border-gray-500 text-[15px] place-items-center text-center"
            >
              <img
                className="w-10 sm:w-2/3"
                src={`${url}/images/` + item.image}
                alt=""
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p
                onClick={() => removeFood(item._id)}
                className="text-lg font-medium cursor-pointer hover:text-[tomato]"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
