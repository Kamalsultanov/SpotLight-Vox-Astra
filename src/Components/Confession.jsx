import { Html } from "@react-three/drei";
import React, { useState, useEffect } from "react";


const Confession = ({ isActive }) => {

  const storiesShort = [
    { 
      id: 1, 
      name: "Oprah Winfrey", 
      shortStory: "I overcame childhood abuse and poverty to become a media icon." 
    },
    { 
      id: 2, 
      name: "Rihanna", 
      shortStory: "I survived domestic abuse and now advocate for survivors worldwide." 
    },
    { 
      id: 3, 
      name: "Gabrielle Union", 
      shortStory: "I turned my experience with assault into advocacy for survivors." 
    },
    { 
      id: 4, 
      name: "Patrick Stewart", 
      shortStory: "I witnessed domestic violence and now fight for survivors' rights." 
    }
  ];
  
    

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % storiesShort.length);
        setFade(true); 
      }, 1000); 
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);


  return (
    <Html
      as="div"
      className={`confess-tab bottom-[90%] bg-transparent   text-center
     border-gray-400   rounded-md overflow-hidden ${
       isActive ? "w-0 " : "w-[280px] "
     } transition-all duration-1500 `}
    >
    <div className={`story-content ${fade ? "fade-in" : "fade-out"} transition-all duration-500`}>
        <p className="font-victor-regular text-gray-800 text-[1.3em] pb-7 max-w-[280px] md:w-[350px]">
          <span>"</span>
          {storiesShort[currentIndex].shortStory}
          <span>"</span>
        </p>
        <span className="text-white font-victor-regular w-[340px] text-[1.5em]">
          {storiesShort[currentIndex].name}
        </span>
      </div>
    </Html>
  );
};

export default Confession;
