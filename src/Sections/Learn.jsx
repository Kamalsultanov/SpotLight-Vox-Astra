import { image } from "framer-motion/client";
import React from "react";

const Learn = () => {
  const arr = [
    {
      title: "Listen",
      description:
        " Listening is the first step to healing. Support survivors by offering a safe space, understanding, and compassion.",
      image: "/icons/ear.png",
    },
    {
      title: "Speak",
      description:
        "Your voice matters. Encourage survivors to speak up by creating a safe and supportive environment.",
      image: "/icons/speaking.png",
    },
    {
      title: "Look",
      description:
        "Pay attention to the signs—abuse isn’t always visible. Being observant and aware can help protect and support those in need.",
      image: "/icons/eye.png",
    }
  ]


  return (
    <section id="learn" className="min-h-[80vh] w-full bg-gradient-to-r from-[#1f1e1e] to-[#3b3b3b]">
      <div className="text-white w-full flex justify-center font-victor-medium text-3xl p-8 ">
        <h3><span className="underline">Learn</span> what actions you can take.</h3>
      </div>

      <div className="w-full md:flex gap-3 justify-center p-4">
      {arr.map((item, index) => (
        <div 
          key={index} 
          className="learn-tab"
        >
          <div className="flex items-center justify-center">
            <img src={item.image} alt={item.title} className="w-[80px] h-auto" />
          </div>
          <div className="text-[#DCDCDC] font-victor-regular text-center my-2">
            <h1 className="font-victor-medium text-2xl">{item.title}</h1>
            <p className="text-sm px-6 py-3">{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Learn;
