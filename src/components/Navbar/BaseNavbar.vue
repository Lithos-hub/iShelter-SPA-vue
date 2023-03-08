<template>
	<v-app-bar density="compact" color="primary" flat class="text-white px-10">
		<router-link to="/" class="w-[110px]">
			<v-img
				src="src/assets/logo.png"
				max-height="50"
				max-width="110"
				contain
				class="bg-white p-2 rounded-xl"
			/>
		</router-link>

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
import BaseAvatarMenu from '@/components/AvatarMenu/AvatarMenu.vue';
</script>
