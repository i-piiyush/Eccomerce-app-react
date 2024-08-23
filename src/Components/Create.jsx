import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import toast, { Toaster } from "react-hot-toast";

const toast_err = () => toast.error("Make sure to fill each field");
const toast_suc = () => toast('Hurray! New product Added', {
  icon: '🎉'
});

const Create = () => {
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [Desc, setDesc] = useState("");
  const [Image, setImage] = useState("");
  const [Category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Title.length < 1 ||
      Price < 1 ||
      Desc.length < 1 ||
      Image.length < 1 ||
      Category.length < 1
    ) {
      toast_err()
    } else {
      axios
        .post("https://fakestoreapi.com/products", {
          title: Title,
          price: Price,
          description: Desc,
          image: Image,
          category: Category,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });

        toast_suc()
    }
  };

  return (
    <div className="h-full w-full flex py-10">
      <div>
        <Toaster />
      </div>
      <div className="h-full w-[20%] border-r border-[#00000059] flex flex-col justify-center items-center">
        <Link
          to={"/editproduct"}
          className="my-[5%] bg-black text-white text-xm py-4 w-[175px] rounded-full flex justify-center itmes-center"
        >
          Edit product
        </Link>
        <Link
          to="/"
          className="my-[5%] bg-black text-xm py-3 w-[175px] rounded-full flex items-center justify-center btn"
        >
          Home
        </Link>
      </div>
      <div className=" h-full w-[70%] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold mb-5">Add a Product</h1>
        <form>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-5 w-[500px] py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category:
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
