<template>
	<v-dialog
		v-model="dialog"
		fullscreen
		:scrim="false"
		transition="dialog-bottom-transition"
	>
		<v-card class="relative">
			<v-toolbar dark color="primary">
				<v-toolbar-title>{{ title }}</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon dark @click="$emit('minimize')">
					<v-icon>mdi-window-minimize</v-icon>
				</v-btn>
				<v-btn icon dark @click="$emit('close')">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-toolbar>
			<slot />
			<BaseButton
				title="Guardar"
				size="large"
				rounded="pill"
				class="ml-auto mt-auto m-5"
			/>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseButton from '../BaseButton/BaseButton.vue';

const props = defineProps<{
	open: boolean;
	title: string;
}>();

defineEmits(['close', 'minimize']);

const dialog = ref(false);

watch(
	() => props.open,
	value => (dialog.value = value)
);
</script>

<style scoped></style>
