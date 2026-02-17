<script setup lang="ts">
useSeoMeta({
	title: "Leadership | Husky Robotics",
	description: "Meet the team leading Husky Robotics."
});
const { data: leaders } = await useAsyncData("leadership", () =>
	queryCollection("leadership").all()
);
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
				<div class="grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-30">
					<div v-for="member in leader.people">
						<NuxtImg
							format="webp"
							class="mx-auto w-full object-contain"
							:placeholder="[667, 1000]"
							:src="`/images/leadership/${member.image}`"
						/>
						<div class="py-2">
							<h3
								class="text-xl font-semibold text-black md:text-2xl md:tracking-wider lg:text-3xl"
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
