import { defineCollection, z } from 'astro:content';

const layananCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    category: z.enum(['electrical', 'mechanical', 'balancing', 'testing', 'machining', 'component']),
    categoryLabel: z.string(),
    heroImage: z.string(),
    thumbnail: z.string(),
    icon: z.string().optional(),
    featured: z.boolean().default(false),
    orderPriority: z.number().default(99),
    keySpecs: z.array(z.string()).default([]),
    subServices: z.array(z.string()).default([]),
    standards: z.array(z.string()).default([]),
    applicableIndustries: z.array(z.string()).default([]),
  }),
});

const fasilitasCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    category: z.string(),
    capacity: z.string(),
    description: z.string(),
    coverImage: z.string(),
    specs: z.record(z.string()).optional(),
    orderPriority: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

const proyekCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    sector: z.string(),
    equipment: z.string(),
    scope: z.string(),
    location: z.string(),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

export const collections = {
  layanan: layananCollection,
  fasilitas: fasilitasCollection,
  proyek: proyekCollection,
};
