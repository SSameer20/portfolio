import AppLoader from "@/components/AppLoader";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
const Robo = lazy(() => import("@/components/Robo"));

export default function Home({ className }: { className?: string }) {
  return (
    <Suspense fallback={<AppLoader />}>
      <div
        className={`${className} relative w-full h-screen flex flex-col justify-center items-center overflow-hidden`}
      >
        <Robo className="z-10" />
        <motion.div className="absolute w-[0.1px] h-[0.1px] bg-transparent shadow-[0px_0_500px_100px_blue]"></motion.div>
        <motion.div
          className="absolute lg:top-[30vh] lg:left-[5vw] sm:top-[5vh] sm:left-[5vw] flex flex-col font-poppins z-10"
          initial={{
            opacity: 0,
            translateX: -50,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-sm sm:text-base md:text-lg bg-gradient-to-tr from-[rgba(149,149,158,1)] via-[rgba(87,87,116,1)] to-[rgba(34,37,38,1)] bg-clip-text text-transparent">
            Hello! I'm
          </span>
          <motion.span
            initial={{
              opacity: 0,
              translateY: -10,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{ delay: 3, duration: 1 }}
            className="lg:text-6xl sm:text-4xl md:text-6xl bg-gradient-to-tr from-[rgba(149,149,158,1)] via-[rgba(87,87,116,1)] to-[rgba(34,37,38,1)] bg-clip-text text-transparent tracking-wide font-extrabold"
          >
            SAMEER
          </motion.span>
        </motion.div>

        <motion.div
          className="absolute lg:top-[50vh] lg:right-[5vw] sm:top-[60vh] sm:right-[5vw] flex flex-col font-poppins z-10"
          initial={{
            opacity: 0,
            translateX: 50,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-sm sm:text-base md:text-lg bg-gradient-to-tr from-[rgba(149,149,158,1)] via-[rgba(87,87,116,1)] to-[rgba(34,37,38,1)] bg-clip-text text-transparent">
            I am a
          </span>
          <motion.span
            initial={{
              opacity: 0,
              translateY: 10,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{ delay: 3, duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-tr from-[rgba(149,149,158,1)] via-[rgba(87,87,116,1)] to-[rgba(34,37,38,1)] bg-clip-text text-transparent tracking-wide font-extrabold"
          >
            Developer
          </motion.span>
        </motion.div>

        {/* Inner shadow div */}
        <div className=" absolute inset-x-0 bottom-0 w-full h-1/4 bg-gradient-to-t from-black dark:from-background z-15"></div>
      </div>
    </Suspense>
  );
}
