"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";


const inter = Inter({ subsets: ["latin"] });

const gameboy = localFont({
  src: [
    {
      path: "../public/Gameboy.ttf",
      weight: "500",
    },
  ],
  variable: "--font-gameboy",
});
const kanji = localFont({
  src: [
    {
      path: "../public/kanji.ttf",
      weight: "500",
    },
  ],
  variable: "--font-kanji",
});

export const metadata: Metadata = {
  title: "iiKanji",
  description: "Used by Derek to study kanji",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${gameboy.variable} ${kanji.variable}`}
      >
        <NextUIProvider>
          <div className="relative flex flex-col" id="app-container">
            <main>{children}</main>
            <footer className="flex flex-col mt-6 bottom-0 text-center text-sm text-white">
              <span>Created by Derek Mackey.</span>
              <span>© 2023 All Rights Reserved</span>
            </footer>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
