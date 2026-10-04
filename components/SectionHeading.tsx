import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] ${
            tone === 'dark' ? 'text-gold-400' : 'text-gold-600'
          } ${centered ? 'justify-center' : ''}`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-8 ${tone === 'dark' ? 'bg-gold-400' : 'bg-gold-600'}`}
          />
          {eyebrow}
          {centered ? (
            <span
              aria-hidden="true"
              className={`h-px w-8 ${tone === 'dark' ? 'bg-gold-400' : 'bg-gold-600'}`}
            />
          ) : null}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          tone === 'dark' ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
