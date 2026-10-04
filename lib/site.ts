/**
 * Central site configuration.
 *
 * CLIENT-DEMO RULES:
 * Any fact that has not been verified by Shyam Engineering Equipment Ltd
 * (phone numbers, email addresses, business hours, statistics, projects,
 * testimonials, prices) MUST stay a clearly-marked placeholder here.
 * Replace the placeholder values with verified company information before
 * the site goes live — no other code changes should be required.
 */

export type ContactItem = {
  label: string;
  value: string;
  /** true while the value is a stand-in awaiting verified company info */
  placeholder: boolean;
  /** href for tel:/mailto: links once the real value exists ('' = no link) */
  href?: string;
};

export const site = {
  company: {
    name: 'Shyam Engineering Equipment Ltd',
    brandTop: 'SHYAM',
    brandBottom: 'Engineering Equipment Ltd',
    location: 'Kigali, Rwanda',
    tagline: 'Infrastructure for a better future',
    eyebrow: 'Building a Stronger Rwanda',
  },

  contact: {
    phone: {
      label: 'Phone',
      value: '+250 000 000 000',
      placeholder: true,
      href: '',
    },
    email: {
      label: 'Email',
      value: 'info@shyam-engineering.example',
      placeholder: true,
      href: '',
    },
    hours: {
      label: 'Business hours',
      value: 'Mon – Sat · 08:00 – 17:00',
      placeholder: true,
    },
    address: {
      label: 'Location',
      value: 'Kigali, Rwanda',
      placeholder: false,
    },
  } satisfies Record<string, ContactItem>,

  /**
   * International format digits only, e.g. '250788123456'.
   * Leave empty until the company provides its real WhatsApp number —
   * while empty, WhatsApp CTAs gracefully point to the contact page.
   */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',

  demoDisclaimer:
    'Demo website — company details shown as placeholders until confirmed by Shyam Engineering Equipment Ltd.',
} as const;

export function whatsAppHref(message: string): string | null {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
