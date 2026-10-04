import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PlaceholderChip from '@/components/PlaceholderChip';
import QuoteForm from '@/components/QuoteForm';
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { site, whatsAppHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Shyam Engineering Equipment Ltd in Kigali, Rwanda — equipment rental, material supply and project support enquiries.',
};

export default function ContactPage() {
  const waHref = whatsAppHref(
    `Hello ${site.company.name}, I would like to make an enquiry.`,
  );

  const cards = [
    {
      icon: PhoneIcon,
      label: site.contact.phone.label,
      value: site.contact.phone.value,
      placeholder: site.contact.phone.placeholder,
      href: site.contact.phone.href || null,
    },
    {
      icon: MailIcon,
      label: site.contact.email.label,
      value: site.contact.email.value,
      placeholder: site.contact.email.placeholder,
      href: site.contact.email.href || null,
    },
    {
      icon: PinIcon,
      label: site.contact.address.label,
      value: site.contact.address.value,
      placeholder: site.contact.address.placeholder,
      href: null,
    },
    {
      icon: ClockIcon,
      label: site.contact.hours.label,
      value: site.contact.hours.value,
      placeholder: site.contact.hours.placeholder,
      href: null,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Questions about equipment, material supply or your project? Send an enquiry and we will respond once our contact channels are connected."
      />

      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-xl font-extrabold text-navy-950">Contact Details</h2>
            <ul className="mt-6 space-y-4">
              {cards.map(({ icon: Icon, label, value, placeholder, href }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-card"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy-950 text-gold-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block break-all font-semibold text-navy-950 hover:text-gold-600"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="mt-1 block break-all font-semibold text-navy-950">
                        {value}
                      </span>
                    )}
                    {placeholder ? (
                      <span className="mt-2 block">
                        <PlaceholderChip label="to be provided" />
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    WhatsApp
                  </span>
                  {waHref ? (
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-semibold text-navy-950 hover:text-gold-600"
                    >
                      Chat on WhatsApp
                    </a>
                  ) : (
                    <span className="mt-1 block text-sm text-slate-600">
                      WhatsApp number will be connected before launch.
                    </span>
                  )}
                  {!waHref ? (
                    <span className="mt-2 block">
                      <PlaceholderChip label="to be provided" />
                    </span>
                  ) : null}
                </span>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              {site.demoDisclaimer}
            </p>
          </div>

          <div id="enquiry" className="rounded-lg border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-extrabold text-navy-950">Send an Enquiry</h2>
            <p className="mt-2 text-sm text-slate-600">
              Use this form for equipment rental, material supply or project support.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
