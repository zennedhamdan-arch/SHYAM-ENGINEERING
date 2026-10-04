import Image from 'next/image';
import type { Project } from '@/lib/data/projects';
import PlaceholderChip from './PlaceholderChip';

export default function ProjectCard({ item }: { item: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-navy-800 shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-700">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.demo ? (
          <span className="absolute left-4 top-4">
            <span className="rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-400 backdrop-blur">
              Illustrative example
            </span>
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
          {item.category}
        </p>
        <h3 className="mt-2 text-lg font-extrabold text-white">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
          {item.description}
        </p>
        {item.demo ? (
          <p className="mt-4">
            <PlaceholderChip tone="dark" label="demo content" />
          </p>
        ) : null}
      </div>
    </article>
  );
}
