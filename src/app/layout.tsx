import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kimmi Kraus | Sports & Therapeutic Massage",
  description: "Sports and therapeutic massage for men who refuse to slow down. Relief from chronic pain, faster recovery, and better movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          href="https://calendar.google.com/calendar/scheduling-button-script.css" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} antialiased`}
      >
        {children}
        <Script 
          src="https://calendar.google.com/calendar/scheduling-button-script.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
