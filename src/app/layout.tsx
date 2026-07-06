import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "10/12DJ'S | Команда диджеев",
  description: "10/12DJ'S — команда профессиональных диджеев. Сеты, мероприятия, музыка.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex min-h-full flex-col bg-background text-foreground striped-bg">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
