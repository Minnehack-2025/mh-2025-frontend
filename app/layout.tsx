import type { Metadata } from "next";
import { inter } from "@/fonts/fonts";
import "./globals.css";
import TopBar from "@/components/topbar";

export const metadata: Metadata = {
  title: "Co. Hub - Event made easy",
  description: "A Better Alternative to Gopher Link - University of Minnesota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <TopBar/>
        {children}
      </body>
    </html>
  );
}
