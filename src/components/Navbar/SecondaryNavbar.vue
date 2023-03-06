<template>
	<v-app-bar density="compact" color="secondary" flat class="text-white px-10">
		<div class="flex gap-20 mx-auto">
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
		items: [
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
		],
	},
	{
		title: 'Organización',
		items: [
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
		],
	},
	{
		title: 'Calendario',
		items: [
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
		],
	},
	{
		title: 'Animales',
		items: [
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
		],
	},
	{
		title: 'Adopciones',
		items: [
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
		],
	},
	{
		title: 'Finanzas',
		items: [
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
			{
				text: 'Item 1',
				icon: 'mdi-star',
				to: '/loquesea',
			},
		],
	},
];
</script>
