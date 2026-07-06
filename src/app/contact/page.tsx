import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты | 10/12DJ'S",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="gradient-text">Контакты</span>
      </h1>
      <p className="mt-4 text-muted">Напишите нам — мы всегда на связи</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold">Свяжитесь с нами</h3>
            <p className="mt-2 text-sm text-muted">
              По вопросам бронирования, коллабораций и сотрудничества:
            </p>
            <a
              href="mailto:hello@1012djs.com"
              className="mt-2 inline-block text-accent transition-colors hover:text-accent-hover"
            >
              hello@1012djs.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Социальные сети</h3>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                Instagram
              </a>
              <a
                href="https://soundcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                SoundCloud
              </a>
              <a
                href="https://mixcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                Mixcloud
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                YouTube
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ближайшие выступления</h3>
            <p className="mt-2 text-sm text-muted">
              Следите за анонсами в разделе новостей и наших соцсетях.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
