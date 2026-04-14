<script lang="ts" setup>
useSeoMeta({
	title: "Husky Robotics",
	themeColor: "#ffffff",
	ogImage: "https://uwrobots.org/logoOriginal_sm.png"
});
</script>
<template>
	<Html lang="en" />
	<div class="flex min-h-screen flex-col">
		<Navbar />
		<div class="flex flex-1 flex-col">
			<NuxtPage />
		</div>
		<Footer />
	</div>
</template>
