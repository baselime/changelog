import { z, defineCollection } from "astro:content";

const changelogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.string(),
		alt: z.string(),
		featured: z.boolean(),
		date: z.date(),
		published: z.boolean(),
		author: z.object({
			id: z.string(),
			name: z.string(),
		}),
		tags: z.array(z.string()),
	}),
});

const authorCollection = defineCollection({
	schema: z.object({
		id: z.string(),
		name: z.string(),
		bio: z.string(),
		image: z.string(),
		position: z.string(),
		company: z.string(),
		url: z.string(),
	}),
});

export const collections = {
	changelog: changelogCollection,
	author: authorCollection
};
