import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Галерея | 10/12DJ'S",
};

export default function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="gradient-text">Галерея</span>
      </h1>
      <p className="mt-4 text-muted">Фото с наших выступлений</p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
