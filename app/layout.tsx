import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AEON Assessment app",
  description: "AEON Assessment app - Collabera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "flex flex-col items-center justify-center h-full pt-14 px-6 md:px-10"
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
