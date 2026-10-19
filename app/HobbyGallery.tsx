const snapshots = [
  { src: "/media/kenny-hackathon-2nd-place.jpg", alt: "Kennedy and teammates holding Second Place Advanced certificates at the WICS Spring Hackathon", caption: "A good day to build with friends." },
  { src: "/media/kenny-jiujitsu.jpg", alt: "Kennedy with training partners after a jiu jitsu session", caption: "A different kind of problem solving." },
  { src: "/media/kenny-chess.jpg", alt: "Kennedy playing chess in a tournament room", caption: "Chess. Peak Chess.com rating: 1894.", position: "8% 50%" },
  { src: "/media/kenny-hackathon-best-presentation.jpg", alt: "Kennedy and teammates holding Best in Presentation certificates", caption: "Making the demo count." },
  { src: "/media/kenny-jiujitsu-match.mp4", alt: "Kennedy competing in a no-gi jiu jitsu tournament", caption: "Quarterfinals, no-gi tournament.", video: true },
  { src: "/media/kenny-lifting.mp4", alt: "Kennedy performing a 140 pound weighted dip at 139 pounds bodyweight", caption: "140 lb weighted dip.", video: true },
  { src: "/media/kenny-hotdog-candid.jpg", alt: "Kennedy and a friend sharing a snack at a bakery", caption: "Fuel for whatever comes next." },
];

export function HobbyGallery() {
  return (
    <div className="hobby-gallery">{snapshots.map((item) => (
      <figure key={item.src}>
        {item.video ? <video src={item.src} poster={item.src.replace(/\.mp4$/, ".jpg")} aria-label={item.alt} width="640" height="800" controls muted playsInline preload="none" /> : <img src={item.src} alt={item.alt} width="640" height="800" loading="lazy" style={{ objectPosition: item.position }} />}
        <figcaption>{item.caption}</figcaption>
      </figure>
    ))}</div>
  );
}
