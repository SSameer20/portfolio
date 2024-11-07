// import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { itemSize } from "./lib/helper";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-start items-center overflow-y-auto overflow-x-hidden">
      <motion.span
        initial={{
          y: -100,
          opacity: 0,
          fontSize: itemSize(200, 130, 120),
          letterSpacing: itemSize(80, 60, 20),
        }}
        animate={{
          y: 100,
          opacity: 1,
          fontSize: itemSize(150, 80, 70),
          letterSpacing: itemSize(50, 50, 10),
        }}
        transition={{ duration: 1.5, delay: 3 }}
        style={{
          color: "rgba(255,255,255,0.5)",
          fontWeight: "700",
        }}
      >
        SAMEER
      </motion.span>
      <div className="absolute z-10 top-0 h-[100vh] w-[100vw]">
        <Spline scene="https://prod.spline.design/clrIgn2Lo-wmJ3sd/scene.splinecode" />
      </div>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute w-[40%] left-5 bottom-10"
        style={{
          color: "rgba(255,255,255,1)",
        }}
      >
        <h2 className="text-[yellow] text-3xl">About Me</h2>
        <p className="w-[80%] text-[xl]">
          Bachelor of Technology in Computer Science, Lovely Professional
          University, Phagwara, Punjab - CGPA: 7.5
        </p>
      </motion.div>
    </div>
  );
}
