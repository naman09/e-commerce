import { useState } from "react";

const images = [
  "https://picsum.photos/800/400?1",
  "https://picsum.photos/800/400?2",
  "https://picsum.photos/800/400?3",
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl my-2">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} className="w-full flex-shrink-0" />
        ))}
      </div>

      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ›
      </button>
    </div>
  );
}
