import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_SC, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ListQik | 独立房产营销平台",
  description:
    "ListQik 是独立房产营销平台，帮助你更快挂牌、更好推广并自信成交。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${dmSans.variable} ${playfairDisplay.variable} ${notoSansSc.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
