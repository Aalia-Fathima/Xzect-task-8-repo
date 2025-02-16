import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Roofing Service & Consulting | Reliable, Durable, and Affordable Roofing Solutions",
  description: "Top-quality roofing solutions, expert consultations, and reliable service for homes and businesses. Built to last, made to impress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
