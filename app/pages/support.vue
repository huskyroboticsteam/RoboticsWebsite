<script setup lang="ts">
import { FetchError } from "ofetch";
import { gsap } from "gsap";
let turnstileId = ref("");
let formError = ref("");
let formSuccess = ref(false);
let loading = ref(false);
const config = useRuntimeConfig();
import type { ZodIssue } from "zod";
import { OutreachFormSchema } from "#shared/OutreachFormSchema";
useSeoMeta({
	title: "Support Us | Husky Robotics",
	description:
		"When you support Husky Robotics, you invest in people. You help students build meaningful connections, access critical resources, and become the engineering leaders of tomorrow."
});
const formData = ref({
	name: "",
	email: "",
	company: "",
	notes: "",
	cftoken: "",
	sponsor: false,
	donate: false,
	recruit: false,
	outreach: false,
	other: false
});
type Error = {
	name: string;
	email: string;
	company: string;
	notes: string;
	cftoken: string;
	checkboxes: string;
};
const errors: Ref<Error> = ref({
	name: "",
	email: "",
	company: "",
	notes: "",
	cftoken: "",
	checkboxes: ""
});

const canSubmit = computed(() => {
	return (
		!errors.value.name &&
		!errors.value.email &&
		!errors.value.company &&
		!errors.value.notes &&
		!errors.value.cftoken &&
		!errors.value.checkboxes &&
		!loading.value
	);
});

