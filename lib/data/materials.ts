export type Material = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  uses: string[];
};

export const materials: Material[] = [
  {
    slug: 'aggregates',
    name: 'Aggregates',
    shortDescription:
      'Clean, graded crushed-stone aggregates for concrete, roadworks and drainage.',
    description:
      'Quality aggregates are the backbone of durable concrete and roadworks. We supply clean, well-graded crushed stone in the fractions your project requires — from fine aggregates for concrete to larger stone for drainage and structural fill.',
    image: '/images/materials/aggregates.jpg',
    imageAlt: 'Piles of crushed stone aggregate in different sizes at a materials yard',
    uses: ['Concrete production', 'Road base and surfacing', 'Drainage works', 'Structural fill'],
  },
  {
    slug: 'sand',
    name: 'Sand',
    shortDescription:
      'Washed construction sand for mortars, concrete and finishing works.',
    description:
      'Consistent, washed construction sand for masonry mortars, concrete mixes, screeds and finishing works. Reliable gradation and cleanliness help your team achieve strong, consistent results on every batch.',
    image: '/images/materials/sand.jpg',
    imageAlt: 'Large pile of clean washed construction sand at a supply yard',
    uses: ['Masonry mortars', 'Concrete mixes', 'Screeds and plastering', 'Bedding works'],
  },
  {
    slug: 'base-material',
    name: 'Base Material',
    shortDescription:
      'Engineered crushed-stone base and sub-base material for roads and platforms.',
    description:
      'Well-graded crushed-stone base and sub-base material for road pavements, parking areas and industrial platforms. Properly graded base material is the foundation of a long-lasting surface.',
    image: '/images/materials/base.jpg',
    imageAlt: 'Graded crushed stone base course being spread on a road foundation',
    uses: ['Road pavement layers', 'Parking and hardstands', 'Industrial platforms', 'Backfill and capping'],
  },
];

export function getMaterial(slug: string): Material | undefined {
  return materials.find((m) => m.slug === slug);
}
