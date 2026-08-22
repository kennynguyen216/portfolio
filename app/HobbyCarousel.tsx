"use client";

import { useState } from "react";

type Candid = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
};

const candids: Candid[] = [
  {
    type: "image" as const,
    src: "/media/kenny-hackathon-2nd-place.jpg",
    alt: "Kennedy and teammates on stage holding certificates for Second Place Advanced at the WICS Spring Hackathon",
    caption: "2nd place, WICS Spring Hackathon",
  },
  {
    type: "image" as const,
    src: "/media/kenny-hackathon-best-presentation.jpg",
    alt: "Kennedy and teammates on stage holding Best in Presentation certificates at the WICS Spring Hackathon",
    caption: "Best Presentation, same hackathon",
  },
  {
    type: "image" as const,
    src: "/media/kenny-jiujitsu.jpg",
    alt: "Kennedy with training partners after a jiu jitsu session",
    caption: "Jiu jitsu with the crew",
  },
  {
    type: "video" as const,
    src: "/media/kenny-jiujitsu-match.mp4",
    alt: "Kennedy competing in a no-gi jiu jitsu tournament match",
    caption: "Quarterfinals, no-gi tournament",
  },
  {
    type: "image" as const,
    src: "/media/kenny-chess.jpg",
    alt: "Kennedy playing chess in a tournament room",
    caption: "Chess, peak rating 1894 on Chess.com",
    // Kennedy sits at the far left of this photo, so a centered crop cuts
    // him out of frame. Bias the crop left so he stays fully visible.
    objectPosition: "8% 50%",
  },
  {
    type: "video" as const,
    src: "/media/kenny-lifting.mp4",
    alt: "Kennedy performing a 140 lb weighted dip at bodyweight 139 lb",
    caption: "140 lb weighted dip",
  },
  {
    type: "image" as const,
    src: "/media/kenny-hotdog-candid.jpg",
    alt: "Kennedy and a friend sharing a snack at a bakery",
    caption: "Snack run between classes",
  },
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function Slide({
  item,
  position,
}: {
  item: (typeof candids)[number];
  position: "prev" | "current" | "next";
}) {
  return (
    <figure className={`hobby-slide hobby-slide-${position}`}>
      {item.type === "video" ? (
        <video
          key={item.src}
          src={item.src}
          aria-label={item.alt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
        />
      )}
      {position === "current" && <figcaption>{item.caption}</figcaption>}
    </figure>
  );
}

export function HobbyCarousel() {
  const [index, setIndex] = useState(0);
  const count = candids.length;
  const prevIndex = mod(index - 1, count);
  const nextIndex = mod(index + 1, count);

  return (
    <div className="hobby-carousel" aria-label="A few personal photos and clips">
      <button
        type="button"
        className="hobby-arrow hobby-arrow-prev"
        onClick={() => setIndex((i) => mod(i - 1, count))}
        aria-label="Previous photo"
      >
        <span aria-hidden="true">←</span>
      </button>

      <div className="hobby-stage">
        <button
          type="button"
          className="hobby-slide-btn hobby-slide-btn-prev"
          onClick={() => setIndex(prevIndex)}
          aria-label="Previous photo"
        >
          <Slide item={candids[prevIndex]} position="prev" />
        </button>

        <Slide item={candids[index]} position="current" />

        <button
          type="button"
          className="hobby-slide-btn hobby-slide-btn-next"
          onClick={() => setIndex(nextIndex)}
          aria-label="Next photo"
        >
          <Slide item={candids[nextIndex]} position="next" />
        </button>
      </div>

      <button
        type="button"
        className="hobby-arrow hobby-arrow-next"
        onClick={() => setIndex((i) => mod(i + 1, count))}
        aria-label="Next photo"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
