<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

let btnGroup = useTemplateRef("buttonGroup");
let gsapContext: gsap.Context;
onMounted(() => {
	gsapContext = gsap.context(() => {
		let split: SplitText = SplitText.create("h1", { type: "chars" });
		gsap.set("h1", { opacity: 1 });
		gsap
			.timeline({ defaults: { ease: "power2.inOut", autoAlpha: 0 } })
			.from(split.chars, {
				duration: 0.8,
				opacity: 0,
				stagger: 0.05
			})
			.from("h1+p", {
				duration: 0.5,
				opacity: 0
			})
			.from("h1+p+p", {
				duration: 0.5,
				opacity: 0
			})
			.from("h1+p+p+p", {
				duration: 0.5,
				opacity: 0
			})
			.from(btnGroup.value, {
				duration: 0.5,
				opacity: 0
			});
		gsap.from(".facts > *", {
			duration: 0.4,
			opacity: 0,
			stagger: 0.1,
			ease: "power2.in",
			autoAlpha: 0,
			scrollTrigger: ".facts"
		});
	});
});
onUnmounted(() => {
	gsapContext.revert();
});
useSeoMeta({
	title: "Home | Husky Robotics",
	description:
		"Husky Robotics provides UW students the opportunity to develop skills as part of a large interdisciplinary science and engineering project. We turn our member's passion for robotics, space, science and engineering into real-world experience, offering a unique chance to have hands-on time in a variety of engineering and engineering-adjacent fields."
});
const { data: teams } = await useAsyncData("teams", () => queryCollection("teams").all());
const { data: gallery } = await useAsyncData("gallery", () => queryCollection("gallery").all());
</script>
<template>
	<main>
		<section class="bg-splash-birdseye">
			<div
				style="
					background: linear-gradient(
						236deg,
						rgba(115, 115, 115, 0.2) 22.93%,
						rgba(0, 0, 0, 0.65) 83.23%
					);
				"
			>
				<RoboticsContainer class="space-y-6 py-20 md:py-30">
					<div class="space-y-6 md:max-w-1/2 xl:max-w-1/3">
						<h1
							class="text-6xl leading-18 font-bold text-secondary opacity-0 lg:text-7xl lg:leading-30 xl:text-8xl"
						>
							Husky<br />Robotics
						</h1>
						<p class="invisible border-b-1 border-b-accent pb-5 text-lg text-secondary">
							Rovers modeled, engineered, and field‑tested by UW students for real‑world planetary
							exploration & industry‑grade team robotics.
						</p>
						<p class="invisible space-x-3 align-middle">
							<span class="font-roboto font-medium tracking-robotics text-secondary"
								>University of Washington - Seattle</span
							>
						</p>
					</div>
					<div
						ref="buttonGroup"
						class="invisible mt-8 flex flex-col gap-8 md:flex-row"
					>
						<ArrowLink to="/join">Join The Team</ArrowLink>
					</div>
				</RoboticsContainer>
			</div>
		</section>
		<section>
			<RoboticsContainer class="space-y-8 py-20 md:max-w-4/5 xl:max-w-2/3">
				<p class="border-b-1 border-b-accent pb-5 text-lg">
					The University of Washington’s Husky Robotics leads the frontier of collegiate planetary
					exploration, blending elite engineering and scientific rigor. Our 2025 rover, Prometheus,
					symbolizes this commitment: built to autonomously explore Mars-analog environments and
					compete at prestigious international challenges, including the University Rover Challenge
					(URC) in Utah and the Canadian International Rover Challenge (CIRC).
				</p>
				<div class="facts grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
					<div class="invisible xl:col-span-1">
						<p class="font-roboto tracking-widest text-neutral-500">CLASS</p>
						<p class="text-lg font-bold text-black">Rover</p>
					</div>
					<div class="invisible xl:col-span-1">
						<p class="font-roboto tracking-widest text-neutral-500">AIM</p>
						<p class="text-lg font-bold text-black">Utah (URC)<br />Canada (CIRC)</p>
					</div>
					<div class="invisible xl:col-span-2">
						<p class="font-roboto tracking-widest text-neutral-500">URC / CIRC COMPETITIONS</p>
						<p class="text-lg font-bold text-black">
							May 27th to 30th <br />
							August 7th to 10th
						</p>
					</div>
					<div class="invisible xl:col-span-2">
						<p class="font-roboto tracking-widest text-neutral-500">OBJECTIVE</p>
						<p class="text-lg font-bold text-black">
							Seek signs of life while autonomously traversing scorching, rocky, sandy, arid
							terrain.
						</p>
					</div>
				</div>
			</RoboticsContainer>
		</section>
		<section class="bg-primary py-20 md:py-30">
			<RoboticsContainer class="flex flex-col items-center gap-10 lg:flex-row">
				<div class="flex h-full flex-1 flex-col space-y-8">
					<header class="space-y-2">
						<p class="font-roboto tracking-widest text-zinc-400">University of Washington 2026</p>
						<h2 class="text-4xl font-extrabold text-secondary">
							University Rover Challenge (URC) Team Video
						</h2>
					</header>
					<p class="text-secondary">
						Husky Robotics has just submitted our 2026 System Acceptance Review presenting the
						capabilities of our rover Daedalus and drone Icarus. This video showcases not only our
						rovers abilities but is also a testament to the hard work our team has put into building
						our rover this year. We aim to continue our legacy of podium finishes on the global
						stage at the Canadian International Rover Challenge (CIRC) and the University Rover
						Challenge (URC).
					</p>
					<ArrowLink to="#">Support Us</ArrowLink>
				</div>
				<div class="w-full flex-1">
					<div class="aspect-video w-full overflow-hidden rounded-sm">
						<iframe
							class="h-full w-full overflow-hidden rounded-sm"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/PJVO7Ae7_4M?si=CNEmDFMKfRhhFo_R"
							title="YouTube video player"
							allow="
								accelerometer;
								autoplay;
								clipboard-write;
								encrypted-media;
								gyroscope;
								picture-in-picture;
								web-share;
							"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</RoboticsContainer>
		</section>
		<Destinations />
		<section class="bg-primary py-20">
			<RoboticsContainer class="space-y-20">
				<header class="space-y-5 text-center">
					<p class="font-roboto tracking-robotics text-zinc-400">Husky Robotics</p>
					<h2 class="text-5xl font-black text-secondary">Meet Our Team</h2>
					<p class="text-zinc-100">2025 Roster: <em>167 UW Engineers</em></p>
				</header>
				<div class="flex flex-col space-y-10">
					<div
						class="flex flex-col items-center gap-5 text-secondary lg:flex-row"
						v-for="team in teams"
						:key="team.name"
					>
						<div class="flex-1 space-y-8">
							<h3 class="text-4xl font-bold">{{ team.name }}</h3>
							<p class="text-lg">
								{{ team.description }}
							</p>
							<ArrowLink
								v-if="team.application"
								:to="team.application"
								>Join Us</ArrowLink
							>
						</div>
						<div class="flex flex-1 flex-row justify-center">
							<NuxtImg
								:alt="`Picture of ${team.name}.`"
								:src="`${team.img}`"
								class="aspect-3/2 object-cover lg:aspect-16/9 lg:p-5"
							/>
						</div>
					</div>
				</div>
				<img
					alt="Entire Robotics Team Photo"
					src="/images/teams/full.jpg"
					class="mx-auto lg:max-w-3/5"
				/>
				<ArrowLink
					class="justify-center"
					to="about"
					>About Our Team</ArrowLink
				>
			</RoboticsContainer>
		</section>
		<section>
			<RoboticsContainer class="flex flex-col py-10">
				<div
					class="flex flex-col gap-4 border-t-1 border-t-black py-8 lg:flex-row lg:items-center"
					v-for="category in gallery"
					:key="category.name"
				>
					<div
						class="flex flex-1 flex-row-reverse items-center justify-between space-x-8 lg:flex-row lg:justify-start"
					>
						<img
							alt="Electronics thumbnail"
							class="h-20 lg:h-auto lg:w-20"
							:src="`/images/gallery/thumbnails/${category.img}`"
						/>
						<h2 class="text-2xl font-bold md:text-3xl lg:text-4xl">{{ category.name }}</h2>
					</div>
					<div class="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center">
						<p class="flex-1">
							{{ category.description }}
						</p>
						<NuxtLink
							aria-label="Learn More"
							:to="{ path: '/gallery', query: { section: category.name.split(' ')[0] } }"
							class="flex items-center space-x-4 text-xl font-bold text-zinc-700 transition-colors duration-200 ease-in-out hover:text-primary"
							><p class="lg:hidden">Learn More</p>
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary transition-colors duration-200 ease-in-out lg:h-8 lg:w-8 lg:hover:bg-tertiary/75"
								><i class="fa-solid fa-arrow-right fa-xs text-white"></i></span
						></NuxtLink>
					</div>
				</div>
			</RoboticsContainer>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.bg-splash-birdseye {
	@apply w-full overflow-hidden bg-cover bg-center bg-no-repeat md:bg-top;
	@apply bg-[url('~/assets/images/md_birdseye.jpg')];
	@apply md:bg-[url('~/assets/images/md_birdseye.jpg')];
	@apply lg:bg-[url('~/assets/images/lg_birdseye.jpg')];
	@apply xl:bg-[url('~/assets/images/xl_birdseye.jpg')];
}
</style>
