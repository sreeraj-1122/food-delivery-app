import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { url } from "../../baseUrl/baseUrl";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="my-12 mx-0">
        <h2 className="font-bold text-xl">My Orders</h2>
      <div className="flex flex-col gap-5 mt-7">
        {
            data.map((order,index)=>{
                return(
                    <div key={index} className="grid grid-value  items-center g-7 text-sm px-5 py-2 font-normal border border-[tomato] ">
                        <img className="w-12" src={assets.parcel_icon} alt="" />
                        <p >{order.items.map((item,index)=>{
                            if (index===order.items.length-1) {
                                return item.name+ " x "+item.quantity
                            }else{
                                return item.name +" x "+item.quantity+","

                            }
                        })}</p>
                        <p>$ {order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span className="text-[tomato]">&#x25cf;</span> <b className="font-semibold text-gray-950 ps-1">{order.status}</b></p>
                        <button onClick={fetchOrders} className="border-none py-3 px-0 rounded-sm  bg-orange-200 text-gray-800 font-semibold text-[12px] sm:text-sm">Track Order</button>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default MyOrders;
