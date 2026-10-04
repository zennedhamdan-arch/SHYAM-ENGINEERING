import { site, whatsAppHref } from '@/lib/site';
import { WhatsAppIcon } from './icons';

const defaultMessage = `Hello ${site.company.name}, I would like to enquire about your equipment and materials.`;

/**
 * Floating WhatsApp CTA. Uses the configurable number from lib/site.ts.
 * While no number is configured, it points to the contact page instead so
 * the demo never shows a broken or invented number.
 */
export default function WhatsAppButton() {
  const href = whatsAppHref(defaultMessage) ?? '/contact';
  const configured = Boolean(site.whatsappNumber);

  return (
    <a
      href={href}
      {...(configured ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      title={
        configured
          ? 'Chat with us on WhatsApp'
          : 'WhatsApp number will be connected — see contact page'
      }
      aria-label={
        configured
          ? 'Chat with us on WhatsApp'
          : 'WhatsApp number pending — go to contact page'
      }
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
