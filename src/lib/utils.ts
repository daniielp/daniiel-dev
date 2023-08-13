import { clsx, type ClassValue } from "clsx"
import { env } from "@/env.mjs";
import { twMerge } from 'tailwind-merge'

export function classNames(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
    return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function formatDate(date: Date | string) {
    const formatedDate = new Date(date)
    return Intl.DateTimeFormat('da-DK', {dateStyle: "long"}).format(formatedDate)
}