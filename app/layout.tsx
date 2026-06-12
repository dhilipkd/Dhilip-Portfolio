import type { Metadata } from "next";
import {
  Space_Grotesk,
  Outfit,
} from "next/font/google";

import "primereact/resources/themes/lara-dark-amber/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhilip | Full Stack and Mobile App Developer",
  description:
    "Full Stack and Mobile App Developer Portfolio built with Next.js, Tailwind CSS and PrimeReact",
  keywords: [
    "Dhilip",
    "Portfolio",
    "Full Stack Developer",
    "Mobile App Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${spaceGrotesk.variable}
        ${outfit.variable}
      `}
      suppressHydrationWarning
    >
      <body
        className="
          overflow-x-hidden
          bg-[#050505]
          text-white
          antialiased
          font-[var(--font-outfit)]
        "
      >
        {children}
      </body>
    </html>
  );
}