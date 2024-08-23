import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "../utils/axios";
import {Link, useParams} from "react-router-dom";



const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className=" w-full h-full flex">
      <div className=" w-[30%] h-[60%] mx-10 py-20">
        <img
          src={product.image}
          className="h-full overflow-hidden object-cover m-auto mix-blend-multiply"
          alt=""
        />
      </div>
      <div className=" w-[70%] px-10 py-20">
        <h1 className="text-5xl font-bold w-[80%] mb-10">
          {product.title}
        </h1>
        <p className="opacity-75 w-[80%] mb-20">
          {product.description}
        </p>
        <h1 className="text-5xl font-semibold mb-5 ">${product.price} or $5.69/month</h1>
        <p className="opacity-75 w-[50%] mb-20">
          Suggested payments with 6 months special finacing
        </p>
        <div className="flex gap-5 items-center mb-10">
          <button
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
            className="text-sm bg-black text-white px-4 py-2 rounded-full"
          >
            Add
          </button>
          <p className="text-xl opacity-75">{count}</p>
          <button
            onClick={() => {
              count < 1
                ? alert("quantity should be greater than 0")
                : setCount((prev) => prev - 1);
            }}
            className="text-sm bg-black text-white px-4 py-2 rounded-full"
          >
            Subtract
          </button>
        </div>

        <button className="bg-black text-white px-10 py-3 rounded-full mr-4 border-2 border-black">
          Buy Now
        </button >
        <button className=" text-black px-10 py-3 mb-10 rounded-full btn">
          Add to cart
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductDetail;
