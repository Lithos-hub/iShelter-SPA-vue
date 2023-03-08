<template>
	<v-btn
		color="primary"
		class="text-none"
		@click="$emit('on-click')"
		v-bind="$attrs"
	>
		{{ title }}
	</v-btn>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
}>();

defineEmits(['on-click']);
</script>

<style scoped></style>
