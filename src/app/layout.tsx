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
  title: "Mobile Sports Massage Cedar Rapids | Kimmi Kraus Massage Therapy",
  description: "Professional mobile sports massage therapy in Cedar Rapids & Eastern Iowa. Therapeutic massage for injury recovery, chronic pain relief, and athletic performance. Licensed therapist—we come to you.",
  keywords: ["sports massage Cedar Rapids", "mobile massage therapy", "therapeutic massage Iowa", "deep tissue massage", "injury recovery massage", "sports massage therapist"],
  openGraph: {
    title: "Mobile Sports Massage Cedar Rapids | Kimmi Kraus",
    description: "Professional mobile sports & therapeutic massage delivered to your home in Cedar Rapids and Eastern Iowa. Relief from chronic pain, faster recovery, better movement.",
    type: "website",
    locale: "en_US",
    siteName: "Kimmi Kraus Massage",
  },
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
