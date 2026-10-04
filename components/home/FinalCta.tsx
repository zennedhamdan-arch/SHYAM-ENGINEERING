import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy-950/85" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Let&rsquo;s Build Something Great Together
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Get in touch with us today for equipment rental, material supply or
          project support.
        </p>
        <div className="mt-9 flex justify-center">
          <ButtonLink href="/contact" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
