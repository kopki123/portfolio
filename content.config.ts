import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'home/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional().default([]),
        socials: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          url: z.string().url(),
        })).optional().default([]),
        skillGroups: z.array(z.object({
          title: z.string(),
          items: z.array(z.string()),
        })).optional().default([]),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        period: z.string(),
        tags: z.array(z.string()),
        github: z.string().url(),
        demo: z.string().url(),
        cover: z.string(),
        date: z.date(),
      }),
    }),
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()).optional().default([])
      })
    }),
  },
});
