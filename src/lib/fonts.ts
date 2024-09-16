import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Roboto as FontSerif,
} from "next/font/google";
// import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "100",
});



// export const fontSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-sans",
//   weight: "100 900",
// });
// export const fontMono= localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-mono",
//   weight: "100 900",
// });