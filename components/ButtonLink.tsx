import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'gold' | 'outline-light' | 'outline-dark' | 'white';
type Size = 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  gold: 'bg-gold-500 text-navy-950 hover:bg-gold-400 border border-transparent',
  'outline-light':
    'border border-white/40 text-white hover:bg-white/10 hover:border-white/70',
  'outline-dark':
    'border border-slate-300 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white',
  white: 'bg-white text-navy-950 hover:bg-slate-100 border border-transparent',
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export default function ButtonLink({
  href,
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-bold uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
