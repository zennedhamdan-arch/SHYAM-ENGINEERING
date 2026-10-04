import AboutSection from '@/components/home/AboutSection';
import FinalCta from '@/components/home/FinalCta';
import FleetSection from '@/components/home/FleetSection';
import Hero from '@/components/home/Hero';
import MaterialsSection from '@/components/home/MaterialsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import TestimonialSection from '@/components/home/TestimonialSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FleetSection />
      <MaterialsSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialSection />
      <FinalCta />
    </>
  );
}
