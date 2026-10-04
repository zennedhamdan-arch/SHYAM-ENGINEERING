'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/nav';
import { site } from '@/lib/site';
import { CloseIcon, MenuIcon, PinIcon } from './icons';

function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
      aria-label={`${site.company.name} — home`}
    >
      <span
        aria-hidden="true"
        className="grid h-10 w-10 place-items-center rounded-sm bg-gold-500 text-xl font-extrabold text-navy-950"
      >
        S
      </span>
      <span className="leading-tight">
        <span className="block text-lg font-extrabold tracking-[0.22em] text-white">
          {site.company.brandTop}
        </span>
        <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-gold-400">
          {site.company.brandBottom}
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 ${
                  active ? 'text-gold-400' : 'text-slate-200 hover:text-gold-400'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="hidden items-center gap-1.5 text-sm font-medium text-slate-300 xl:flex">
            <PinIcon className="h-4 w-4 text-gold-400" />
            {site.company.location}
          </span>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-md bg-gold-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors duration-200 hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-navy-950 px-4 pb-6 pt-3 sm:px-6 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b border-white/5 py-3 text-base font-semibold ${
                    active ? 'text-gold-400' : 'text-slate-100 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-5 flex flex-col gap-4">
            <span className="flex items-center gap-1.5 text-sm text-slate-300">
              <PinIcon className="h-4 w-4 text-gold-400" />
              {site.company.location}
            </span>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-gold-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-gold-400"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
