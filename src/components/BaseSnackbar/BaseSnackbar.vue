<template>
	<v-snackbar
		data-testid="base-snackbar"
		v-model="display"
		:color="type"
		:timeout="-1"
		elevation="10"
	>
		<div class="flex">
			<v-icon :icon="getMessageIcon()" />
			<div class="mx-auto">{{ message }}</div>
		</div>
	</v-snackbar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSnackbarStore } from './store';

const { display, type, message } = storeToRefs(useSnackbarStore());

const getMessageIcon = () => {
	return {
		error: 'mdi-alert-circle',
		success: 'mdi-check-circle',
		info: 'mdi-information',
		warning: 'mdi-alert',
	}[type.value];
};
</script>
