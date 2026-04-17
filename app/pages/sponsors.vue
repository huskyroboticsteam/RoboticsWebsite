<script setup lang="ts">
import { gsap } from "gsap";

useSeoMeta({
	title: "Sponsors | Husky Robotics",
	description: "Thank you to our 24-25 sponsors!"
});
type Sponsor = {
	name: string;
	logo: string;
	url: string;
};
onMounted(() => {
	gsap.from(".sponsors > *", {
		duration: 0.4,
		opacity: 0,
		stagger: 0.1,
		ease: "power2.in",
		autoAlpha: 0,
		scrollTrigger: ".sponsors"
	});
});
const sponsors: Sponsor[] = [
	// MPS
	{ name: "Monolithic Power Systems", logo: "mps.png", url: "https://www.monolithicpower.com/" },

	{ name: "Altium", logo: "altium.png", url: "https://www.altium.com/" },
	{ name: "Solidworks", logo: "solidworks.png", url: "https://www.solidworks.com/" },
	{ name: "OnShape", logo: "onshape.png", url: "https://www.onshape.com/" },
	{
		name: "University of Washington Department of Mechanical Engineering",
		logo: "me.png",
		url: "https://me.washington.edu/"
	},
	{ name: "ODrive", logo: "odrive.png", url: "https://odriverobotics.com/" },

	{
		name: "University of Washington Department of Electrical Computer Engineering",
		logo: "ece.png",
		url: "https://ece.uw.edu/"
	},
	{
		name: "Paul G. Allen School of Computer Science & Engineering",
		logo: "cs.png",
		url: "https://cs.washington.edu/"
	},
	{ name: "Notion", logo: "notion.png", url: "https://www.notion.com/" },

	{ name: "Allen Control Systems", logo: "acs.png", url: "https://www.allencontrolsystems.com/" },
	{ name: "Hakko", logo: "hakko.png", url: "https://www.hakkousa.com/" },
	{ name: "REV Robotics", logo: "rev.png", url: "https://www.revrobotics.com/" },
	{ name: "Harmonic Drive", logo: "hd.gif", url: "https://www.harmonicdrive.net/" },
	{ name: "Husky Union Building", logo: "hub.png", url: "https://hub.washington.edu/" },
	{ name: "Stoiber Engineering", logo: "stoi.png", url: "https://stoiberengineering.com/" },
	{ name: "Texas Instruments", logo: "ti.png", url: "https://www.ti.com/" },
	{ name: "Protocase", logo: "protocase.png", url: "https://www.protocase.com/" }
];
</script>
<template>
	<main>
		<section>
			<RoboticsContainer class="py-20">
				<div class="container mx-auto py-10">
					<div class="sponsors flex flex-row flex-wrap justify-center gap-8">
						<div
							v-for="sponsor in sponsors"
							:key="sponsor.name"
							class="invisible flex max-w-1/3 items-center justify-center"
						>
							<NuxtLink
								:to="sponsor.url"
								class="block h-full w-full"
							>
								<img
									:src="`/images/sponsors/${sponsor.logo}`"
									:alt="sponsor.name"
									class="/3 mx-auto h-full w-auto object-contain transition-transform duration-200 ease-in-out hover:scale-110"
								/>
							</NuxtLink>
						</div>
					</div>
					<div class="mx-auto mt-16 flex flex-col items-center space-y-6 px-4 text-center">
						<p class="text-3xl font-extrabold tracking-wider">
							Thank You To Our 2025-2026 Sponsors
						</p>
						<p class="text-lg lg:max-w-1/2">
							Thank you to our sponsors for empowering the Prometheus Rover’s mission. Your support
							helps us design advanced systems, pursue ambitious goals, and push the boundaries of
							student innovation in planetary exploration.
						</p>
						<p class="font-roboto tracking-robotics text-neutral-500">Husky Robotics Team (2026)</p>
					</div>
				</div>
			</RoboticsContainer>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.sponsor {
	@apply flex h-36 flex-col items-center justify-center rounded-sm p-5 transition-shadow duration-200 ease-in-out;
}
.sponsor > img {
	@apply h-full object-contain;
}
</style>
