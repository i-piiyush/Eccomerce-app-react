import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col gap-5 items-center">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h1 className="text-5xl font-semibold">Loading</h1>
      </div>
    </div>
  );
};

export default Loading;
