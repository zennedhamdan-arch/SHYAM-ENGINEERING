import type { Metadata } from 'next';
import ButtonLink from '@/components/ButtonLink';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <section className="bg-navy-950 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
          404 — Page not found
        </p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          The page you are looking for doesn&rsquo;t exist.
        </h1>
        <p className="mt-4 text-slate-300">
          Let&rsquo;s get you back to the equipment and materials you need.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/equipment" variant="outline-light">
            View Equipment
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
