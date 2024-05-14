import type { Metadata } from "next";
import {
  Inter,
  Lobster_Two,
  Euphoria_Script,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const lobster_two = Lobster_Two({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster-two",
  display: "swap",
});
const euphoria_script = Euphoria_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-euphoria_script",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiki-deya.dewantosurya.com"),
  title: "Wedding of Dewan and Kiki",
  description: "Wedding of Dewanto Surya and Kiki Deya",
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    title: "Wedding of Dewan and Kiki",
    description: "Wedding of Dewanto Surya and Kiki Deya",
    siteName: "Wedding of Dewan and Kiki",
    images: "/image/PreWedding/4.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/image/PreWedding/4.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Suspense>
        <body
          className={`${inter.variable} ${lobster_two.variable} ${euphoria_script.variable} ${montserrat.variable} bg-white text-black `}
        >
          <main
            className={`bg-my_bg_image bg-fixed max-w-[480px] w-full mx-auto bg-cover `}
          >
            {children}
          </main>
        </body>
      </Suspense>
    </html>
  );
}
