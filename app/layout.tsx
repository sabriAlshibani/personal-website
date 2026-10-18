import type { Metadata } from "next";
import { Poppins } from 'next/font/google'

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Sabri Al-Shibani | Full-Stack Developer",
  description: "I build modern web and mobile applications with clean code, scalable architecture, and great user experiences.",
};

const poppins = Poppins({
  weight: ['100','200','300','400','600','500','700','800','900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
