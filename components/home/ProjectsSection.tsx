import PlaceholderChip from '@/components/PlaceholderChip';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projects, projectsDemoNote } from '@/lib/data/projects';

export default function ProjectsSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-24" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Projects"
          title="Projects That Build Progress"
          description="From roads to buildings, we deliver solutions that support Rwanda’s development."
        />
        <p className="mt-5 text-center">
          <PlaceholderChip tone="dark" label={projectsDemoNote} />
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
