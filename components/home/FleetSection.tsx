import ButtonLink from '@/components/ButtonLink';
import EquipmentCard from '@/components/EquipmentCard';
import SectionHeading from '@/components/SectionHeading';
import { equipment } from '@/lib/data/equipment';

export default function FleetSection() {
  return (
    <section className="bg-mist py-20 md:py-24" aria-labelledby="fleet-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
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
          <ButtonLink href="/equipment" variant="outline-dark">
            View All Equipment
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item) => (
            <EquipmentCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
