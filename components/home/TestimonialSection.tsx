import PlaceholderChip from '@/components/PlaceholderChip';
import { QuoteIcon } from '@/components/icons';

/**
 * Testimonial area. Deliberately shows a reservation note instead of a
 * fabricated quote — swap in a real, approved testimonial here later.
 */
export default function TestimonialSection() {
  return (
    <section className="bg-mist py-20 md:py-24" aria-label="Client testimonials">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <QuoteIcon className="mx-auto h-10 w-10 text-gold-500" />
        <blockquote className="mt-6">
          <p className="text-xl font-semibold leading-relaxed text-navy-900 sm:text-2xl">
            &ldquo;Client testimonial will appear here after approval.&rdquo;
          </p>
        </blockquote>
        <p className="mt-5">
          <PlaceholderChip label="awaiting client approval" />
        </p>
        <p className="mt-4 text-sm text-slate-500">
          This space is reserved for a verified client testimonial of Shyam
          Engineering Equipment Ltd.
        </p>
      </div>
    </section>
  );
}
