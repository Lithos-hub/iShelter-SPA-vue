<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Animales</h1>
		<base-button
			title="Añadir nuevo animal"
			rounded="pill"
			size="large"
			@click="dialog = !dialog"
		/>
		<full-screen-dialog
			:open="dialog"
			title="Añadir nuevo animal"
			@close="dialog = !dialog"
		>
			<v-row class="p-20">
				<v-col cols="8">
					<v-row>
						<v-col cols="6">
							<v-text-field
								variant="solo"
								color="primary"
								label="Especie"
								placholder="Especie del animal"
							></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-text-field
								variant="solo"
								color="primary"
								label="Raza"
								placholder="Raza del animal"
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<v-text-field
								variant="solo"
								color="primary"
								label="Nombre"
								placholder="Nombre del animal"
							></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-select
								variant="solo"
								color="primary"
								label="Estado"
								placholder="Estado del animal"
								menu-icon="mdi-chevron-down"
								:items="statusItems"
							></v-select>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="4">
					<div
						class="h-[200px] w-full border-dashed border-primary-1 border-2 rounded-xl flex items-center justify-center hover:bg-primary-1 hover:bg-opacity-10 cursor-pointer"
					>
						<strong class="mx-auto text-primary-1"
							>Selecciona o arrastra una imagen</strong
						>
					</div>
				</v-col>

				<v-col cols="4">
					<v-select
						variant="solo"
						color="primary"
						label="Sexo"
						placholder="Sexo del animal"
						menu-icon="mdi-chevron-down"
						:items="genderItems"
					></v-select>
				</v-col>
				<v-col cols="4">
					<v-text-field
						variant="solo"
						color="primary"
						label="Peso"
						type="number"
						placholder="Peso del animal"
					></v-text-field>
				</v-col>
				<v-col cols="4">
					<v-text-field
						variant="solo"
						color="primary"
						label="Tipo de acogida"
						placholder="Tipo del animal de acogida"
					></v-text-field>
				</v-col>
				<v-col cols="4">
					<v-text-field
						variant="solo"
						color="primary"
						label="Fecha de acogida"
						placholder="Fecha del animal de acogida"
					></v-text-field>
				</v-col>
				<v-col cols="4">
					<v-text-field
						variant="solo"
						color="primary"
						label="Motivo de acogida"
						placholder="Motivo del animal de acogida"
					></v-text-field>
				</v-col>
				<v-col cols="4">
					<v-text-field
						variant="solo"
						color="primary"
						label="Marca de microchip"
						placholder="Marca del animal de microchip"
					></v-text-field>
				</v-col>
				<v-col cols="4">
					<v-text-field
						variant="solo"
						color="primary"
						label="Número de microchip"
						placholder="Número del animal de microchip"
					></v-text-field>
				</v-col>
				<v-col cols="4">
					<v-text-field
						variant="solo"
						color="primary"
						label="Fecha de nacimiento"
						placholder="Fecha del animal de nacimiento"
					></v-text-field>
				</v-col>
			</v-row>
		</full-screen-dialog>
	</section>
	<section>
		<div class="flex gap-5">
			<div class="flex-auto">
				<SearchInput :is-loading="isLoading" label="Buscar animal" />
			</div>
		</div>
		<div class="flex justify-center gap-5">
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Especie"
					:items="specieItems"
					multiple
					menu-icon="mdi-chevron-down"
				></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Raza"
					:items="breedItems"
					multiple
					menu-icon="mdi-chevron-down"
				></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Sexo"
					:items="genderItems"
					multiple
					menu-icon="mdi-chevron-down"
				></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Estado"
					:items="statusItems"
					multiple
					menu-icon="mdi-chevron-down"
				></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Otros"
					:items="othersItems"
					multiple
					menu-icon="mdi-chevron-down"
				></v-autocomplete>
			</div>
		</div>
	</section>
	<section>
		<base-spinner v-if="isLoading" />
		<section v-else class="grid grid-cols-4 gap-10">
			<list-card
				v-for="(animal, i) of animalsData?.data"
				:key="i"
				:data="animal"
			/>
		</section>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAnimalsQuery } from '@/services/apis';

import {
	BaseButton,
	SearchInput,
	BaseSpinner,
	FullScreenDialog,
} from '@/components';

import ListCard from '@/views/animals/components/ListCard.vue';

const { data: animalsData, isLoading } = useAnimalsQuery();

const select = ref([]);
const dialog = ref(false);
const specieItems = ['Perros', 'Gatos'];
const breedItems = ['raza 1', 'raza 2', 'raza 3', 'raza 4'];
const statusItems = ['estado 1', 'estado 2', 'estado 3', 'estado 4'];
const genderItems = ['male', 'female'];
const othersItems = ['other 1', 'other 2', 'other 3', 'other 4'];
</script>
