import Image from 'next/image';
import Link from 'next/link';
import type { Equipment } from '@/lib/data/equipment';
import { ArrowRightIcon } from './icons';

export default function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <Link
      href={`/equipment/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card transition-shadow duration-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-extrabold text-navy-950">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {item.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold-600 transition-colors group-hover:text-gold-700">
          Learn More
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
