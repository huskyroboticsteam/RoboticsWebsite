// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },
	modules: ["@vueuse/nuxt", "@nuxt/content"],
	vite: {
		plugins: [tailwindcss()]
	},
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			link: [{ rel: "icon", href: "./favicon.ico", type: "image/ico" }],
			script: [{ src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" }]
		}
	},
	ssr: true,
	nitro: {
		prerender: {
			crawlLinks: true,
			failOnError: false
		}
	},
	runtimeConfig: {
		public: {
			turnstileKey: ""
		},
		turnstileSecret: "",
		discordWebhook: "",
		emailEndPoint: "",
		emailSecret: ""
	},
	routeRules: {
		"/": { prerender: true }
	}
});
