import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import SectionHeading from '@/components/SectionHeading';
import StatsPanel from '@/components/StatsPanel';

export default function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-full w-full rounded-lg border-2 border-gold-500 sm:-left-4 sm:-top-4"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              <Image
                src="/images/about.jpg"
                alt="Construction professionals in hard hats reviewing site plans at a road construction site"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title={
                <>
                  Building Rwanda&rsquo;s
                  <br />
                  Infrastructure
                </>
              }
              description="Shyam Engineering Equipment Ltd is a Rwandan company committed to providing reliable construction equipment and materials. We support infrastructure, real estate and civil engineering projects with reliable solutions, professional service and local expertise."
            />
            <div className="mt-10">
              <StatsPanel />
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="outline-dark">
                Learn More About Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
