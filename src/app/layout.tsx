import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Passion_One, Lobster } from "next/font/google";
import { Nav } from "@/components/templates/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--poppins-font",
});

const passionOne = Passion_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--passion-font",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--lobster-font",
});

export const metadata: Metadata = {
  title: "Harmonia",
  description: "Place where songs find their harmony.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${passionOne.variable} ${lobster.variable} bg-primary-900 text-secondary-900 font-poppins`}
      >
        <Nav />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
