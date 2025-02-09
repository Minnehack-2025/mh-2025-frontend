import type { Metadata } from "next";
import { inter } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Co. Hub - Event made easy",
  description: "A Better Alternative to Gopher Link - University of Minnesota",
=======
  title: "Connection Hub",
  description: "Find new events and friends!",
>>>>>>> main
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
        {children}
      </body>
    </html>
  );
}
