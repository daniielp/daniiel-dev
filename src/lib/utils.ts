import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
<<<<<<< Updated upstream

export function absoluteUrl(path: string) {
    return `${env.NEXT_PUBLIC_APP_URL}${path}`
  }

export function formatDate(date: Date | string) {
    const formatedDate = new Date(date)
    return new Intl.DateTimeFormat("da-DK", {dateStyle: "long"}).format(formatedDate);
}
=======
>>>>>>> Stashed changes
