import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

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
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
