import type { Project } from "./projects.mjs";

export function ProjectArtwork({ project, hero = false }: { project: Project; hero?: boolean }) {
  return (
    <picture className="project-artwork">
      {project.image.still && <source media="(prefers-reduced-motion: reduce)" srcSet={project.image.still} />}
      <img
        src={project.image.src}
        alt={hero ? project.image.alt : ""}
        width={1280}
        height={720}
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : undefined}
        style={{ viewTransitionName: `project-${project.slug}` }}
      />
    </picture>
  );
}
