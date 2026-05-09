<script setup lang="ts">
import type { Collections } from "@nuxt/content";
import { gsap } from "gsap";

const { data: teams } = await useAsyncData("teams", () =>
	queryCollection("teams").where("subteams", "IS NOT NULL").all()
);
let currentTeam: Ref<Collections["teams"] | null> = ref(null);
let route = useRoute();
useSeoMeta({
	title: "Subteams | Husky Robotics"
});

onMounted(() => {
	setTeamFromQuery();
});

watch(
	() => route.query.tab,
	() => {
		setTeamFromQuery();
	}
);

function setTeamFromQuery() {
	if (route.query.tab && typeof route.query.tab === "string") {
		const matchingTeam = teams.value?.find((team) => team.name === route.query.tab);
		if (matchingTeam) {
			currentTeam.value = matchingTeam;
		} else if (teams.value?.length) {
			currentTeam.value = teams.value[0];
		}
	} else if (teams.value?.length) {
		currentTeam.value = teams.value[0];
	}
}
function headerTransitionEnter(el: Element) {
	gsap.set(el, { opacity: 0 });
	gsap.to(el, {
		opacity: 1,
		ease: "power1.out",
		duration: 0.8
	});
}
</script>
<template>
	<main>
		<section>
			<NuxtImg
				alt="Husky Robotics Team Photo"
				src="/images/teams/about2.jpg"
				class="aspect-16/8 w-full object-cover object-bottom lg:hidden"
			/>
			<NuxtImg
				alt="Husky Robotics Team Photo"
				src="/images/teams/subteams.jpg"
				class="hidden w-full lg:block"
			/>
		</section>
		<section>
			<RoboticsContainer class="py-10 lg:py-20">
				<div class="mx-auto w-3/4 space-y-4 text-center">
					<p class="text-lg">
						Husky Robotics is an elite, student-led planetary exploration initiative. Each year, we
						engineer and deploy sophisticated robotic platforms, including precision manipulator
						arms, autonomous rovers, advanced scientific payloads, and aerial drones. Our projects
						authentically replicate the rigors of space exploration: navigating challenging terrain,
						resolving critical system failures, conducting rigorous scientific analyses, and
						achieving comprehensive system integration under demanding timelines.
					</p>
					<p class="font-roboto text-sm tracking-robotics text-neutral-500">
						Husky Robotics Team (2025)
					</p>
				</div>
			</RoboticsContainer>
			<RoboticsContainer class="space-y-16 py-10 lg:space-y-32 xl:w-3/4">
				<div
					class="flex flex-col flex-wrap items-center justify-between space-y-4 lg:flex-row lg:items-start lg:space-y-0"
				>
					<template
						v-for="team in teams"
						:key="team.id"
					>
						<NuxtLink
							v-if="currentTeam && team.subteams"
							class="cursor-pointer border-b-2 text-3xl leading-10 font-bold tracking-wide transition-colors duration-200 ease-in-out select-none hover:text-primary"
							:class="currentTeam.name === team.name ? 'text-black' : 'text-neutral-400'"
							:to="{ path: '/subteams', query: { tab: team.name } }"
						>
							{{ team.name }}
						</NuxtLink>
					</template>
				</div>
				<div class="flex flex-col space-y-16">
					<TransitionGroup @enter="headerTransitionEnter">
						<div
							class="flex flex-col gap-8 xl:flex-row xl:items-center"
							v-for="subteam in currentTeam?.subteams"
							:key="subteam.title"
						>
							<div class="xl:w-1/2 2xl:w-2/5">
								<NuxtImg
									:src="`/images/teams/${subteam.img}`"
									class="aspect-5/3 w-full object-cover"
								/>
							</div>
							<div class="flex-1 space-y-4">
								<h2 class="text-3xl font-semibold tracking-wider">{{ subteam.title }}</h2>
								<h3
									v-if="subteam.name"
									class="font-roboto tracking-robotics text-stone-500"
								>
									{{ subteam.name }}
								</h3>
								<p class="text-lg lg:leading-loose">
									{{ subteam.description }}
								</p>
							</div>
						</div>
					</TransitionGroup>
				</div>
			</RoboticsContainer>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.bg-splash-birdseye {
	@apply w-full overflow-hidden bg-cover bg-center bg-no-repeat;
	@apply bg-[url('~/assets/images/subteams.jpg')];
	@apply md:bg-[url('~/assets/images/subteams.jpg')];
	@apply lg:bg-[url('~/assets/images/subteams.jpg')];
	@apply xl:bg-[url('~/assets/images/subteams.jpg')];
}
</style>
