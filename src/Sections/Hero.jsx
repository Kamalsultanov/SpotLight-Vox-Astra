import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Chair from "../Components/Chair";
import CanvasLoader from "../Components/CanvasLoader";
import { DirectionalLight } from "three";
import Navbar from "./Navbar";
import Confession from "../Components/Confession";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Navbar className="z-10" />
      <div className=" absolute w-full h-full  ">
        
        <Canvas className="w-full h-screen    ">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Chair
              scale={0.06}
              position={[0, -0.5, 25]}
              rotation={[-1.3, 0, 3.1]}
            />
            <Confession className="z-20" />
            <directionalLight intensity={10} position={[5, 10, 5]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
