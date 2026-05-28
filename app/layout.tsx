import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: {
    default: "Morris Sambo | Junior Software Developer",
    template: "%s | Morris Sambo",
  },
  description:
    "Morris Sambo — IT graduate from Vaal University of Technology, CCNA certified, and experienced IT Specialist based in Johannesburg. Seeking junior developer roles.",
  keywords: ["software developer", "Java", "SQL", "web developer", "CCNA", "IT specialist", "portfolio", "Johannesburg"],
  authors: [{ name: "Morris Sambo" }],
  openGraph: {
    title: "Morris Sambo | Junior Software Developer",
    description:
      "IT graduate from VUT, CCNA certified, and experienced IT Specialist seeking junior developer roles.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-space text-text-primary antialiased">
        <Providers>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
