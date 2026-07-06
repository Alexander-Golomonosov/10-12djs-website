import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "КОНТАКТЫ | 10/12DJ'S",
};

export default function Contact() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -left-10 rotate-[-8deg]">CONTACT</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">КОНТАКТЫ</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">НАПИШИТЕ НАМ</p>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-bold tracking-wider">СВЯЗЬ</h3>
            <div className="mt-2 h-px w-12 bg-accent" />
            <a
              href="mailto:hello@1012djs.com"
              className="mt-4 inline-block text-xs font-semibold tracking-[0.2em] text-accent transition-colors hover:text-accent-hover"
            >
              HELLO@1012DJS.COM
            </a>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider">СОЦСЕТИ</h3>
            <div className="mt-2 h-px w-12 bg-accent" />
            <div className="mt-4 flex flex-wrap gap-6">
              {["INSTAGRAM", "SOUNDCLOUD", "MIXCLOUD", "YOUTUBE"].map((s) => (
                <a
                  key={s}
                  href={`https://${s.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-[0.2em] text-muted transition-colors hover:text-accent"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider">ВЫСТУПЛЕНИЯ</h3>
            <div className="mt-2 h-px w-12 bg-accent" />
            <p className="mt-4 text-xs font-semibold tracking-wider text-muted">
              СЛЕДИТЕ ЗА АНОНСАМИ В НОВОСТЯХ И СОЦСЕТЯХ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
