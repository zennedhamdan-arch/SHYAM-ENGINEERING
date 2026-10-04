export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  /** All current entries are illustrative until real projects are supplied. */
  demo: boolean;
};

export const projectsDemoNote =
  'Illustrative examples only — the verified project portfolio of Shyam Engineering Equipment Ltd will be added here.';

export const projects: Project[] = [
  {
    slug: 'road-construction-support',
    title: 'Road Construction Support',
    category: 'Illustrative example',
    description:
      'Representative of the support we provide on road upgrades: earthworks, haulage of base material and compaction — the core of what our fleet and materials are built for.',
    image: '/images/projects/road.jpg',
    imageAlt:
      'Gravel road under construction through terraced green hills with rollers and tipper trucks',
    demo: true,
  },
  {
    slug: 'building-real-estate-support',
    title: 'Building & Real Estate Support',
    category: 'Illustrative example',
    description:
      'Representative of equipment and material support for residential and commercial building sites — from excavation and backfill to aggregate and sand deliveries.',
    image: '/images/projects/building.jpg',
    imageAlt: 'Concrete building under construction with tower cranes against a blue sky',
    demo: true,
  },
  {
    slug: 'site-earthworks-grading',
    title: 'Site Earthworks & Grading',
    category: 'Illustrative example',
    description:
      'Representative of bulk earthworks and platform preparation: cut-and-fill, grading and compaction for development projects of every scale.',
    image: '/images/projects/earthworks.jpg',
    imageAlt: 'Bulldozer blade pushing reddish earth during site grading works',
    demo: true,
  },
];
