import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arch Studio | Architecture & Design",
    template: "%s | Arch Studio",
  },
  description:
    "Arch Studio designs thoughtful, enduring architecture—from landmark buildings to inspiring public spaces.",
  applicationName: "Arch Studio",
  keywords: [
    "architecture",
    "architectural design",
    "building design",
    "interior architecture",
    "Arch Studio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arch Studio",
    title: "Arch Studio | Architecture & Design",
    description:
      "Thoughtful architecture that creates spaces designed to inspire and endure.",
  },
  twitter: {
    card: "summary",
    title: "Arch Studio | Architecture & Design",
    description:
      "Thoughtful architecture that creates spaces designed to inspire and endure.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
      <Header />
      {children}
      <Footer />
    </body>
    </html>
  );
}