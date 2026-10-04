import type { Metadata } from 'next';
import ButtonLink from '@/components/ButtonLink';
import PageHeader from '@/components/PageHeader';
import PlaceholderChip from '@/components/PlaceholderChip';
import ProjectCard from '@/components/ProjectCard';
import { projects, projectsDemoNote } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'From roads to buildings, Shyam Engineering Equipment Ltd delivers solutions that support Rwanda’s development.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects That Build Progress"
        description="From roads to buildings, we deliver solutions that support Rwanda’s development."
      >
        <p className="mt-5">
          <PlaceholderChip tone="dark" label={projectsDemoNote} />
        </p>
      </PageHeader>

      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((item) => (
              <ProjectCard key={item.slug} item={item} />
            ))}
          </div>

          <div className="mt-14 rounded-lg bg-navy-950 p-8 text-center md:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Tell us about your road, building or civil works project and we will
              discuss how our equipment and materials can support it.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Contact Us
              </ButtonLink>
              <ButtonLink href="/quote" variant="outline-light" size="lg">
                Request a Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
