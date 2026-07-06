import Image from "next/image";

const images = [
  { file: "DSCN2724.JPG" },
  { file: "DSCN2725.JPG" },
  { file: "DSCN2726.JPG" },
  { file: "DSCN2727.JPG" },
  { file: "DSCN2728.JPG" },
  { file: "DSCN2739.JPG" },
  { file: "DSCN2740.JPG" },
  { file: "DSCN2741.JPG" },
  { file: "DSCN2742.JPG" },
  { file: "DSCN2743.JPG" },
  { file: "DSCN2744.JPG" },
  { file: "DSCN2745.JPG" },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <div key={img.file} className="group relative overflow-hidden border border-border/20 bg-card">
          <Image
            src={`/gallery/${img.file}`}
            alt="10/12DJ'S"
            width={600}
            height={450}
            className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
          />
        </div>
      ))}
    </div>
  );
}
