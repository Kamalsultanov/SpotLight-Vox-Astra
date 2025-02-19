import { Html } from "@react-three/drei";
import React from "react";

const Confession = ({ isActive }) => {
  return (
    <Html
      as="div"
      className={`confess-tab bottom-[90%] bg-transparent   text-center
     border-gray-400   rounded-md overflow-hidden ${
       isActive ? "w-0 " : "w-[280px] "
     } transition-all duration-1500 `}
    >
      <p className="font-victor-regular text-gray-800  pb-7  max-w-[280px] md:w-[350px]">
        <span>"</span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <span>"</span>
      </p>
      <span className="text-white font-victor-regular pt-6  w-[340px]">Author</span>
    </Html>
  );
};

export default Confession;
