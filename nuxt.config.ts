// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },
	modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxt/image"],
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ["gsap", "gsap/ScrollTrigger", "gsap/SplitText", "gsap/ScrollToPlugin", "zod"]
		}
	},
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			link: [{ rel: "icon", href: "/favicon.ico", type: "image/ico" }],
			script: [{ src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" }]
		}
	},
	routeRules: {
		"/**": { prerender: true },
		"/api/**": { prerender: false, cors: true }
	},
	$production: {
		image: {
			provider: "ipxStatic"
		}
	},
	$development: {
		image: {
			provider: "ipx"
		}
	},
	image: {
		format: ["webp", "avif"],
		quality: 75,
		densities: [1, 2],
		screens: {
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1536
		}
	},
	nitro: {
		preset: "cloudflare_pages",
		prerender: {
			crawlLinks: true,
			failOnError: false,
			ignore: ["/api"],
			routes: ["/"]
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
	}
});
