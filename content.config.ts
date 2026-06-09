import { defineCollection, defineContentConfig } from "@nuxt/content";
import z from "zod";
export default defineContentConfig({
	collections: {
		teams: defineCollection({
			source: "team/**.yaml",
			type: "data",
			schema: z.object({
				name: z.string(),
				description: z.string(),
				application: z.url().optional(),
				img: z.string(),
				subteams: z.array(
					z.object({
						title: z.string(),
						name: z.string(),
						description: z.string(),
						img: z.string()
					})
				)
			})
		}),
		gallery: defineCollection({
			source: "gallery/**.yaml",
			type: "data",
			schema: z.object({
				name: z.string(),
				description: z.string(),
				link: z.url(),
				img: z.string(),
				items: z.array(
					z.object({
						name: z.string(),
						description: z.string(),
						img: z.string()
					})
				)
			})
		}),
		leadership: defineCollection({
			source: "leadership/**.yaml",
			type: "data",
			schema: z.object({
				name: z.string(),
				people: z.array(
					z.object({
						name: z.string(),
						role: z.string(),
						image: z.string(),
						linkedin: z.string()
					})
				)
			})
		}),
		faqs: defineCollection({
			source: "faqs/**.yaml",
			type: "data",
			schema: z.object({
				title: z.string(),
				description: z.string()
			})
		})
	}
});
