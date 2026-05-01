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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                  k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108996837','ym');

              ym(108996837, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                accurateTrackBounce:true,
                trackLinks:true
              });
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${prata.variable}`}>
        {children}
      </body>
    </html>
  );
}