import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { Roboto } from "next/font/google";
import { exo2, orbitron } from "@/components/fonts";
import Layout from "@/components/Layout";
import CartProvider from "@/components/CartProvider";
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.className} ${orbitron.className}`}>
      <body className=" bg-gray-50">
      <CartProvider>
        <Layout />
        <main>{children}</main>
        <footer className="p-4 text-center border-t text-slate-800"></footer>
        </CartProvider>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: {
    default: "Alkhabir",
    template: "%s | Alkhabir",
  },
  description: "Alkhabir courses website Ecommerce",
};
