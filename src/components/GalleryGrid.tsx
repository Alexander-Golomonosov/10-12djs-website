const images = [
  { id: 1, src: "/placeholder.svg", alt: "DJ Set 1", label: "Клубная ночь" },
  { id: 2, src: "/placeholder.svg", alt: "DJ Set 2", label: "Фестиваль" },
  { id: 3, src: "/placeholder.svg", alt: "DJ Set 3", label: "Студия" },
  { id: 4, src: "/placeholder.svg", alt: "DJ Set 4", label: "Open Air" },
  { id: 5, src: "/placeholder.svg", alt: "DJ Set 5", label: "Backstage" },
  { id: 6, src: "/placeholder.svg", alt: "DJ Set 6", label: "Вечеринка" },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.id}
          className="group relative overflow-hidden rounded-xl border border-border bg-card"
        >
          <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-20">🎵</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4 pt-8">
            <span className="text-sm font-medium">{img.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
