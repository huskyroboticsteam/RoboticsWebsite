<script setup lang="ts">
import Destinations from "~/components/Destinations.vue";
import { gsap } from "gsap";
useSeoMeta({
	title: "Join Us | Husky Robotics",
	description:
		"Husky Robotics welcomes passionate students eager to build real systems, solve complex problems, and collaborate across disciplines in pursuit of exploration and innovation."
});
let expanded: Ref<String | null> = ref(null);

const { data: faqs } = await useAsyncData("faqs", () => queryCollection("faqs").all());

function scrollTo(id: string) {
	gsap.to(window, {
		duration: 0.8,
		scrollTo: { y: `#${id}` },
		ease: "power2"
	});
}

function setExpanded(faq: string) {
	if (expanded.value === faq) {
		expanded.value = null;
	} else {
		expanded.value = faq;
	}
}

function openFAQ(element: Element) {
	gsap.set(element, { height: 0 });
	gsap.to(element, {
		duration: 0.5,
		height: "auto",
		ease: "power2"
	});
}
function closeFAQ(element: Element, done: () => void) {
	gsap.to(element, {
		duration: 0.5,
		height: 0,
		ease: "power2"
	});
}
</script>
<template>
	<main>
		<section class="bg-splash-mars">
			<div
				style="
					background: linear-gradient(
						236deg,
						rgba(115, 115, 115, 0.2) 22.93%,
						rgba(0, 0, 0, 0.65) 83.23%
					);
				"
			>
				<RoboticsContainer class="md:py-30 space-y-8 py-20">
					<div class="md:max-w-1/2 space-y-8">
						<h1 class="leading-18 text-secondary text-6xl font-bold lg:text-7xl">
							Get Involved With<br />Husky Robotics
						</h1>
						<p class="text-secondary md:max-w-1/2 pb-5 text-lg">
							Join our team of 100+ talented UW engineers: gain industry experience, collaborate in
							a very strong team culture, build the skills to launch into the world after college
						</p>
						<p class="text-secondary text-2xl font-bold hover:underline">
							2025 Fall applications have now closed, check back for potential Winter quarter
							applications, or the 2026 cycle.
						</p>
					</div>
				</RoboticsContainer>
				<RoboticsContainer>
					<p class="container py-8 text-xs text-zinc-400">
						<NuxtLink
							class="underline"
							to="https://photojournal.jpl.nasa.gov/catalog/PIA26556"
							target="_blank"
							>PIA26556 – Mars Panorama from Perseverance</NuxtLink
						>
						(courtesy of NASA/JPL-Caltech)
						<br />
						<br />
						These images are used for educational and academic purposes only, without any commercial
						intent, and in full compliance with NASA’s Media Usage Guidelines. NASA does not endorse
						this website or its contents. We gratefully acknowledge the work of the mission teams
						and image processors whose contributions make these resources publicly available.
					</p>
				</RoboticsContainer>
			</div>
		</section>
		<section class="bg-primary">
			<RoboticsContainer class="py-20">
				<div class="flex flex-col gap-10 lg:flex-row">
					<div class="flex-1 space-y-8 text-white">
						<h2 class="text-2xl font-bold">Join Us</h2>
						<p class="text-lg">
							Husky Robotics welcomes passionate students eager to build real systems, solve complex
							problems, and collaborate across disciplines in pursuit of exploration and innovation.
							We combine high-impact engineering with a strong, collaborative community built to
							meet the standards of pacific northwest industry.
						</p>
						<p class="text-xl font-bold italic">APPLY NOW</p>
						<ArrowLink
							to="https://docs.google.com/forms/d/e/1FAIpQLScQ7zmbBv6ft_I_yrrAHKHFAjqPW0LmGrMLeFfggS4s5C1FgA/viewform?usp=dialog"
							target="_blank"
							>Application Form</ArrowLink
						>
					</div>
					<div class="flex flex-1 items-center justify-end text-white">
						<div class="linklist">
							<button @click.prevent="scrollTo('excerpts')">
								Excerpts From Current Members
								<span class="float-right"><i class="fa-solid fa-arrow-down"></i></span>
							</button>

							<button
								role="button"
								@click.prevent="scrollTo('applications')"
							>
								Application Cycle
								<span class="float-right"><i class="fa-solid fa-arrow-down"></i></span>
							</button>
							<button
								role="button"
								@click.prevent="scrollTo('destinations')"
							>
								Where do our members go?
								<span class="float-right"><i class="fa-solid fa-arrow-down"></i></span>
							</button>
							<button
								role="button"
								@click.prevent="scrollTo('faq')"
							>
								FAQ
								<span class="float-right"><i class="fa-solid fa-arrow-down"></i></span>
							</button>
						</div>
					</div>
				</div>
			</RoboticsContainer>
		</section>
		<section
			class="bg-secondary"
			id="excerpts"
		>
			<RoboticsContainer class="py-20">
				<div class="flex flex-col space-y-8">
					<div class="flex flex-col items-center gap-10 lg:flex-row">
						<p
							class="border-b-1 flex-1 border-b-neutral-400 py-8 text-xl font-medium leading-10 lg:text-2xl"
						>
							"Husky Robotics gave me hands-on experience I couldn't get from classes. Every day
							here is about trying new ideas and solving interesting problems."
						</p>
						<div class="flex flex-1 flex-row justify-center">
							<img
								alt="A student sitting with their computer."
								class="aspect-4/3 object-cover md:w-3/4"
								src="~/assets/images/excerpt1.jpg"
							/>
						</div>
					</div>
					<div class="flex flex-col items-center gap-10 lg:flex-row">
						<p
							class="border-b-1 flex-1 border-b-neutral-400 py-8 text-xl font-medium leading-10 lg:text-2xl"
						>
							"After going to admitted students day last year and seeing the rover and the space
							focus I knew I wanted to join Husky Robotics."
						</p>
						<div class="flex flex-1 flex-row justify-center">
							<img
								alt="One of our rovers."
								class="aspect-4/3 object-cover md:w-3/4"
								src="~/assets/images/excerpt2.jpg"
							/>
						</div>
					</div>
					<div class="flex flex-col items-center gap-10 lg:flex-row">
						<p
							class="border-b-1 flex-1 border-b-neutral-400 py-8 text-xl font-medium leading-10 lg:text-2xl"
						>
							"Our partners really invest in our futures. Being part of this team opened up
							opportunities I never expected."
						</p>
						<div class="flex flex-1 flex-row justify-center">
							<img
								alt="Person soldering components onto a circuit board."
								class="aspect-4/3 object-cover md:w-3/4"
								src="~/assets/images/excerpt3.jpg"
							/>
						</div>
					</div>
				</div>
			</RoboticsContainer>
		</section>
		<section
			id="applications"
			class="bg-black"
		>
			<RoboticsContainer class="space-y-8 py-20 xl:w-2/3">
				<h2 class="text-secondary text-5xl font-bold">Application Cycle: 2025-2026</h2>
				<p class="text-lg text-zinc-100">
					Our main admissions take place during Autumn and Winter quarter, when we welcome new
					members to join our mission. Decisions are released by the third week of each cycle, and
					we encourage applicants from all disciplines who are excited to contribute to real
					engineering projects and exploration.
				</p>
				<ArrowLink
					to="https://docs.google.com/forms/d/e/1FAIpQLScQ7zmbBv6ft_I_yrrAHKHFAjqPW0LmGrMLeFfggS4s5C1FgA/viewform?usp=dialog"
					target="_blank"
					>Application Form</ArrowLink
				>
				<img src="~/assets/images/join_us.png" />
			</RoboticsContainer>
		</section>
		<Destinations />
		<section
			id="faq"
			class="bg-neutral-100"
		>
			<RoboticsContainer class="py-20 lg:w-3/4">
				<p class="font-roboto tracking-robotics">Husky Robotics</p>
				<h2 class="text-6xl font-bold">FAQs</h2>
				<div
					class="divide-y-1 border-y-1 my-8 flex flex-col divide-neutral-400 border-y-neutral-400"
				>
					<div
						v-for="faq in faqs"
						class="py-5"
						:key="faq.title"
					>
						<h3
							class="select-none text-xl font-semibold hover:cursor-pointer md:text-2xl"
							role="tab"
							tabindex="0"
							@keydown.enter="setExpanded(faq.title)"
							@click="setExpanded(faq.title)"
						>
							{{ faq.title }}
							<span class="float-right">
								<i
									class="fa-solid fa-plus"
									v-if="expanded !== faq.title"
								></i>
								<i
									class="fa-solid fa-minus"
									v-else
								></i
							></span>
						</h3>
						<Transition
							@enter="openFAQ"
							@leave="closeFAQ"
						>
							<div
								v-if="expanded === faq.title"
								class="overflow-hidden"
							>
								<p class="mt-4 lg:text-lg">
									{{ faq.description }}
								</p>
							</div>
						</Transition>
					</div>
				</div>
			</RoboticsContainer>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.linklist > button {
	@apply border-b-1 cursor-pointer border-b-neutral-300 py-2 text-left text-lg text-neutral-300;
	@apply transition-all duration-300 ease-in-out;
	@apply hover:border-b-secondary hover:text-secondary;
}
.linklist {
	@apply flex w-full flex-col space-y-3 lg:w-2/3;
}
.bg-splash-mars {
	@apply w-full overflow-hidden bg-cover bg-center bg-no-repeat md:bg-top;
	@apply bg-[url('~/assets/images/md_mars.jpg')];
	@apply md:bg-[url('~/assets/images/md_mars.jpg')];
	@apply lg:bg-[url('~/assets/images/lg_mars.jpg')];
	@apply xl:bg-[url('~/assets/images/xl_mars.jpg')];
}
</style>
