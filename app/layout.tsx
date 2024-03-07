import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import GameProvider from "@/context/game-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Play 2048",
  description: "Fully-functional 2048 game built in NextJS and TypeScript.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
