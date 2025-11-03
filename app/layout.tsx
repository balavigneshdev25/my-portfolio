import type { Metadata } from "next";
import { Work_Sans } from "next/font/google"; // ✅ Import Work Sans
import "./globals.css";

// ✅ Initialize Work Sans font
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans", // Optional variable name
  weight: ["300", "400", "500", "600", "700"], // Include common weights
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Crafted with Next.js & TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
