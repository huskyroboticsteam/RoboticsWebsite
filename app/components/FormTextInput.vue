<script setup lang="ts">
import * as z from "zod";
import type { ModelRef } from "vue";

const props = defineProps({
	required: Boolean,
	name: {
		type: String,
		default: "Form Input"
	},
	maxlength: Number,
	schema: Object as () => z.ZodSchema<any>
});
const value: ModelRef<string | undefined> = defineModel<string>();
const error: ModelRef<string | undefined> = defineModel<string>("error");
const input = useTemplateRef("input");
defineOptions({ inheritAttrs: false });

watch(error, () => {
	input.value?.setCustomValidity(error.value || "");
});
onMounted(() => {
	input.value?.setCustomValidity(error.value || "");
});
function validate() {
	if (props.schema) {
		let result = props.schema.safeParse(value.value);
		if (!result.success) {
			if (result.error.issues[0]) {
				error.value = result.error.issues[0].message;
				console.log(result.error.issues[0]);
			}
		} else {
			error.value = "";
		}
	}
	return true;
}
</script>

<template>
	<div class="text-input">
		<label
			>{{ name
			}}<sup
				v-if="required"
				class="text-red-500"
				>*</sup
			></label
		>
		<input
			ref="input"
			v-bind="$attrs"
			v-model="value"
			:maxlength="maxlength"
			@focusout="validate"
		/>
		<p class="pt-1 text-sm text-neutral-700">
			<span
				v-if="error"
				class="font-semibold text-red-500"
				>{{ error }}</span
			>
			<span
				v-if="maxlength"
				class="float-right"
				>{{ value!.length }}/{{ maxlength }}</span
			>
		</p>
	</div>
</template>
<style scoped>
@reference "~/assets/css/main.css";

.text-input > input {
	@apply w-full border-2 border-zinc-300 bg-neutral-100 p-4;
	@apply transition-colors duration-200 ease-in-out;
}
.text-input > input:focus {
	@apply border-tertiary outline-none;
}
.text-input > input:disabled {
	@apply cursor-not-allowed bg-zinc-300;
}
.text-input > input:invalid {
	@apply border-red-400 outline-none;
}
.text-input > label,
.label {
	@apply block pb-1 text-lg font-bold;
}
</style>
