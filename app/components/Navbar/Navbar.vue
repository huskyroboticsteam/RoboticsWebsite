<script setup lang="ts">
import { ref } from "vue";
let menuBarOpen = ref(false);
let scroll = ref(0);
onMounted(() => {
	let { x, y } = useWindowScroll();
	watch(y, (value) => {
		scroll.value = value;
	});
});
const toggleMenu = useToggle(menuBarOpen);

type Link = {
	text: string;
	url: string;
};

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
			{
				text: "About",
				url: "/about"
			},
			{ text: "Sponsors", url: "/sponsors" },
			{ text: "Subteams", url: "/subteams" },
			{ text: "Competition", url: "/competition" },
			{ text: "Leadership", url: "/leadership" }
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
					<NuxtLink
						to="/"
						class="desktopLink"
						>Home</NuxtLink
					>
					<div
						v-for="dropDown in drowDowns"
						class="group dropDownGroup"
					>
						<button class="desktopLink text-nowrap">{{ dropDown.text }}</button>
						<ul
							class="invisible absolute z-10 bg-black p-2 text-left text-zinc-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:visible group-hover:opacity-100"
						>
							<li v-for="link in dropDown.links">
								<NuxtLink
									:to="link.url"
									class="dropDownLink"
								>
									{{ link.text }}
								</NuxtLink>
							</li>
						</ul>
					</div>
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
					<i
						class="fa-solid fa-bars"
						v-show="!menuBarOpen"
					></i>
					<i
						class="fa-regular fa-x"
						v-show="menuBarOpen"
					></i>
				</button>
			</div>
		</nav>
		<Transition>
			<div
				v-if="menuBarOpen"
				@click.self="toggleMenu()"
				class="absolute flex h-screen max-h-screen w-full flex-col bg-black px-5 py-5 lg:hidden"
			>
				<div class="container mx-auto space-y-4">
					<NuxtLink
						v-for="link in links"
						:to="link.url"
						@click="toggleMenu()"
						class="mobileLink"
					>
						{{ link.text }}
					</NuxtLink>
					<hr class="border-white" />
					<NuxtLink
						v-for="link in subLinks"
						:to="link.url"
						@click="toggleMenu()"
						class="mobileLink"
					>
						{{ link.text }}
					</NuxtLink>
				</div>
			</div>
		</Transition>
	</div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.dropDownLink {
	@apply font-roboto uppercase hover:text-white;
}
.dropDownLink.router-link-active {
	@apply text-white;
}

.scrolled {
	@apply border-b-2 backdrop-blur-2xl;
}

.mobileLink,
.desktopLink {
	@apply rounded-sm border-2 border-dashed border-transparent font-roboto text-sm tracking-robotics2 text-zinc-300 uppercase;
	@apply transition-colors duration-200 ease-in-out hover:border-white;
}

.mobileLink {
	@apply block py-2 text-xl md:text-3xl;
}

.desktopLink {
	@apply px-2 py-0.5;
}

.desktopLink.router-link-active,
.mobileLink.router-link-active,
.dropDownGroup:has(ul .router-link-active) .desktopLink,
.v-enter-active,
.v-leave-active {
	transition: opacity 0.25s ease;
	@apply rounded-sm border-2 border-solid border-white text-secondary;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
