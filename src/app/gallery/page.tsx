import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "ГАЛЕРЕЯ | 10/12DJ'S",
};

export default function Gallery() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -right-10 rotate-[12deg]">VISUALS</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">ГАЛЕРЕЯ</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ФОТО С ВЫСТУПЛЕНИЙ</p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
