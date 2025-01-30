import { MarqueeDemo } from "./Marquee";

export default function Skill({ className }: { className?: string }) {
  return (
    <div className={`${className} h-[5vh] w-[100%] grid bg-red`}>
      <MarqueeDemo />
    </div>
  );
}
