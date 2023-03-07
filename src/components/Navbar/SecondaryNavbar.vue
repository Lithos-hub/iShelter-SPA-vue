<template>
	<v-app-bar density="compact" color="black" flat class="text-white px-10">
		<div class="flex gap-5 mx-auto">
			<NavigationMenu
				v-for="(item, i) of menuItems"
				:key="i"
				:menuItem="item"
			/>
		</div>
	</v-app-bar>
</template>

<script lang="ts" setup>
import NavigationMenu from '@/components/Navbar/components/NavigationMenu.vue';

const menuItems = [
	{
		title: 'Inicio',
		to: '/',
	},
	{
		title: 'Mi organización',
		to: '/organization',
		// items: [
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// ],
	},
	{
		title: 'Calendario',
		to: '/calendar',
		// items: [
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// ],
	},
	{
		title: 'Animales',
		to: '/animals',
		// items: [
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// ],
	},
	{
		title: 'Estadísticas',
		to: '/stats',
		// items: [
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// ],
	},
	{
		title: 'Solicitudes',
		to: '/applications',
		// items: [
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// ],
	},
	{
		title: 'Estado financiero',
		to: '/financial',
		// items: [
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// 	{
		// 		text: 'Item 1',
		// 		icon: 'mdi-star',
		// 		to: '/loquesea',
		// 	},
		// ],
	},
];
</script>
