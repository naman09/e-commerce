import { useState } from "react";

const images = [
  // "app/assets/images/alaa-turkman-mfO0SRKNzME-unsplash.jpg",
  // "app/assets/images/damir-samatkulov-Z3jVGKVpuxI-unsplash.jpg",
  "app/assets/images/dan-smedley-2wVRh5MpQ0Y-unsplash.jpg",
  "app/assets/images/danilo-alvesd-YPuCba3I9GQ-unsplash.jpg",
  "app/assets/images/erik-mclean-IxfhMTROke8-unsplash.jpg",
  // "app/assets/images/jacek-dylag-Vve7XkiUq_Y-unsplash.jpg",
  "app/assets/images/murat-ts-pNs4T0QV1pY-unsplash.jpg",
  "app/assets/images/pan-xiaozhen-IYE0ImQlY90-unsplash.jpg",
  "app/assets/images/ryk-porras-sg7y0ux4fdU-unsplash.jpg",
  "app/assets/images/samuel-sianipar-scUBcasSvbE-unsplash.jpg",
  "app/assets/images/sebastian-morelli-peyton-DVqdk8MTp2I-unsplash.jpg",
  "app/assets/images/timur-shakerzianov-c314Gh8dXAo-unsplash.jpg",
  "app/assets/images/wesley-caribe-TtN_obfWlGw-unsplash.jpg",
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative mx-80 overflow-hidden rounded-2xl my-2">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} className="w-full h-100 flex-shrink-0 object-contain" />
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
