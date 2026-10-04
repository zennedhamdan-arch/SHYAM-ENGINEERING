'use client';

import { useActionState } from 'react';
import { initialQuoteState, submitQuote } from '@/app/actions/quote';
import { equipment } from '@/lib/data/equipment';
import { materials } from '@/lib/data/materials';

const inputClasses =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40';

const labelClasses = 'mb-1.5 block text-sm font-semibold text-navy-900';

export default function QuoteForm({ initialInterest = '' }: { initialInterest?: string }) {
  const [state, formAction] = useActionState(submitQuote, initialQuoteState);

  return (
    <form action={formAction} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="fullName" className={labelClasses}>
          Full name <span className="text-gold-600">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="company" className={labelClasses}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company (optional)"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone <span className="text-gold-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+250 …"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-gold-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="interest" className={labelClasses}>
          Equipment / service interested in <span className="text-gold-600">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue={initialInterest}
          className={inputClasses}
        >
          <option value="">Select…</option>
          <optgroup label="Equipment">
            {equipment.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Material supply">
            {materials.map((item) => (
              <option key={item.slug} value={`${item.name} (material supply)`}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <option value="Multiple / other">Multiple / other</option>
        </select>
      </div>
      <div>
        <label htmlFor="location" className={labelClasses}>
          Project location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="e.g. Kigali, Gasabo District"
          className={inputClasses}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="period" className={labelClasses}>
          Rental period
        </label>
        <select id="period" name="period" defaultValue="" className={inputClasses}>
          <option value="">Select…</option>
          <option value="1-7-days">1 – 7 days</option>
          <option value="1-4-weeks">1 – 4 weeks</option>
          <option value="1-6-months">1 – 6 months</option>
          <option value="longer">Longer / ongoing</option>
          <option value="materials-only">Materials only (no rental)</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project and what you need…"
          className={inputClasses}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-gold-500 px-7 py-3.5 text-base font-bold uppercase tracking-wide text-navy-950 transition-colors duration-200 hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 sm:w-auto"
        >
          Request a Quote
        </button>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          This is an enquiry, not a confirmed booking. In this demo no data is
          stored or sent — before launch the form will be connected to the
          company inbox and WhatsApp.
        </p>
      </div>

      <div aria-live="polite" className="sm:col-span-2">
        {state.status === 'success' ? (
          <p className="rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
            {state.message}
          </p>
        ) : null}
        {state.status === 'error' ? (
          <p className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