function validateCheckboxes() {
	if (
		!(
			formData.value.sponsor ||
			formData.value.donate ||
			formData.value.recruit ||
			formData.value.outreach ||
			formData.value.other
		)
	) {
		errors.value.checkboxes = "Please select at least one option.";
	} else {
		errors.value.checkboxes = "";
	}
}
onMounted(() => {
	//@ts-ignore
	window.turnstile.ready(function () {
		// @ts-ignore
		turnstileId = window.turnstile.render(".cf-turnstile", {
			sitekey: config.public.turnstileKey,
			callback: function (token: string) {
				console.log(`Challenge Success ${token}`);
				formData.value.cftoken = token;
			},
			"error-callback": function () {
				errors.value.cftoken =
					"Unfortunately, it looks like you have been detected as a bot. Please refresh the page.";
			}
		});
	});
});
type OutreachResponse = { success: true; message: string } | { success: false; message: string };
async function handleSubmit(e: Event) {
	loading.value = true;
	formError.value = "";
	formSuccess.value = false;
	let response = await $fetch<OutreachResponse>("/api/outreach", {
		method: "POST",
		body: formData.value,
		onResponse: () => {
			loading.value = false;
		}
	}).catch((error: FetchError) => {
		if (error.status == 400) {
			error.data.forEach((element: ZodIssue) => {
				errors.value[element.path[0] as keyof Error] = element.message;
			});
		} else if (error.status == 403) {
			errors.value["cftoken" as keyof Error] = error.data.message;
		} else {
			formError.value =
				"An internal error occurred on our end. Please reach out to uwrobots@uw.edu or try again later.";
			// @ts-ignore
			window.turnstile.reset(turnstileId);
		}
	});
	if (response) {
		if (response.success) {
			formSuccess.value = true;
			formError.value = "";
			formData.value = {
				name: "",
				email: "",
				company: "",
				notes: "",
				cftoken: "",
				sponsor: false,
				donate: false,
				recruit: false,
				outreach: false,
				other: false
			};
			// @ts-ignore
			window.turnstile.reset(turnstileId);
		}
	}
}
function transitionAlert(e: Element) {
	gsap.set(e, { height: 0 });
	gsap.to(e, { height: "auto", duration: 0.5 });
}
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
				<RoboticsContainer class="md:py-30 space-y-8 py-20">
					<div class="md:max-w-1/2 space-y-8">
						<h1 class="leading-18 text-secondary lg:leading-25 text-6xl font-bold lg:text-7xl">
							Support<br />Husky Robotics
						</h1>
						<p class="space-x-3 align-middle">
							<i class="fa-solid fa-circle text-active-green"></i>
							<span class="font-roboto tracking-robotics text-secondary text-center uppercase"
								>Active Mission</span
							>
						</p>
						<ArrowLink
							to="https://www.washington.edu/giving/make-a-gift/"
							class="text-secondary mt-4 text-2xl font-bold"
							target="_blank"
							>CROWDFUNDING DONATION LINK</ArrowLink
						>
						<p class="text-secondary mt-4">
							Search for "UW Husky Robotics Team" at the link above to donate!
						</p>
					</div>
				</RoboticsContainer>
			</div>
		</section>
		<section class="bg-primary">
			<RoboticsContainer class="py-20">
				<div class="flex flex-col-reverse items-center gap-8 lg:flex-row">
					<div class="flex-1 space-y-4 text-lg text-neutral-200">
						<p>
							At Husky Robotics, we believe that the strongest engineers emerge from teams united by
							purpose. Our mission isn’t simply to compete in robotics:
							<strong
								>it’s to build a community where talented students collaborate, innovate, and grow
								together.</strong
							>
							Students join our team for the opportunity to learn from real experiences, solve
							complex problems, and meaningfully shape their careers.
						</p>
						<p>
							<strong
								>With more than 100+ engineers from mechanical, electrical, software, biochemistry,
								and business backgrounds, we operate as a student-led startup embedded within the
								University of Washington.</strong
							>
							Inspired by NASA’s Mars rovers and structured from the NASA Systems Engineering
							Handbook, we build advanced autonomous systems, simulating the pressures and demands
							of industry-level projects, while continuously pushing the boundaries of student
							innovation.
						</p>

						<p>
							Sponsors partner with us because they believe in supporting student innovation, want
							early access to top engineering talent, and can donate equipment and resources
							tax-free to a nonprofit cause they value. Companies also benefit through marketing and
							branding opportunities alongside one of UW’s largest and most respected engineering
							teams.
						</p>

						<p>
							<strong>When you support Husky Robotics, you invest in people.</strong> You help
							students build meaningful connections, access critical resources, and become the
							engineering leaders of tomorrow.
						</p>
						<p>
							<strong
								>Join us today. Fund innovation, build relationships, and shape the future of
								engineering.</strong
							>
						</p>
					</div>
					<div class="flex-1">
						<img
							src="~/assets/images/support.png"
							class="xl:px-8"
							alt="our rover pushing buttons"
						/>
					</div>
				</div>
			</RoboticsContainer>
		</section>
		<section>
			<RoboticsContainer class="space-y-8 py-20">
				<div>
					<h2 class="text-4xl font-bold">Corporate Engagement? Let Us Know.</h2>
				</div>
				<Transition @enter="transitionAlert">
					<div
						v-if="formSuccess"
						class="h-0 overflow-hidden"
					>
						<p
							class="border border-green-400 bg-green-50 px-4 py-2 font-medium text-green-800 lg:text-lg"
						>
							✅ Your message has been sent successfully. Thank you for reaching out!
						</p>
					</div>
				</Transition>
				<Transition @enter="transitionAlert">
					<div
						v-if="formError"
						class="h-0 overflow-hidden"
					>
						<p
							class="border border-red-400 bg-red-50 px-4 py-2 font-medium text-red-800 lg:text-lg"
						>
							❌ {{ formError }}
						</p>
					</div>
				</Transition>
				<form
					@submit.prevent="handleSubmit"
					class="flex flex-col space-y-4 md:space-y-8"
				>
					<div class="flex flex-col gap-4 md:gap-8 lg:flex-row">
						<div class="flex flex-1 flex-col justify-between space-y-4">
							<FormTextInput
								:disabled="loading"
								required
								name="Full Name"
								v-model="formData.name"
								v-model:error="errors.name"
								placeholder="Harry The Husky"
								:schema="OutreachFormSchema.shape.name"
								:maxlength="50"
							/>
							<FormTextInput
								:disabled="loading"
								required
								name="Company"
								v-model="formData.company"
								v-model:error="errors.company"
								placeholder="Husky Robotics"
								:schema="OutreachFormSchema.shape.company"
								:maxlength="50"
							/>
							<FormTextInput
								:disabled="loading"
								required
								name="Additional Notes?"
								v-model="formData.notes"
								v-model:error="errors.notes"
								placeholder="Thank you for working with us!"
								:schema="OutreachFormSchema.shape.notes"
								:maxlength="200"
							/>
						</div>
						<div class="flex flex-1 flex-col justify-between space-y-4">
							<FormTextInput
								:disabled="loading"
								required
								name="Email Address"
								v-model="formData.email"
								v-model:error="errors.email"
								placeholder="example@example.com"
								:schema="OutreachFormSchema.shape.email"
								:maxlength="50"
							/>
							<div class="flex flex-1 flex-col">
								<p class="label">Reason For Reach-out<sup class="text-red-500">*</sup></p>
								<div
									class="checkboxes flex flex-1 flex-col justify-between border-2 border-zinc-300 bg-neutral-100 p-2"
									:class="{ '!border-red-400': errors.checkboxes }"
								>
									<label
										><input
											:disabled="loading"
											type="checkbox"
											v-model="formData.sponsor"
											@change="validateCheckboxes"
										/>
										<span>Monetary Sponsorship (Tax Deductible)</span></label
									>
									<label
										><input
											:disabled="loading"
											type="checkbox"
											v-model="formData.donate"
											@change="validateCheckboxes"
										/>
										<span>Donate Equipment / Software</span></label
									>
									<label
										><input
											type="checkbox"
											:disabled="loading"
											v-model="formData.recruit"
											@change="validateCheckboxes"
										/>
										<span>Recruit Top University of Washington Talent</span></label
									>
									<label
										><input
											type="checkbox"
											:disabled="loading"
											v-model="formData.outreach"
											@change="validateCheckboxes"
										/>
										<span>Visibility & Public Outreach Opportunities</span></label
									>
									<label
										><input
											type="checkbox"
											:disabled="loading"
											v-model="formData.other"
											@change="validateCheckboxes"
										/>
										<span>Other or N/A (Fill out Additional Notes)</span></label
									>
								</div>
								<p class="pt-1 text-sm text-neutral-700">
									<span class="font-semibold text-red-500">{{
										errors.checkboxes || "\u00A0"
									}}</span>
								</p>
							</div>
						</div>
					</div>
					<div>
						<div
							class="cf-turnstile lg:w-[300px]"
							data-size="flexible"
							data-theme="light"
						></div>
						<p
							class="pt-1 text-sm text-neutral-700"
							v-if="errors.cftoken"
						>
							<span class="font-semibold text-red-500">{{ errors.cftoken }}</span>
						</p>
					</div>

					<button
						type="submit"
						:disabled="!canSubmit"
						class="bg-tertiary text-secondary hover:bg-tertiary/90 w-full cursor-pointer rounded-md px-10 py-3 font-bold transition-colors duration-200 ease-in-out disabled:cursor-not-allowed disabled:bg-zinc-300 lg:w-fit"
					>
						Submit
					</button>
				</form>
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
.text-input > label,
.label {
	@apply block pb-1 text-lg font-bold;
}
.checkboxes > label > span {
	@apply font-medium tracking-wide;
}
.checkboxes > label {
	@apply flex flex-row items-center space-x-4 text-sm md:text-base;
}
.checkboxes > label > input {
	@apply rounded-xs h-4 w-4 cursor-pointer appearance-none border-2 border-black;
	@apply transition-colors duration-200 ease-in-out;
	@apply checked:bg-black;
}
.checkboxes > label > input:disabled {
	@apply cursor-not-allowed border-zinc-300 bg-zinc-300;
}
</style>
