<template>
	<v-app-bar density="compact" color="primary" flat class="text-white px-10">
		<h1 class="font-bold">iShelter</h1>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-message</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-bell</v-icon>
		</v-btn>

		<base-avatar-menu />
	</v-app-bar>
</template>

<script lang="ts" setup>
import BaseAvatarMenu from '@/components/Navbar/components/AvatarMenu.vue';
</script>
