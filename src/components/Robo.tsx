import Spline from "@splinetool/react-spline";

export default function Robo({ className }: { className?: string }) {
  return (
    <Spline
      scene="https://prod.spline.design/clrIgn2Lo-wmJ3sd/scene.splinecode"
      className={`${className}`}
    />
  );
}
