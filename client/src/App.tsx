import { lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import tyre from "./media/tyre.png";
const HeroSection = lazy(() => import("./pages/Hero"));

export default function App() {
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5 * 1000);
  }, []);
  if (load)
    return (
      <div className=" font-bold text-white flex w-full h-screen justify-center items-center">
        <motion.div className="flex gap-2 justify-center items-center">
          <span className="--i:1 text-6xl">L</span>
          <span className="--i:2 text-6xl animate-spin-fast">
            <img src={tyre} alt="o" className="h-[100px]" />
          </span>
          <span className="--i:3 text-6xl">A</span>
          <span className="--i:4 text-6xl">D</span>
          <span className="--i:5 text-6xl">I</span>
          <span className="--i:6 text-6xl">N</span>
          <span className="--i:7 text-6xl">G</span>
        </motion.div>
      </div>
    );
  else
    return (
      <div className="w-full h-screen animation delay-75">
        <HeroSection />
      </div>
    );
}
