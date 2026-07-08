import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://1012djs.ru"),
  title: "10/12DJ'S | КОМАНДА ДИДЖЕЕВ",
  description: "10/12DJ'S — КОМАНДА ПРОФЕССИОНАЛЬНЫХ ДИДЖЕЕВ.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground concrete-grid">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
