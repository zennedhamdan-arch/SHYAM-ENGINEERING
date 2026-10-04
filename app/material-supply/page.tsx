import type { Metadata } from 'next';
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import PageHeader from '@/components/PageHeader';
import { CheckIcon } from '@/components/icons';
import { materials } from '@/lib/data/materials';

export const metadata: Metadata = {
  title: 'Material Supply',
  description:
    'High-quality aggregates, sand and base materials for construction and infrastructure projects across Rwanda — Shyam Engineering Equipment Ltd.',
};

export default function MaterialSupplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Material Supply"
        title={
          <>
            Quality Materials
            <br />
            for Lasting Results
          </>
        }
        description="We supply high-quality aggregates, sand and base materials to support construction and infrastructure projects."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {materials.map((item, index) => (
            <div
              key={item.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">
                  {item.name}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.uses.map((use) => (
                    <li key={use} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="rounded-lg bg-navy-950 p-8 text-center md:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Need Materials for Your Project?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Send us your requirements and we will prepare a supply enquiry for
              aggregates, sand or base material.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink href="/quote" size="lg">
                Request a Supply Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
