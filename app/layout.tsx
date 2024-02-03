import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: "Rent motrobike - Sanur Bali",
  description: "Renting motorbikes for your holidays journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
