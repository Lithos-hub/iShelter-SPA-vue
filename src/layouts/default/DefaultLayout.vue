<template>
	<v-card>
		<v-layout>
			<base-navbar />
			<secondary-navbar />
			<v-main class="h-screen bg-slate-100">
				<div class="my-10 mx-[15vw]">
					<router-view />
				</div>
			</v-main>
		</v-layout>
	</v-card>
</template>

<script lang="ts" setup>
import BaseNavbar from '@/components/Navbar/BaseNavbar.vue';
import SecondaryNavbar from '@/components/Navbar/SecondaryNavbar.vue';
</script>
