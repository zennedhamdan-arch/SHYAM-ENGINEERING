import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ButtonLink from '@/components/ButtonLink';
import PlaceholderChip from '@/components/PlaceholderChip';
import { ArrowRightIcon, CheckIcon } from '@/components/icons';
import { equipment, equipmentSpecNote, getEquipment } from '@/lib/data/equipment';
import { site, whatsAppHref } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return equipment.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) return { title: 'Equipment not found' };
  return {
    title: `${item.name} — Equipment`,
    description: item.shortDescription,
    openGraph: {
      title: `${item.name} | ${site.company.name}`,
      description: item.shortDescription,
      images: [{ url: item.image, alt: item.imageAlt }],
    },
  };
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) notFound();

  const waHref = whatsAppHref(
    `Hello ${site.company.name}, I would like to enquire about ${item.name}.`,
  );

  return (
    <>
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-400">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/equipment" className="transition-colors hover:text-gold-400">
                  Equipment
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold-400">
                {item.name}
              </li>
            </ol>
          </nav>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {item.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {item.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 rounded-lg border border-slate-200 bg-mist p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-navy-950">
                Typical Applications
              </h2>
              <ul className="mt-4 space-y-3">
                {item.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-navy-950">Overview</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>

            <h2 className="mt-10 text-xl font-extrabold text-navy-950">
              Typical Specifications
            </h2>
            <dl className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {item.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[40%,60%] gap-4 py-3.5">
                  <dt className="text-sm font-semibold text-navy-900">{spec.label}</dt>
                  <dd className="text-sm text-slate-600">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <PlaceholderChip label="illustrative" />
              {equipmentSpecNote} No rental prices are published — every enquiry is
              quoted individually.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href={`/quote?equipment=${encodeURIComponent(item.name)}`}>
                Request a Quote
              </ButtonLink>
              {waHref ? (
                <ButtonLink href={waHref} variant="outline-dark" external>
                  WhatsApp Enquiry
                </ButtonLink>
              ) : null}
              <ButtonLink href="/equipment" variant="outline-dark">
                <ArrowRightIcon className="h-4 w-4 rotate-180" />
                All Equipment
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
