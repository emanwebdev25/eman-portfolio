import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eman Mehmood | Frontend Developer",
  description:
    "Frontend developer building modern, responsive web experiences with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}