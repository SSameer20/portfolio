import { IconCloud } from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    // <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background">
    <IconCloud images={images} />
    // </div>
  );
}
