import React from "react";
import { tailChase } from 'ldrs'

tailChase.register()

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col gap-5 items-center">
      <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
    </div>
  );
};

export default Loading;
