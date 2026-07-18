import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ThemeProvider from "../../components/ThemeProvider";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "EYour Shop | best Online Store",
  description:
    "Discover premium products with fast shipping, secure payments, and the best online shopping experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}