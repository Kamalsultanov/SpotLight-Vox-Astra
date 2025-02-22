import React from "react";
import { BiDonateHeart } from "react-icons/bi";


const Donate = () => {
  return (
    <section
      id="donate"
      className="w-full min-h-[70vh]   bg-gradient-to-r from-[#1f1e1e] to-[#3b3b3b]  "
    >
      <div className="text-white w-full flex  flex-col text-center justify-center  ">
        <h3 className="font-victor-medium text-3xl my-3 pt-10 ">
          <span className="underline">Donate</span> for the cause.
        </h3>
      </div>

      <div className=" p-5 md:flex md:w-[90%] items-center ">
        <div className="donate-tab">
          <BiDonateHeart />
        </div>
        <div className="w-[60%] md:flex">
          <ul className="donate-options-container">
            <li className="donate-options">10$</li>
            <li className="donate-options">20$</li>
            <li className="donate-options">30$</li>
          </ul>
          <button className="donate-button">Donate</button>
        </div>
      </div>
    </section>
  );
};

export default Donate;
