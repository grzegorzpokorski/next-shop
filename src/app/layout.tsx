import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Next shop",
  description: "Next stunning shop written using next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} bg-slate-100`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
