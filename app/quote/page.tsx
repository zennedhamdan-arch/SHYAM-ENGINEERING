import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import QuoteForm from '@/components/QuoteForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Request an equipment or material supply quote from Shyam Engineering Equipment Ltd — Kigali, Rwanda. An enquiry, not a confirmed booking.',
};

const steps = [
  {
    title: 'Send your enquiry',
    text: 'Tell us the equipment or materials you need, your project location and timeframe.',
  },
  {
    title: 'We confirm the details',
    text: 'Once the company contact channels are connected, your enquiry reaches our team directly for confirmation.',
  },
  {
    title: 'You receive a tailored proposal',
    text: 'Every job is quoted individually — no published price lists, no surprises.',
  },
];

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ equipment?: string }>;
}) {
  const { equipment } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Get a Quote"
        title="Request a Quote"
        description="Tell us what your project needs — equipment, materials or both. This is an enquiry, not a confirmed booking."
      />

      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-xl font-extrabold text-navy-950">What Happens Next</h2>
            <ol className="mt-6 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500 text-base font-extrabold text-navy-950">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-bold text-navy-950">{step.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      {step.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-4 text-xs leading-relaxed text-slate-500">
              {site.demoDisclaimer} Phone, email and WhatsApp will be connected before
              launch so every enquiry reaches the company.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-extrabold text-navy-950">Enquiry Details</h2>
            <div className="mt-6">
              <QuoteForm initialInterest={equipment ?? ''} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
