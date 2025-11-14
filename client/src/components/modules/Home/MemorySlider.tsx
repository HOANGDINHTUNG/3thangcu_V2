import { useEffect, useState } from "react";
import type { IMemory } from "../../../interface/Memory";

interface Props {
  images: IMemory[];
}

const MemorySlider = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  // Auto change every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[260px] md:h-80 rounded-3xl overflow-hidden shadow-2xl mb-6">
      {images.map((img, i) => (
        <div
          key={img.id}
          className={`
            absolute inset-0 transition-opacity duration-700
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover"
          />

          {img.title && (
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 to-transparent text-white text-xs md:text-sm px-4 py-3">
              <div className="font-semibold mb-0.5">{img.title}</div>
              {img.description && (
                <div className="opacity-90">{img.description}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MemorySlider;
