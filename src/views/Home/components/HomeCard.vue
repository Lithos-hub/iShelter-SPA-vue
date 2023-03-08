<template>
	<card-layout>
		<v-card
			data-testid="home-card"
			class="rounded-xl pa-5 text-center"
			:title="title"
			elevation="0"
		>
			<v-card-text class="mt-5">
				<h1 class="text-7xl" :class="color">
					{{ value }}
				</h1>
			</v-card-text>
		</v-card>
	</card-layout>
</template>

<script setup lang="ts">
import CardLayout from '@/components/CardLayout/CardLayout.vue';

interface Props {
	title: string;
	color: string;
	value: number;
}

defineProps<Props>();
</script>

<style scoped></style>
