import { stats } from '@/lib/data/stats';
import PlaceholderChip from './PlaceholderChip';

/**
 * Statistics area. Values are intentional placeholders ("—") driven by
 * lib/data/stats.ts so verified company figures can be dropped in later.
 */
export default function StatsPanel() {
  return (
    <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-slate-200 bg-mist p-4 text-center"
        >
          <dd className="text-3xl font-extrabold text-navy-950">{stat.value}</dd>
          <dt className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-600">
            {stat.label}
          </dt>
          <p className="mt-2">
            <PlaceholderChip label={stat.hint} />
          </p>
        </div>
      ))}
    </dl>
  );
}
