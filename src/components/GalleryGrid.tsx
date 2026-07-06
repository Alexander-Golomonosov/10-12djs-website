const images = [
  { id: 1, label: "КЛУБНАЯ НОЧЬ" },
  { id: 2, label: "ФЕСТИВАЛЬ" },
  { id: 3, label: "СТУДИЯ" },
  { id: 4, label: "OPEN AIR" },
  { id: 5, label: "BACKSTAGE" },
  { id: 6, label: "ВЕЧЕРИНКА" },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.id}
          className="group relative overflow-hidden border-2 border-border/20 bg-card"
        >
          <div className="aspect-square bg-gradient-to-br from-accent/5 to-accent/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black text-foreground/5">♪</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t-2 border-accent/30 bg-background/90 p-4">
            <span className="text-xs font-bold tracking-widest">{img.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
