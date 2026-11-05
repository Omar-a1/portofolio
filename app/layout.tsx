import type { Metadata } from "next";
import { Cairo, Tajawal, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "عمر عبد الله | مطور واجهات وتطبيقات Full Stack",
  description: "معرض أعمال ومشاريع عمر عبد الله - مبرمج ومصمم مواقع وتطبيقات ويب متكاملة",
  icons: {
    icon: [
      { url: "/images/hero-avatar.png" },
      { url: "/icon.png" }
    ],
    apple: [
      { url: "/images/hero-avatar.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${cairo.variable} ${tajawal.variable} ${inter.variable} antialiased selection:bg-[#59018c] selection:text-white bg-[#242424] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
