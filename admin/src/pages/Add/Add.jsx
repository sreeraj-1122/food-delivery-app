import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../baseUrl/baseUrl";
const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",  
    category: "Salad",
  });
  const onChangehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    
    }

  };

  return (
    <div className="w-[70%] mx-auto sm:ms-16 mt-10 ">
      <form
        className="flex flex-col gap-5 w-full items-start "
        onSubmit={onSubmitHandler}
      >
        <div>
          <p className="mb-1 text-gray-800 font-medium">Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-28"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            className="border border-gray-500 w-full sm:w-[50%]"
            type="file"
            id="image"
            hidden
            required
            
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="w-full">
          <p className="mb-1 text-gray-800 font-medium">Product Name</p>
          <input
            className="border border-gray-500 w-full sm:w-[50%]  p-2"
            type="text"
            name="name"
            placeholder="Type here"
            onChange={onChangehandler}
            value={data.name}
          />
        </div>
        <div className="w-full">
          <p className="mb-1 text-gray-800 font-medium">Product Description</p>
          <textarea
            className="border border-gray-500 w-full sm:w-[50%]  p-2"
            name="description"
            rows="6"
            placeholder="Write content here"
            onChange={onChangehandler}
            value={data.description}
          ></textarea>
        </div>
        <div className="flex-col sm:flex-row flex items-center gap-5 w-full sm:w-1/2">
          <div className=" w-full ">
            <p className="mb-1 text-gray-800 font-medium ">Product Category</p>
            <select
              name="category"
              className="border border-gray-500 w-full  p-2"
              onChange={onChangehandler}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className=" w-full">
            <p className="mb-1 text-gray-800 font-medium">Product Price</p>
            <input
              className="border border-gray-500 w-full  p-2"
              type="number"
              name="price"
              placeholder="$20"
              onChange={onChangehandler}
              value={data.price}
            />
          </div>
        </div>
        <button
          className="bg-gray-900 w-full sm:w-1/2 py-2 mb-4 text-white font-medium border-none outline-none rounded"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
