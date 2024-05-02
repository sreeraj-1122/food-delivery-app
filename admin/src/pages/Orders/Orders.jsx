import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "./../../baseUrl/baseUrl";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "./../../assets/assets";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const statusHandler=async(e,orderId)=>{
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:e.target.value
    })
    if (response.data.success) {
      await fetchAllOrders()
    }
    console.log(response.data);
  }
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className="w-[75%] mx-auto sm:ms-14 mt-10 ">
      <h3 className="font-semibold text-xl">Order Page</h3>
      <div  >
        {orders.map((order, index) => (
          <div key={index} className="grid grid-value border border-[tomato] my-7 text-sm text-gray-900  gap-5 sm:gap-7 p-4 md:p-5">
            <img src={assets.parcel_icon} alt="" className="w-14"/>
            <div>
            
            <p className="font-semibold ">
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ",";
                }
              })}
            </p>
            <p className="font-semibold mt-5 mb-1">{order.address.firstName + " " + order.address.lastName}</p>
            <div>
              <p>{order.address.street + ","}</p>
              <p>
                {order.address.city +
                  ", " +
                  order.address.state +
                  ", " +
                  order.address.country +
                  ", " +
                  order.address.zipcode +
                  ", "}
              </p>
            </div>
            <p>{order.address.phone}</p>
            </div>
            <p>Item: {order.items.length}</p>
            <p>${order.amount}</p>
            <select value={order.status} onChange={(e)=>statusHandler(e,order._id)} className="bg-orange-200 border border-[tomato]   p-1 md:p-2 outline-none">
            <option value="Food Processing">Food Processing</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
