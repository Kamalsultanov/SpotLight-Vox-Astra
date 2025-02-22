import { PerspectiveCamera, SpotLight, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Chair from "../Components/Chair";
import CanvasLoader from "../Components/CanvasLoader";
import {
  AmbientLight,
  DirectionalLight,
  DirectionalLightHelper,
  Fog,
  PointLight,
  PointLightHelper,
} from "three";
import Navbar from "./Navbar";
import Confession from "../Components/Confession";
import { fog } from "three/tsl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedFog = ({ isActive }) => {
  const fogRef = useRef();


  


  useEffect(() => {
    if (fogRef.current) {
      gsap.to(fogRef.current, {
        far: isActive ? 1 : 15,
        duration: 1.3,
        ease: "power2.inOut",
      });
    }
  }, [isActive]);

  return <fog ref={fogRef} attach="fog" args={[0x000000, 0, 1]} />;
};

const Hero = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    gsap.to(".special-div", {
      keyframes: [
        {
          boxShadow: "inset 0 0 100px rgba(5, 3, 1, 0.7), inset 0px 0 100px ",
          duration: 0.5,
          ease: "power1.inOut",
        },
        {
          boxShadow: isActive
            ? "inset 60px 450px 1000px #050301, inset -60px -450px 1000px #373534"
            : "inset 0px 0 100px rgba(5, 3, 1, 0.7), inset 0 70px 100px #373534",
          duration: 0.3,
          ease: "power1.inOut",
        },
      ],
    });
  }, [isActive]);

  return (
    <section className="relative w-full h-screen">
      <Navbar className="z-10" />
      <button
        onClick={handleClick}
        className={`border border-white text-white font-victor-medium absolute top-[40%] p-6 left-[50%]
         z-50 hover:pointer w-[280px] md:w-[330px] text-[1.4em] confess-tab ${
           isActive ? "block" : "hidden"
         } `}
      >
        Do you wanna hear?
      </button>
      <div className="  w-full h-[100vh] bg-[#DCDCDC]  ">
        <Canvas className="w-full h-full special-div hidden">
          <Suspense fallback={<CanvasLoader />}>
            <Confession isActive={isActive} />
            <AnimatedFog isActive={isActive} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Chair
              scale={0.06}
              position={[0, -0.7, -2]}
              rotation={[-1.3, 0, 3.1]}
            />
            <directionalLight intensity={16} position={[0, 10, 1]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
