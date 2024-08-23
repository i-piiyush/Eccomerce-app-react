import React from "react";
import { Link } from "react-router-dom";
function truncateString(str) {
  if (str.length > 20) {
    return str.slice(0, 20) + '...';
  } else {
    return str;
  }
}
  

const Cards = (props) => {
  return (
    <>
   <Link
        to={`/ProductDetail/${props.id}`}
        className="h-[350px] bg-white w-[250px] rounded-md overflow-hidden px-5 mx-3 mb-10"
        >
        <div className="w-full h-[70%] relative">
          <img
            src={props.image}
            className="h-full overflow-hidden object-cover m-auto"
            alt=""
          />
          <span className="px-4 py-1 bg-red-600 text-white font-semibold rounded absolute top-[5%] drop-shadow-xl">
            Sale
          </span>
        </div>
        <div className="h-[1px] bg-red-200 my-2"></div>
        <div className="flex justify-between px-3 items-center h-[30%]">
          <h1 className="font-semibold w-[70%] text-sm">{truncateString(props.title)}</h1>
          <h1 className="font-bold ">${props.price}</h1>
        </div>
      </Link>
    </>
  );
};

export default Cards;
