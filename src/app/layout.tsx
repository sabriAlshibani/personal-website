import "./globals.css";
import { Metadata } from "next";
import { sabriMeta } from "@/data/meta";
import { Montserrat } from "next/font/google";

// Import Montserrat and bind to a CSS variable
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: sabriMeta.title,
  description: sabriMeta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat antialiased min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
