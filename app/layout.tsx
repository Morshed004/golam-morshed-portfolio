// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golam Morshed | Full Stack Developer",
  description: "Professional portfolio of Golam Morshed, a Full Stack Developer specializing in scalable web applications and modern JavaScript ecosystems.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, Portfolio",
  openGraph: {
    title: "Golam Morshed | Full Stack Developer",
    description: "Building scalable web applications with modern JavaScript technologies.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Golam Morshed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golam Morshed | Full Stack Developer",
    description: "Building scalable web applications with modern JavaScript technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}