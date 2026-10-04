import type { MetadataRoute } from 'next';
import { equipment } from '@/lib/data/equipment';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shyam-engineering.example';
  const routes = ['/', '/about', '/equipment', '/material-supply', '/projects', '/contact', '/quote'];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })),
    ...equipment.map((item) => ({
      url: `${base}/equipment/${item.slug}`,
      lastModified: new Date(),
    })),
  ];
}
