<template>
	{{ emoji() }}
</template>

<script setup lang="ts">
const props = defineProps<{
	specie: string;
}>();

const emoji = () => {
	const options = {
		dog: '🐶',
		cat: '🐱',
	};

	return options[props.specie as keyof typeof options];
};
</script>

<style scoped></style>
