import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string) {
  const formatedDate = new Date(date)
  return new Intl.DateTimeFormat("da-DK", { dateStyle: "long" }).format(formatedDate)
}
