import {Dancing_Script, Poppins} from "next/font/google";


export const primaryFont = Poppins({
subsets: ['latin'],
    weight:['400', '500'],
    preload: true,
    display: "swap",
    fallback: ['system-ui', 'sans-serif'],
})

export const secondaryFont = Dancing_Script({
    subsets: ['latin'],
    weight:['400'],
    preload: true,
    display: "swap",
    fallback: ['system-ui', 'sans-serif'],
})
