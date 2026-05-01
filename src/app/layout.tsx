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
      <head>
        <meta
          name="google-site-verification"
          content="eV34j7o0PAlR1or9H09K-_CvXqYT39LjkLAxQ6qmBTM"
        />
        <meta
          name="yandex-verification"
          content="a7dde6090d5eede5"
        />
      </head>
      <body className={`${inter.variable} ${prata.variable}`}>
        {children}
      </body>
    </html>
  );
}