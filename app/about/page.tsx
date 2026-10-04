import type { Metadata } from 'next';
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import PageHeader from '@/components/PageHeader';
import StatsPanel from '@/components/StatsPanel';
import { LeafIcon, MapIcon, ShieldCheckIcon, UsersIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Shyam Engineering Equipment Ltd is a Rwandan company committed to providing reliable construction equipment and materials for infrastructure, real estate and civil engineering projects.',
};

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Reliable Equipment',
    text: 'Modern, well-maintained machines you can depend on, site after site.',
  },
  {
    icon: UsersIcon,
    title: 'Experienced Team',
    text: 'Skilled operators and professionals who take pride in doing the job properly.',
  },
  {
    icon: MapIcon,
    title: 'Nationwide Service',
    text: 'Supporting projects in Kigali and across the provinces of Rwanda.',
  },
  {
    icon: LeafIcon,
    title: 'Sustainable Development',
    text: 'Contributing to infrastructure that builds a better future for Rwanda.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
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

      <section className="bg-white py-16 md:py-20">
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
              <h2 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">
                Local Expertise, Professional Service
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Based in Kigali, we understand the realities of building in Rwanda —
                from hillside terrain to tight urban sites. Our aim is simple: be the
                equipment and materials partner that project teams can rely on, with
                straightforward communication and well-prepared machines.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Whether you are planning a road upgrade, a residential development or
                civil engineering works, we are ready to discuss how our fleet and
                materials can support you.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact">Contact Us</ButtonLink>
                <ButtonLink href="/equipment" variant="outline-dark">
                  Explore Our Fleet
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-center text-2xl font-extrabold text-navy-950 sm:text-3xl">
              What We Stand For
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-lg border border-slate-200 bg-mist p-6 shadow-card"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-gold-500 text-navy-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-navy-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-center text-2xl font-extrabold text-navy-950 sm:text-3xl">
              Company Facts
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
              Verified company figures will be published here once provided. No
              invented statistics are shown in this demo.
            </p>
            <div className="mt-8">
              <StatsPanel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
