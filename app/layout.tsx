import type { Metadata } from "next";
import { inter } from "@/fonts/fonts";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import TopBar from "@/components/topbar";
import { NavProvider } from "@/components/NavContext";

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
      <body className={`${inter.className} antialiased`}>
        <SessionWrapper>
          <NavProvider>
            <TopBar />
            {children}
          </NavProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
