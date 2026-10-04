import Image from 'next/image';
import type { Material } from '@/lib/data/materials';

export default function MaterialCard({ item }: { item: Material }) {
  return (
    <article className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-lg border border-white/10">
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-navy-950/10"
      />
      <div className="relative p-6">
        <h3 className="text-lg font-extrabold text-white">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-200">
          {item.shortDescription}
        </p>
      </div>
    </article>
  );
}
