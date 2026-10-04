/**
 * Small visual marker that flags stand-in content (contact details, stats,
 * project entries) which must be replaced with verified company information.
 */
export default function PlaceholderChip({
  label = 'placeholder',
  tone = 'light',
}: {
  label?: string;
  tone?: 'light' | 'dark';
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-dashed px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
        tone === 'dark'
          ? 'border-slate-500 text-slate-400'
          : 'border-slate-400 text-slate-500'
      }`}
    >
      {label}
    </span>
  );
}
