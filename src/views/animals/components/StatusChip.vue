<template>
	<div
		data-testid="status-chip"
		class="p-2 text-center rounded-bl-xl"
		:class="statusColor()"
	>
		<p class="text-sm mx-auto">{{ animalStatus }}</p>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	animalStatus: string;
}>();

const statusColor = () => {
	const options = {
		adopted: 'text-green-700 bg-emerald-300 font-bold border border-green-500',
		adoptable: 'text-blue-700 bg-sky-300 font-bold border border-blue-500',
		quarantine:
			'text-indigo-700 bg-purple-300 font-bold border border-indigo-500',
	};

	return options[props.animalStatus as keyof typeof options];
};
</script>

<style scoped></style>
