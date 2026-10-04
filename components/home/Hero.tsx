import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import { LeafIcon, MapIcon, PinIcon, ShieldCheckIcon, UsersIcon } from '@/components/icons';
import { site } from '@/lib/site';

const credibility = [
  { icon: ShieldCheckIcon, label: 'Reliable Equipment' },
  { icon: UsersIcon, label: 'Experienced Team' },
  { icon: MapIcon, label: 'Nationwide Service' },
  { icon: LeafIcon, label: 'Sustainable Development' },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Excavator and wheel loader working on a road construction site in the Rwandan hills at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
            <span aria-hidden="true" className="h-px w-8 bg-gold-400" />
            {site.company.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Heavy Equipment
            <br />
            for a Stronger
            <br />
            <span className="text-gold-400">Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Shyam Engineering Equipment Ltd provides reliable heavy machinery and
            quality construction materials to support infrastructure, real estate
            and development projects across Rwanda.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/equipment" size="lg">
              Explore Our Fleet
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Contact Us
            </ButtonLink>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {credibility.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gold-500/15 text-gold-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-white">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 text-xs text-slate-300 sm:px-6 sm:text-sm lg:px-8">
          <span className="flex items-center gap-2 font-medium">
            <PinIcon className="h-4 w-4 text-gold-400" />
            {site.company.location}
          </span>
          <span className="text-right font-medium">{site.company.tagline}</span>
        </div>
      </div>
    </section>
  );
}
