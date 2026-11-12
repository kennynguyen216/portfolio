import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "../../ProjectArtwork";
import { projects } from "../../projects.mjs";
import { SiteNav } from "../../SiteNav";

type Props = { params: Promise<{ slug: string }> };

async function getProject(params: Props["params"]) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params);
  return { title: `${project.name} — Kennedy Nguyen`, description: project.line };
}

/* eslint-disable @next/next/no-html-link-for-pages */
export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params);

  return (
    <>
      <a className="skip-link" href="#project-details">Skip to project details</a>
      <SiteNav current="project" />
      <main>
        <header className="project-hero">
          <ProjectArtwork project={project} hero />
          <div className="project-heading">
            <p>{project.context}</p>
            <h1>{project.name}</h1>
            <p>{project.line}</p>
            {project.devpost ? (
              <a className="project-primary" href={project.devpost}>View on Devpost</a>
            ) : (
              <a className="project-primary" href={project.code}>View on GitHub</a>
            )}
          </div>
        </header>

        <div className="project-details" id="project-details" tabIndex={-1}>
          <section aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="project-links">
              {project.devpost && <a href={project.code}>Source code</a>}
              {project.links?.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </div>
          </section>

          <div className="project-gallery">
            {project.images.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
            {project.videos?.map((video) => (
              <figure key={video.src}>
                <video src={video.src} poster={video.poster} aria-label={video.label} controls muted playsInline preload="none" />
                <figcaption>{video.label}</figcaption>
              </figure>
            ))}
          </div>

          <a href="/#work">← Back to projects</a>
        </div>
      </main>
    </>
  );
}
