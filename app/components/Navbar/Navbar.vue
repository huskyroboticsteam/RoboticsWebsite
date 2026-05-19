<script setup lang="ts">
import { ref } from "vue";
import type { Link } from "~/types/ui";
import NavLink from "~/components/Navbar/NavLink.vue";

const menuBarOpen = ref(false);
const expanded = ref<string | null>(null);

const route = useRoute();

watch(menuBarOpen, (open) => {
	if (!open) return;
	const active = drowDowns.find((d) => d.links.some((l) => l.url === route.path));
	expanded.value = active ? active.text : null;
});

/*
We are watching the current url, when the current url changes, close the menu bar and collpase all
expanded sections in the mobile navbar.
 */
watch(
	() => route.fullPath,
	() => {
		menuBarOpen.value = false;
		expanded.value = null;
	}
);

const toggleMenu = useToggle(menuBarOpen);

function handleToggle(id: string) {
	expanded.value = expanded.value === id ? null : id;
}

const links: Link[] = [
	{ text: "Home", url: "/" },
	{ text: "About", url: "/about" },
	{ text: "Gallery", url: "/gallery" },
	{ text: "Support", url: "/support" },
	{ text: "Join Us", url: "/join" },
	{ text: "Competition", url: "/competition" }
];

const subLinks: Link[] = [
	{ text: "Subteams", url: "/subteams" },
	{ text: "Leadership", url: "/leadership" },
	{ text: "Sponsors", url: "/sponsors" }
];

type DropDownLink = {
	text: string;
	links: Link[];
};

const drowDowns: DropDownLink[] = [
	{
		text: "About",
		links: [
			{ text: "About", url: "/about" },
			{ text: "Sponsors", url: "/sponsors" },
			{ text: "Subteams", url: "/subteams" },
			{ text: "Competition", url: "/competition" },
			{ text: "Leadership", url: "/leadership" },
			{ text: "Gallery", url: "/gallery" }
		]
	},
	{
		text: "Follow Us",
		links: [
			{ text: "LinkedIn", url: "https://www.linkedin.com/company/husky-robotics/" },
			{ text: "Instagram", url: "https://www.instagram.com/uwrobots/" },
			{ text: "Facebook", url: "https://www.facebook.com/uwrobots/" },
			{ text: "YouTube", url: "https://www.youtube.com/@HuskyRobotics" }
		]
	},
	{
		text: "Get Involved",
		links: [
			{ text: "Join Us", url: "/join" },
			{ text: "Support", url: "/support" }
		]
	}
];
</script>

<template>
	<Html :class="{ 'overflow-hidden lg:overflow-auto': menuBarOpen }" />

	<div class="top-0 z-50 will-change-transform">
		<nav class="hidden items-center justify-center bg-primary px-4 py-5 lg:flex lg:flex-col">
			<div class="flex w-full flex-row px-6">
				<NuxtLink
					href="/"
					class="flex flex-1 flex-row items-center space-x-5"
				>
					<p
						class="font-roboto text-sm tracking-robotics text-secondary uppercase transition-colors duration-200 ease-in-out select-none"
					>
						Husky Robotics - UW Seattle
					</p>
				</NuxtLink>

				<div class="flex-1">
					<NuxtLink to="/">
						<img
							src="~/assets/images/logo_square_sm.png"
							class="mx-auto h-10"
							alt="Husky Robotics Logo"
						/>
					</NuxtLink>
				</div>

				<div
					class="flex flex-1 flex-row items-center justify-end space-x-4 text-center xl:space-x-8"
				>
					<NavLink to="/"> Home </NavLink>

					<NavLink
						v-for="dropDown in drowDowns"
						:key="dropDown.text"
						:to="dropDown.links"
					>
						{{ dropDown.text }}
					</NavLink>
				</div>
			</div>
		</nav>

		<nav
			class="relative flex items-center justify-center border-b-2 bg-primary px-4 py-3 lg:hidden"
		>
			<div class="container flex flex-row items-center justify-between">
				<div class="flex flex-row items-center space-x-5">
					<img
						src="~/assets/images/logo_square_sm.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
				</div>

				<p class="font-roboto text-lg tracking-robotics text-secondary uppercase">Husky Robotics</p>
				<button
					role="button"
					@click="toggleMenu()"
					class="w-10 rounded-sm py-0.5 text-2xl font-extrabold text-secondary transition-colors duration-100 ease-in-out"
				>
					<Transition
						name="fade"
						mode="out-in"
					>
						<i
							v-if="!menuBarOpen"
							class="fa-solid fa-bars"
						></i>
						<i
							v-else
							class="fa-regular fa-x"
						></i>
					</Transition>
				</button>
			</div>
		</nav>

		<Transition>
			<div
				v-if="menuBarOpen"
				@click.self="toggleMenu()"
				class="absolute flex h-dvh max-h-dvh w-full flex-col bg-black px-5 py-5 lg:hidden"
			>
				<div class="container mx-auto space-y-4">
					<NavLink
						to="/"
						:mobile="true"
					>
						Home
					</NavLink>

					<NavLink
						:mobile="true"
						v-for="dropDown in drowDowns"
						:key="dropDown.text"
						:id="dropDown.text"
						:expanded="expanded"
						:to="dropDown.links"
						@toggle="handleToggle"
					>
						{{ dropDown.text }}
					</NavLink>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.25s ease;
}
</style>
