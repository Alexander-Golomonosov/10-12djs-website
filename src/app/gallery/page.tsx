import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "ГАЛЕРЕЯ | 10/12DJ'S",
};

export default function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">ГАЛЕРЕЯ</span>
      </h1>
      <p className="mt-4 text-xs font-semibold tracking-widest text-muted">ФОТО С ВЫСТУПЛЕНИЙ</p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
