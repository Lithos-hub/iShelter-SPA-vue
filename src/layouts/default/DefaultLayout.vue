<template>
	<div>
		<v-layout class="relative">
			<base-navbar />
			<secondary-navbar />
			<v-main class="h-screen bg-slate-100">
				<div class="my-10 mx-[15vw]">
					<router-view />
				</div>
			</v-main>
			<div class="absolute bottom-5 right-5">
				<v-btn color="primary" icon size="60">
					<v-icon size="30" color="white" icon="mdi-message-text"></v-icon
				></v-btn>
			</div>
		</v-layout>
	</div>
</template>

<script lang="ts" setup>
import BaseNavbar from '@/components/Navbar/BaseNavbar.vue';
import SecondaryNavbar from '@/components/SecondaryNavbar/SecondaryNavbar.vue';
</script>
