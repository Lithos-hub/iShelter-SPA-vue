<template>
	<v-app>
		<v-main class="relative">
			<router-view />
		</v-main>
		<base-snackbar />
	</v-app>
</template>

<script setup lang="ts">
import BaseSnackbar from './components/BaseSnackbar/BaseSnackbar.vue';
</script>

<style lang="scss"></style>
