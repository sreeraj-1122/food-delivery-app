import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { url } from "../../baseUrl/baseUrl";
import  axios  from "axios";
import { StoreContext } from "../../context/StoreContext";
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
  const { token, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      toast.success(response.data.message)
      setShowLogin(false)
    }else{
      console.log(response.data.message);
      toast.error(response.data.message)

    }
  };
  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid ">
      <form
        onSubmit={onLogin}
        className="place-self-center w-full	sm:w-1/3 text-[#808080] bg-white flex flex-col gap-6 px-6 py-5 rounded-lg	text-base fade-in"
      >
        <div className="flex items-center justify-between font-bold text-xl text-gray-700">
          <h2>{currentState}</h2>
          <img
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 text-slate-800">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none border border-slate-500 p-2 rounded-md	 "
              type="text"
              placeholder="Your name"
              required
              name="name"
              value={data.name}
              onChange={onChangeHandler}
            />
          )}
          <input
            className="outline-none border border-slate-500 p-2 rounded-md	 "
            type="email"
            placeholder="Your email"
            required
            name="email"
            value={data.email}
            onChange={onChangeHandler}
          />
          <input
            className="outline-none border border-slate-500 p-2 rounded-md	 "
            type="password"
            placeholder="Password"
            required
            name="password"
            value={data.password}
            onChange={onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[tomato] p-2 rounded-md font-semibold "
        >
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex  items-start gap-2 -mt-3">
          <input type="checkbox" required className="mt-2" />
          <p>By continuing,i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
