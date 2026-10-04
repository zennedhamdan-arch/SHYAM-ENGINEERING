import type { Metadata } from 'next';
import ButtonLink from '@/components/ButtonLink';
import EquipmentCard from '@/components/EquipmentCard';
import PageHeader from '@/components/PageHeader';
import PlaceholderChip from '@/components/PlaceholderChip';
import { equipment, equipmentSpecNote } from '@/lib/data/equipment';

export const metadata: Metadata = {
  title: 'Our Equipment',
  description:
    'Excavators, wheel loaders, road rollers and tippers — modern, well-maintained construction equipment from Shyam Engineering Equipment Ltd in Kigali, Rwanda.',
};

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Fleet"
        title={
          <>
            Modern Equipment
            <br />
            for Every Project
          </>
        }
        description="We offer a wide range of modern, well-maintained construction equipment ready to serve your project needs with maximum efficiency and safety."
      />

      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {equipment.map((item) => (
              <EquipmentCard key={item.slug} item={item} />
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-slate-200 bg-white p-6 shadow-card">
            <p className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <PlaceholderChip label="illustrative specs" />
              {equipmentSpecNote}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/quote" size="lg">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-dark" size="lg">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
