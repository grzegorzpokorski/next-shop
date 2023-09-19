import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Main } from "@/components/layout/Main/Main";
import { baseUrl } from "@/lib/constants";
import { SkipLink } from "@/components/blocks/SkipLink/SkipLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Next Shop",
    template: `Next Shop | %s`,
  },
  description: "Next stunning shop written using next.js",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: "/api/og?width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Next Shop",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="bg-neutral-100 dark:bg-neutral-900 min-h-[100dvh] flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SkipLink />
          <Header />
          <Main>{children}</Main>
          <Footer />
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
