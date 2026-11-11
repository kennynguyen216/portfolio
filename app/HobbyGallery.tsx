const snapshots = [
  { src: "/media/kenny-hackathon-2nd-place.jpg", alt: "Kennedy and teammates holding Second Place Advanced certificates at the WICS Spring Hackathon", caption: "WICS Spring Hackathon, 2nd place." },
  { src: "/media/kenny-jiujitsu.jpg", alt: "Kennedy with training partners after a jiu jitsu session", caption: "Jiu jitsu." },
  { src: "/media/kenny-chess.jpg", alt: "Kennedy playing chess in a tournament room", caption: "Chess. Peak rating 1894.", position: "8% 50%" },
  { src: "/media/kenny-hackathon-best-presentation.jpg", alt: "Kennedy and teammates holding Best in Presentation certificates", caption: "WICS Spring Hackathon, Best Presentation." },
  { src: "/media/kenny-jiujitsu-match.mp4", alt: "Kennedy competing in a no-gi jiu jitsu tournament", caption: "No-gi tournament, quarterfinals.", video: true },
  { src: "/media/kenny-lifting.mp4", alt: "Kennedy performing a 140 pound weighted dip at 139 pounds bodyweight", caption: "140 lb weighted dip.", video: true },
  { src: "/media/kenny-hotdog-candid.jpg", alt: "Kennedy and a friend sharing a snack at a bakery", caption: "Snack break." },
];

export function HobbyGallery() {
  return (
    <div className="tiles tiles-hobby">{snapshots.map((item) => (
      <figure className="tile" key={item.src}>
        {item.video ? <video src={item.src} poster={item.src.replace(/\.mp4$/, ".jpg")} aria-label={item.alt} width="640" height="800" controls muted playsInline preload="none" /> : <img src={item.src} alt={item.alt} width="640" height="800" loading="lazy" style={{ objectPosition: item.position }} />}
        <figcaption><span>{item.caption}</span></figcaption>
      </figure>
    ))}</div>
  );
}
