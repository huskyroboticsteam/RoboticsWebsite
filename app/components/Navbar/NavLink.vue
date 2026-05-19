<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Link } from "~/types/ui";
import { gsap } from "gsap";

const route = useRoute();

const props = withDefaults(
	defineProps<{
		to: string | Link[];
		mobile?: boolean;
		expanded?: string | null;
		setExpanded?: (value: string | null) => void;
		id?: string;
	}>(),
	{
		mobile: false
	}
);
const emit = defineEmits<{
	(e: "toggle", id: string): void;
}>();

function toggleExpanded() {
	if (!props.id) return;
	emit("toggle", props.id);
}

type LinkStyle = "mobileLink" | "desktopLink";

let linkStyle: LinkStyle = props.mobile ? "mobileLink" : "desktopLink";

const hasActiveChild = Array.isArray(props.to)
	? props.to.some((link) => route.path === link.url)
	: false;

function openMenu(element: Element) {
	gsap.set(element, { height: 0 });
	gsap.to(element, {
		duration: 0.35,
		height: "auto",
		ease: "power2"
	});
}

function closeMenu(element: Element) {
	gsap.to(element, {
		duration: 0.35,
		height: 0,
		ease: "power2"
	});
}
</script>

<template>
	<NuxtLink
		v-if="typeof props.to === 'string'"
		:to="to as string"
		:class="linkStyle"
	>
		<slot></slot>
	</NuxtLink>

	<div
		v-else-if="props.mobile"
		class="dropDownGroup"
	>
		<button
			class="mobileLink w-full text-left text-nowrap"
			@click="toggleExpanded"
		>
			<slot></slot>
		</button>

		<Transition
			@enter="openMenu"
			@leave="closeMenu"
		>
			<ul
				v-if="expanded === id"
				class="overflow-hidden pl-4"
			>
				<li
					v-for="link in props.to as Link[]"
					:key="link.text"
				>
					<NuxtLink
						:to="link.url"
						class="dropDownLink mobileDropDownLink"
					>
						{{ link.text }}
					</NuxtLink>
				</li>
			</ul>
		</Transition>
	</div>

	<div
		v-else
		class="group dropDownGroup"
	>
		<button class="desktopLink text-nowrap">
			<slot></slot>
		</button>

		<ul
			class="invisible absolute z-10 translate-y-2 bg-black p-2 text-left text-zinc-300 opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
		>
			<li
				v-for="link in props.to as Link[]"
				:key="link.text"
			>
				<NuxtLink
					:to="link.url"
					class="dropDownLink"
				>
					{{ link.text }}
				</NuxtLink>
			</li>
		</ul>
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

.mobileDropDownLink {
	@apply block py-2 text-left text-lg text-zinc-400;
}

.mobileLink {
	@apply block py-2 text-left text-xl text-zinc-300 uppercase md:text-3xl;
}

.desktopLink {
	@apply rounded-sm border-2 border-dashed border-transparent px-2 py-0.5 font-roboto text-sm tracking-robotics2 text-zinc-300 uppercase;
	@apply transition-colors duration-200 ease-in-out hover:border-white;
}

.desktopLink.router-link-active,
.dropDownGroup:has(ul .router-link-active) .desktopLink {
	@apply md:rounded-sm md:border-2 md:border-solid md:border-white md:text-secondary;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.25s ease;
}

.mobileLink.router-link-active {
	@apply text-white;
}
.mobileLink.router-link-active,
.dropDownGroup:has(ul .router-link-active) .mobileLink {
	@apply text-white;
}
</style>
