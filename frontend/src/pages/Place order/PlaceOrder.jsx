import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { url } from "../../baseUrl/baseUrl";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+10,
    }
    let response=await axios.post(`${url}/api/order/place`,orderData,{
      headers:{token}
    })
    console.log(response.data);
    if(response.data.success){
      const {session_url}=response.data
      window.location.replace(session_url);
    }else{
      toast.error(response.data.message)
    }
  };
  const navigate=useNavigate()
  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[])
  return (
    <form
      onSubmit={placeOrder}
      className="flex-col md:flex-row flex items-start justify-between gap-4 mt-20"
    >
      <div className="w-full max-w-md">
        <p className="text-3xl font-semibold text-gray-800 mb-10">
          Delivary Information
        </p>
        <div className="flex gap-2 ">
          <input
            required
            name="firstName"
            onChange={onChangeHandle}
            value={data.firstName}
            className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandle}
            value={data.lastName}
            className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandle}
          value={data.email}
          className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          name="street"
          onChange={onChangeHandle}
          value={data.street}
          className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-2 ">
          <input
            required
            name="city"
            onChange={onChangeHandle}
            value={data.city}
            className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandle}
            value={data.state}
            className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-2 ">
          <input
            required
            name="zipcode"
            onChange={onChangeHandle}
            value={data.zipcode}
            className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
            type="text"
            placeholder="Pincode"
          />
          <input
            required
            className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
            type="text"
            placeholder="Country"
            name="country"
            onChange={onChangeHandle}
            value={data.country}
          />
        </div>
        <input
          required
          className="mb-3 w-full p-2 border border-gray-500 rounded outline-[tomato]"
          type="text"
          id=""
          placeholder="Phone"
          name="phone"
          onChange={onChangeHandle}
          value={data.phone}
        />
      </div>
      <div className="w-full md:w-2/5 ">
        <div className=" flex flex-col gap-5">
          <h2 className="text-xl text-slate-800 sm:text-2xl font-semibold">
            Cart Totals
          </h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</p>
            </div>
            <hr className="my-2 h-[1px] border-none  bg-slate-500" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount() === 0 ? 0 : 10}</p>
            </div>
            <hr className="my-2 h-[1px] border-none  bg-slate-400" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}
              </b>
            </div>
          </div>
          <button
            type="submit"
            className="border-none bg-[tomato] text-white py-2 mt-7  font-medium rounded-sm "
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
