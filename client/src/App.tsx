import { lazy, Suspense } from "react";
import AppLoader from "./components/AppLoader";
// import Skill from "./components/Skills";

const HeroSection = lazy(() => import("./components/Hero"));

export default function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <div
        className="w-full h-screen animation delay-75 overflow-y-auto overflow-x-hidden scroll-hidden [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-500"
      >
        <HeroSection className="" />
        {/* <Skill /> */}
      </div>
    </Suspense>
  );
}
