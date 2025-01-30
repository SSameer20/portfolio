import { SCREEN } from "./types";

type size = number;

export const itemSize = (...args: size[]): string => {
  const width = window.innerWidth;

  // Ensure we only access valid indices in args
  if (args[0] && width >= SCREEN.LARGE) {
    return `${args[0]}px`;
  }

  if (args[1] && width <= SCREEN.MEDIUM && width >= SCREEN.SMALL) {
    return `${args[1]}px`;
  }

  if (args[2] && width <= SCREEN.SMALL) {
    return `${args[2]}px`;
  }

  // Default to the first argument if none of the above conditions are met
  return `${args[0] || 0}px`; // Providing a fallback value in case args[0] is undefined
};
