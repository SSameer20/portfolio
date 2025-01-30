import { Marquee } from "./Marquee";

export default function Skill({ className }: { className?: string }) {
  return (
    <div className={`${className} h-[100vh] w-[100%] grid bg-black`}>
      <Marquee />
    </div>
  );
}
