import {
  Anton,
  Work_Sans,
  Plus_Jakarta_Sans,
  Sometype_Mono,
  Lora,
} from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const work_sans = Lora({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://syde2024.vercel.app/"),
  title: "SYDE '24 Class Profile",
  description: "A survey of the SYDE 2024 graduating class",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SYDE '24 Class Profile",
    description: "Telling the stories of the class of 2024.",
    url: "https://syde2024.vercel.app/",
    siteName: "SYDE '24 Class Profile",
    images: [
      {
        url: "/images/opengraph-image.jpg", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  fb: {
    app_id: "your_facebook_app_id_here",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth h-full overflow-x-hidden ${anton.variable} ${work_sans.variable}`}
    >
      <body className="relative h-full">{children}</body>
    </html>
  );
}
