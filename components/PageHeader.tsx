import type { ReactNode } from 'react';
import SectionHeading from './SectionHeading';

/** Dark band used as the title area of sub-pages, matching the header colour. */
export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} tone="dark" />
        {children}
      </div>
    </section>
  );
}
