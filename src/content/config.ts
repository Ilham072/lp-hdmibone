import { defineCollection, z } from "astro:content";

const sharedPostSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  author: z.string().default("HDMI Kabupaten Bone"),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  publishedAt: z.date(),
  updatedAt: z.date().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});

export const collections = {
  berita: defineCollection({
    type: "content",
    schema: sharedPostSchema
  }),
  artikel: defineCollection({
    type: "content",
    schema: sharedPostSchema
  })
};
