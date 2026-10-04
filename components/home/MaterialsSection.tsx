import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import MaterialCard from '@/components/MaterialCard';
import SectionHeading from '@/components/SectionHeading';
import { materials } from '@/lib/data/materials';

export default function MaterialsSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950 py-20 md:py-24"
      aria-labelledby="materials-heading"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/materials/aggregates.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy-950/90" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((item) => (
            <MaterialCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink href="/quote" size="lg">
            Request a Supply Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
