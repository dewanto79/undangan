import type { Metadata } from "next";
import {
  Inter,
  Lobster_Two,
  Euphoria_Script,
  Montserrat,
} from "next/font/google";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${lobster_two.variable} ${euphoria_script.variable} ${montserrat.variable} bg-white text-black `}
      >
        <main className={`bg-my_bg_image bg-fixed max-w-[375px] mx-auto bg-cover `}>
          {children}
        </main>
      </body>
    </html>
  );
}
