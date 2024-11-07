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
    <div className="relative w-[100vw] h-[100vh] flex flex-col justify-start items-center overflow-hidden">
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
        transition={{ duration: 1.5, delay: 2 }}
        style={{
          color: "rgba(255,255,255,0.5)",
          fontWeight: "700",
        }}
      >
        SAMEER
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute z-10 top-0 h-[100vh] w-[100vw] overflow-hidden"
      >
        <Spline scene="https://prod.spline.design/clrIgn2Lo-wmJ3sd/scene.splinecode" />
      </motion.div>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute w-[40%] left-5 bottom-10"
        style={{
          color: "rgba(255,255,255,1)",
        }}
      >
        <h2 className="text-2xl">Projects</h2>
        <ul>
          <li>
            <strong>SkinAI</strong> - AI-powered health assistant for remote
            skin diagnosis.
            <br />
            <a href="https://www.skinai.live/" target="_blank">
              Live Project
            </a>{" "}
            |{" "}
            <a href="https://github.com/SSameer20/SkinAI" target="_blank">
              Code
            </a>
          </li>
          <li>
            <strong>Block Vault</strong> - Web-based crypto wallet.
            <br />
            <a href="https://block-vault-ten.vercel.app/" target="_blank">
              Live Project
            </a>{" "}
            |{" "}
            <a href="https://github.com/SSameer20/BlockVault" target="_blank">
              Code
            </a>
          </li>
        </ul>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute z-[15] w-[200px] h-[50px] bg-[#000B58] text-white right-5 bottom-5 flex flex-col justify-center items-center rounded-[10px]"
      >
        PROJECTS
      </motion.div> */}
    </div>
  );
}
