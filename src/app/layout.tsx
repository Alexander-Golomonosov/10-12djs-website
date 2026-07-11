import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="top-mail-ru" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3778811", type: "pageView", start: (new Date()).getTime()});
_tmr.push({type: "reachGoal", id: "visit"});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");

(function(d, w, c) {
  (w[c] = w[c] || []).push(function() {
    try {
      w.VK = w.VK || {};
      w.VK.Pixel = new VK.Pixel("3778811");
      w.VK.Pixel.Event("ViewContent");
    } catch(e) {}
  });
  var s = d.createElement("script");
  s.src = "https://vk.com/js/pixel.js";
  d.head.appendChild(s);
})(document, window, "vkAsyncInit");
          `
        }} />
        <noscript>
          <div>
            <img src="https://top-fwz1.mail.ru/counter?id=3778811;js=na" style={{ position: "absolute", left: "-9999px" }} alt="Top.Mail.Ru" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
