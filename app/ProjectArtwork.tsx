import type { Project } from "./projects.mjs";

export function ProjectArtwork({ project, hero = false }: { project: Project; hero?: boolean }) {
  const { image, slug } = project;
  const style = { viewTransitionName: `project-${slug}` };

  if ("timer" in image) {
    return <div className="project-artwork timer-artwork" style={style} aria-hidden="true">{image.timer}</div>;
  }

  return (
    <picture className="project-artwork">
      {image.still && <source media="(prefers-reduced-motion: reduce)" srcSet={image.still} />}
      <img
        src={image.src}
        alt={hero ? image.alt : ""}
        width={1280}
        height={720}
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : undefined}
        style={style}
      />
    </picture>
  );
}
