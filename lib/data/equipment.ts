export type EquipmentSpec = { label: string; value: string };

export type Equipment = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: EquipmentSpec[];
  applications: string[];
};

/**
 * Equipment catalogue. Descriptions describe the equipment *class* in general
 * terms. Specifications are typical class figures for illustration only and
 * are confirmed per unit at enquiry time — no prices or availability claims.
 */
export const equipment: Equipment[] = [
  {
    slug: 'excavators',
    name: 'Excavators',
    shortDescription:
      'Hydraulic excavators for excavation, trenching, loading and site preparation.',
    description:
      'Crawler excavators are the workhorse of any construction site. Our fleet covers the digging, trenching, breaking and loading tasks that infrastructure and building projects demand — from foundation excavation and drainage trenches to bulk earthworks and truck loading. Every machine is maintained to a high standard and delivered to site ready to work.',
    image: '/images/equipment/excavator.jpg',
    imageAlt:
      'Yellow hydraulic crawler excavator digging earth on a construction site',
    specs: [
      { label: 'Machine class', value: '20 – 30 t crawler excavator' },
      { label: 'Bucket capacity', value: '0.8 – 1.5 m³ (typical)' },
      { label: 'Strengths', value: 'Digging depth, lifting power, precision control' },
      { label: 'Delivery', value: 'Low-loader transport to site (to be arranged)' },
    ],
    applications: [
      'Foundation & basement excavation',
      'Drainage and utility trenching',
      'Bulk earthworks and cut-and-fill',
      'Loading tippers and handling material',
    ],
  },
  {
    slug: 'wheel-loaders',
    name: 'Wheel Loaders',
    shortDescription:
      'Fast loading and handling of aggregates, sand and bulk materials.',
    description:
      'Wheel loaders keep material moving. They load tippers, stockpile aggregates, clear sites and handle bulk material with speed and stability. On material supply jobs they are essential for loading out deliveries quickly and safely, keeping your project on schedule.',
    image: '/images/equipment/wheel-loader.jpg',
    imageAlt:
      'Yellow wheel loader carrying gravel in its front bucket on a construction site',
    specs: [
      { label: 'Machine class', value: 'Medium wheel loader' },
      { label: 'Bucket capacity', value: '2 – 4 m³ (typical)' },
      { label: 'Strengths', value: 'Fast cycles, high mobility, versatile bucket work' },
      { label: 'Delivery', value: 'Transport to site (to be arranged)' },
    ],
    applications: [
      'Loading tippers with aggregates and sand',
      'Stockpile handling at material yards',
      'Site clearing and clean-up',
      'Backfilling and material placement',
    ],
  },
  {
    slug: 'road-rollers',
    name: 'Road Rollers',
    shortDescription:
      'Dependable compaction for soil, gravel and base layers.',
    description:
      'Proper compaction is what makes roads and platforms last. Our vibratory road rollers compact subgrade, gravel base and backfill to the required density — the difference between a surface that endures and one that fails. Ideal for road works, parking areas, industrial platforms and building platforms.',
    image: '/images/equipment/road-roller.jpg',
    imageAlt:
      'Yellow single-drum vibratory road roller compacting a gravel road',
    specs: [
      { label: 'Machine class', value: 'Single-drum vibratory roller' },
      { label: 'Drum width', value: '1.8 – 2.2 m (typical)' },
      { label: 'Strengths', value: 'Even compaction, strong vibration performance' },
      { label: 'Delivery', value: 'Transport to site (to be arranged)' },
    ],
    applications: [
      'Road base and sub-base compaction',
      'Backfill and trench compaction',
      'Industrial and building platform preparation',
      'Gravel road maintenance',
    ],
  },
  {
    slug: 'tippers',
    name: 'Tippers',
    shortDescription:
      'Efficient transport of aggregates, sand and materials to and from site.',
    description:
      'Tippers move your project forward. From delivering aggregates and sand to site, to hauling spoil and base material, our tipper trucks provide the transport backbone for construction and infrastructure works across Kigali and beyond.',
    image: '/images/equipment/tipper.jpg',
    imageAlt:
      'Yellow tipper dump truck loaded with aggregate on a construction access road',
    specs: [
      { label: 'Truck class', value: 'Heavy tipper / dump truck' },
      { label: 'Body capacity', value: '10 – 20 m³ (typical)' },
      { label: 'Strengths', value: 'Reliable hauling, site and road operation' },
      { label: 'Delivery', value: 'Dispatched to your site (to be arranged)' },
    ],
    applications: [
      'Aggregate and sand deliveries',
      'Spoil and excavated material removal',
      'Base material haulage for road works',
      'General site transport',
    ],
  },
];

export const equipmentSpecNote =
  'Specifications shown are typical for the equipment class and are illustrative only. Exact units, specifications and terms are confirmed at enquiry time.';

export function getEquipment(slug: string): Equipment | undefined {
  return equipment.find((e) => e.slug === slug);
}
