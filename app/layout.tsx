import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  variable: '--font-courier-prime',
  weight: '400',
});

export const metadata: Metadata = {
  title: "João Evangelista - Portfolio",
  description: "Desenvolvedor de software",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} font-courier_prime antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
