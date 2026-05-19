<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Link } from "~/types/ui";

const props = withDefaults(
	defineProps<{
		to: string | Link[];
		mobile?: boolean;
	}>(),
	{
		mobile: false
	}
);
type LinkStyle = "mobileLink" | "desktopLink";

let linkStyle: LinkStyle = props.mobile ? "mobileLink" : "desktopLink";
</script>
<template>
	<NuxtLink
		v-if="typeof props.to === 'string'"
		:to="to as string"
		:class="linkStyle"
		><slot></slot
	></NuxtLink>
	<div
		v-else
		class="group dropDownGroup"
	>
		<button class="desktopLink text-nowrap"><slot></slot></button>
		<ul
			class="invisible absolute z-10 bg-black p-2 text-left text-zinc-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:visible group-hover:opacity-100"
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
</style>
