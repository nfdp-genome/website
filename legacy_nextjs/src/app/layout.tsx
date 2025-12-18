import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genomic Facility - Comprehensive Genomic Services",
  description: "Advancing animal breeding and pathogen research through cutting-edge genomic technologies and expert scientific consultation",
  keywords: ["Genomics", "Animal Breeding", "Pathogen Research", "DNA Sequencing", "Bioinformatics", "Genetic Analysis"],
  authors: [{ name: "Genomic Facility Team" }],
  openGraph: {
    title: "Genomic Facility - Comprehensive Genomic Services",
    description: "Advancing animal breeding and pathogen research through cutting-edge genomic technologies",
    url: "https://www.yourgenomicsfacility.com",
    siteName: "Genomic Facility",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genomic Facility - Comprehensive Genomic Services",
    description: "Advancing animal breeding and pathogen research through cutting-edge genomic technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
