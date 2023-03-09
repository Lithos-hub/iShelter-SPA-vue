<template>
	<div class="flex gap-0 relative w-full h-full">
		<v-icon
			icon="mdi-magnify"
			size="30"
			class="px-8 bg-primary-1 py-7 rounded-l-full text-white"
		/>
		<v-text-field
			color="primary"
			v-bind="$attrs"
			class="filled-input"
		></v-text-field>
	</div>
</template>

<script setup lang="ts"></script>

<style>
.v-field__field {
	@apply bg-white border-r border-t;
}
</style>
