import React from "react";
import { useContext } from "react";
import  { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinctCategories = products && products.map((p) => p.category);
  distinctCategories = [...new Set(distinctCategories)]


  const colors = () => {
    return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`
  }
  
  
  return (
<div className="py-10 w-[20%]">
  <nav className=" h-full border-r border-gray-400 px-10 flex flex-col justify-center">
      <Link to={"/create"} className="my-[5%] bg-black text-white text-xm py-4 w-[60%] rounded-full flex justify-center itmes-center">
        Add a Product
      </Link>
      <Link to="/" className="my-[5%] bg-black text-xm py-3 w-[60%] rounded-full flex items-center justify-center btn">
        Home
      </Link>
      <h1 className="text-3xl font-semibold mb-5">Category Filter</h1>


      {
        distinctCategories.map((category , i ) => (
          <div key={i}>
        <Link to={`/?category=${category}`} className="flex gap-3 my-2 capitalize items-center">
          <span style={{backgroundColor:colors()}} className="rounded-full w-[15px] h-[15px]"></span>
          {category}
        </Link>
       
      </div>
        ))
      } 
    </nav>
</div>
    
  );
};

export default Nav;
