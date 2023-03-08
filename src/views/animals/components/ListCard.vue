<template>
	<card-layout class="hover:scale-105 duration-200">
		<v-card class="mx-auto rounded-xl border" max-width="400" elevation="0">
			<v-img class="align-end text-white" height="225" :src="data.image" cover>
				<v-card-title class="bg-primary-1 bg-opacity-80">{{
					data.name
				}}</v-card-title>
				<StatusChip
					class="absolute top-0 right-0 w-[100px]"
					:animal-status="data.status"
				/>
			</v-img>

			<v-card-text class="flex justify-between">
				<h2 class="text-4xl">
					<SpecieEmoji :specie="data.specie" />
				</h2>
				<div>
					<strong class="text-primary-1">Raza</strong>
					<p>{{ data.breed }}</p>
				</div>
			</v-card-text>

			<div class="flex justify-end m-2 gap-2">
				<base-button title="Eliminar" variant="outlined" rounded="pill" />
				<base-button title="Editar" rounded="pill" />
			</div>
		</v-card>
	</card-layout>
</template>

<script setup lang="ts">
import CardLayout from '@/components/CardLayout/CardLayout.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';

import StatusChip from '@/views/animals/components/StatusChip.vue';
import SpecieEmoji from '@/views/animals/components/SpecieEmoji.vue';

import { Animal } from '@/models';

interface Props {
	data: Animal;
}
defineProps<Props>();
</script>
