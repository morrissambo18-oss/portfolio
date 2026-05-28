import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Morris Sambo | Junior Software Developer",
    template: "%s | Morris Sambo",
  },
  description:
    "Junior software developer specialising in Java, React, and Python. Building clean, scalable digital systems.",
  keywords: ["software developer", "Java", "React", "Python", "portfolio", "web developer"],
  authors: [{ name: "Morris Sambo" }],
  openGraph: {
    title: "Morris Sambo | Junior Software Developer",
    description:
      "Junior software developer specialising in Java, React, and Python.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-space text-text-primary antialiased">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
