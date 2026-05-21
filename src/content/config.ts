import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    slug:     z.string().optional(),
    client:   z.string().optional(),
    category: z.string().optional(),
    tags:     z.array(z.string()).default([]),
    status:   z.enum(['published', 'draft']).default('draft'),
    date:     z.coerce.date(),
    summary:  z.string(),
    cover:    z.string().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    slug:    z.string().optional(),
    tags:    z.array(z.string()).default([]),
    status:  z.enum(['published', 'draft']).default('draft'),
    date:    z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { work, writing };
