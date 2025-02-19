import { Marquee } from "./Marquee";

export default function Skill({ className }: { className?: string }) {
  return (
    <div className={`${className} w-full grid bg-black`}>
      <Marquee />
    </div>
  );
}
