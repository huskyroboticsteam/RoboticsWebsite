<script setup lang="ts">
import { gsap } from "gsap";

useSeoMeta({
	title: "Leadership | Husky Robotics",
	description: "Meet the team leading Husky Robotics."
});
const { data: leaders } = await useAsyncData("leadership", () =>
	queryCollection("leadership").all()
);
const gridRefs = ref<HTMLElement[]>([]);
onMounted(() => {
	gridRefs.value.forEach((grid) => {
		const members = grid.querySelectorAll(".member");
		gsap.to(members, {
			scrollTrigger: {
				trigger: grid,
				start: "top 75%"
			},
			duration: 0.5,
			opacity: 1,
			stagger: 0.15,
			ease: "power2.in"
		});
	});
});
</script>
<template>
	<main>
		<section class="bg-neutral-100">
			<RoboticsContainer
				class="py-10"
				v-for="leader in leaders"
			>
				<div class="flex justify-center">
					<h2
						class="my-8 inline-block border-b-2 border-b-gray-500 pb-4 text-center text-4xl font-bold tracking-wide"
					>
						{{ leader.name }}
					</h2>
				</div>
				<div
					ref="gridRefs"
					class="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-20"
				>
					<div
						v-for="member in leader.people"
						class="member"
					>
						<NuxtImg
							class="mx-auto w-full object-contain"
							sizes="100vw md:50vw lg:400px"
							format="webp"
							loading="lazy"
							decoding="async"
							densities="1x 2x"
							:src="`${member.image}`"
							width="667"
							height="1000"
						/>
						<div class="py-2">
							<h3
								class="text-xl font-semibold text-black md:text-2xl md:tracking-wider lg:text-2xl"
							>
								{{ member.role }}
							</h3>
							<div>
								<h4
									class="inline font-roboto tracking-robotics text-neutral-500 uppercase lg:text-lg"
								>
									{{ member.name }}
									<NuxtLink
										:href="member.linkedin"
										target="_blank"
										class="hover:text-black"
									>
										<i class="fa-brands fa-square-linkedin scale-150 align-middle"></i>
									</NuxtLink>
								</h4>
							</div>
						</div>
					</div>
				</div>
			</RoboticsContainer>
		</section>
	</main>
</template>
<style scoped>
/*
Set opacity to 0 so gsap can animate it in
 */
.member {
	opacity: 0;
}
</style>
