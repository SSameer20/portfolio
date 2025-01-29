import { IconCloudDemo } from "./IconCloud";

export default function Skill({ className }: { className?: string }) {
  return (
    <div
      className={`${className} h-[80vh] w-[100%] grid grid-cols-2 grid-rows-1 justify-center items-center`}
    >
      <IconCloudDemo />
      <IconCloudDemo />
    </div>
  );
}
