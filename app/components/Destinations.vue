<script setup lang="ts">
import { gsap } from "gsap";

let destinationsAnimation: gsap.core.Tween;
let destinationsElements = useTemplateRef("destinationsRef");
onMounted(() => {
	destinationsAnimation = gsap.from(destinationsElements.value!.children, {
		duration: 0.4,
		opacity: 0,
		stagger: 0.1,
		ease: "power2.in",
		autoAlpha: 0,
		scrollTrigger: destinationsElements.value
	});
});
onUnmounted(() => {
	destinationsAnimation.revert();
});
type destination = {
	file: string;
	alt: string;
	link: string;
};

const destinations: destination[] = [
	{ file: "apple.png", alt: "Apple", link: "https://apple.com" },
	{ file: "amazon.png", alt: "Amazon", link: "https://amazon.com" },
	{ file: "microsoft.png", alt: "Microsoft", link: "https://microsoft.com" },
	{ file: "blueorigin.png", alt: "Blue Origin", link: "https://blueorigin.com" },
	{ file: "nasa.png", alt: "NASA", link: "https://nasa.gov" },
	{ file: "spacex.png", alt: "SpaceX", link: "https://spacex.com" },
	{ file: "meta.png", alt: "Meta", link: "https://meta.com" },
	{ file: "boeing.png", alt: "Boeing", link: "https://boeing.com" },
	{ file: "google.png", alt: "Google", link: "https://google.com" },
	{ file: "stoke.png", alt: "Stoke Space", link: "https://stokespace.com" },
	{ file: "jpl.png", alt: "NASA Jet Propulsion Laboratory", link: "https://jpl.nasa.gov" },
	{ file: "figure.png", alt: "Figure AI", link: "https://figure.ai" },
	{ file: "nvidia.png", alt: "NVIDIA", link: "https://nvidia.com" },
	{ file: "columbia.png", alt: "Columbia University", link: "https://columbia.edu" },
	{ file: "cal.png", alt: "University of California Berkeley", link: "https://berkeley.edu" },
	{ file: "uw.png", alt: "University of Washington", link: "https://washington.edu" },
	{ file: "ucla.png", alt: "University of California Los Angeles", link: "https://ucla.edu" },
	{ file: "stanford.png", alt: "Stanford University", link: "https://stanford.edu" },
	{ file: "harvard.png", alt: "Harvard University", link: "https://harvard.edu" },
	{ file: "michigan.png", alt: "University of Michigan", link: "https://umich.edu" },
	{ file: "gt.png", alt: "Georgia Institute of Technology", link: "https://gatech.edu" }
];
</script>
<template>
	<section id="destinations">
		<div class="container mx-auto gap-5 space-y-5 px-4 py-10 lg:max-w-1/2">
			<h2 class="text-4xl font-bold">NASA Inspired Robotics: Our Team</h2>
			<p>
				Husky Robotics cultivates exceptional talent, preparing +100 University of Washington
				undergraduate engineers yearly for impactful careers. Our alumni regularly advance into
				prominent full time roles across industry-leading companies and innovative research
				institutions. With strong partnerships and work experiences spanning Mechanical Engineering,
				Electrical & Computer Engineering, and Chemical & Biological engineering at UW. Here are
				just a few places where many of our team’s alumni have made their mark:
			</p>
		</div>
		<div class="container mx-auto px-4 py-10">
			<div
				ref="destinationsRef"
				class="grid grid-cols-3 justify-items-center gap-5 lg:grid-cols-7"
			>
				<div
					v-for="dest in destinations"
					:key="dest.file"
					class="invisible flex h-20 w-full items-center justify-center"
				>
					<NuxtLink
						:to="dest.link"
						class="block h-full w-full"
					>
						<img
							:src="`/images/destinations/${dest.file}`"
							:alt="dest.alt"
							class="mx-auto h-full max-h-16 w-auto object-contain transition-transform duration-200 ease-in-out hover:scale-110"
						/>
					</NuxtLink>
				</div>
			</div>
			<p class="mt-10 text-center font-roboto text-sm font-medium text-zinc-400">
				Source: LinkedIn Alumni Tool - University of Washington
			</p>
		</div>
	</section>
</template>
