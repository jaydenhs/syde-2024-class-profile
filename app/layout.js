import Head from "next/head";
import { Anton, Work_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "SYDE '24 Class Profile",
  description: "A survey of the SYDE 2024 graduating class",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${anton.variable} ${work_sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
