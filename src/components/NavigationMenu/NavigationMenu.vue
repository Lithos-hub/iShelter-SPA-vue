<template>
	<v-menu v-if="menuItem.items">
		<template v-slot:activator="{ props, isActive }">
			<v-btn
				v-bind="props"
				:append-icon="isActive ? 'mdi-chevron-up' : 'mdi-chevron-down'"
				class="text-none"
			>
				{{ menuItem.title }}
			</v-btn>
		</template>

		<v-list density="compact">
			<v-list-item
				v-for="(item, i) in menuItem.items"
				:key="i"
				:value="item"
				active-color="primary"
			>
				<template v-slot:prepend>
					<v-icon :icon="item.icon"></v-icon>
				</template>

				<v-list-item-title>{{ item.text }}</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
	<router-link
		v-else-if="menuItem.to"
		:to="menuItem.to"
		class="py-2 rounded-xl duration-200 w-[180px] text-center hover:text-primary-1"
		active-class="bg-primary-1 hover:text-white"
	>
		{{ menuItem.title }}
	</router-link>
</template>

<script setup lang="ts">
interface Menuitems {
	text: string;
	icon: string;
	to: string;
}

interface Props {
	title: string;
	to?: string;
	items?: Menuitems[];
}

defineProps<{
	menuItem: Props;
}>();
</script>

<style scoped></style>
