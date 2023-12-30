import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  const d = date instanceof Date ? date : new Date(date);
  return Intl.DateTimeFormat("en-UK", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  }).format(d);
}
