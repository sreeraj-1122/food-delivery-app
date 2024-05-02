import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/");
  };
  return (
    <div className=" flex justify-between px-0 py-7 items-center">
      <Link to="/">
        <img className="w-30 h-4 md:w-40 md:h-8 " src={assets.logo} alt="" />
      </Link>
      <ul className="hidden sm:flex gap-6 list-none text-navColor text-lg font-semibold ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "border-b-2 border-red-400 	cursor-pointer"
              : "cursor-pointer"
          }
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "border-b-2 border-red-400 	cursor-pointer"
              : "cursor-pointer"
          }
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile")}
          className={
            menu === "mobile"
              ? "border-b-2 border-red-400 	cursor-pointer"
              : "cursor-pointer"
          }
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={
            menu === "contact"
              ? "border-b-2 border-red-400 	cursor-pointer"
              : "cursor-pointer"
          }
        >
          Contact Us
        </a>
      </ul>
      <div className="flex justify-between items-center sm:gap-9 gap-5  ">
        <img className="w-6" src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to="/cart">
            <img className="w-6" src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "min-w-2	min-h-2 rounded-3xl bg-red-500 absolute -top-1 -right-2"
            }
          ></div>
        </div>
        {!token ? (
          <button
            className="bg-transparent text-navColor text-base border border-gray-500 sm:px-7 px-4 sm:py-1.5 py-1 rounded-3xl font-bold tracking-wide duration-500 ease-in-out hover:bg-slate-200"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>
        ) : (
          <div className="group relative cursor-pointer">
            <img className="w-5" src={assets.profile_icon} alt="" />
            <ul className="hidden group-hover:block absolute bg-red-100 shadow-md rounded-md py-2  w-36  z-10 right-0  gap-3	">
              <li onClick={()=>navigate('/myorders')} className="flex items-center ps-2 font-medium">
                <img className="w-5" src={assets.bag_icon} alt="" />
                <p className="ml-2 cursor-pointer hover:text-red-600">Orders</p>
              </li>
              <hr className="my-1 w-full bg-gray-500 h-[1px] border-none" />
              <li
                className="flex items-center ps-2 font-medium"
                onClick={logOut}
              >
                <img className="w-5" src={assets.logout_icon} alt="" />
                <p className="ml-2 cursor-pointer hover:text-red-600">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
