import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createWhatsappLink($phone = '59899419419', $subject = 'Terapia%20Psicologica%20') {
  return `https://api.whatsapp.com/send?phone=${$phone}&text=%C2%A1Hola!%20me%20interesa%20informaci%C3%B3n%20sobre%20${$subject}`
}

export function staticUrl(url: string) {
  return `/public${url}`
}
