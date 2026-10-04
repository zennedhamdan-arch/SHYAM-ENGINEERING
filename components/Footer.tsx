import Link from 'next/link';
import { equipment } from '@/lib/data/equipment';
import { footerLinks } from '@/lib/nav';
import { site } from '@/lib/site';
import PlaceholderChip from './PlaceholderChip';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold tracking-[0.22em] text-white">
              {site.company.brandTop}
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-gold-400">
              {site.company.brandBottom}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Reliable heavy equipment and quality construction materials for
              infrastructure, real estate and development projects across Rwanda.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-200">
              <PinIcon className="h-4 w-4 text-gold-400" />
              {site.company.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Equipment">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Equipment
            </h2>
            <ul className="mt-5 space-y-3">
              {equipment.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/equipment/${item.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-gold-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  className="text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {site.contact.phone.value}{' '}
                  <PlaceholderChip tone="dark" />
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="break-all">
                  {site.contact.email.value}{' '}
                  <PlaceholderChip tone="dark" />
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {site.contact.hours.value}{' '}
                  <PlaceholderChip tone="dark" />
                </span>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Contact details are placeholders and will be updated once provided by
              the company.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {site.company.name}. All rights reserved.
          </p>
          <p>{site.demoDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
