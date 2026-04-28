import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
});

export const metadata: Metadata = {
  title: "Магия Страз - студия инкрустации стразами",
  description: "Индивидуальная инкрустация аксессуаров, подарков и предметов интерьера стразами под заказ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${prata.variable}`}>
        {children}
      </body>
    </html>
  );
}