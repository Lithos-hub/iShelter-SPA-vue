<template>
	<div class="grid grid-cols-12 gap-10">
		<v-card
			class="col-span-5 rounded-xl pa-5"
			title="Bienvenido {{ userName }}"
			elevation="0"
		>
			<v-card-text class="mt-5">
				<strong class="block">Tienes avisos importantes</strong>
				<v-btn class="text-none mt-5" color="primary">Ver avisos</v-btn>
			</v-card-text>
		</v-card>

		<v-card
			class="col-span-4 rounded-xl pa-5"
			title="Adopciones en el mes"
			elevation="0"
		>
			<v-card-title> </v-card-title>
			<v-card-text class="mt-5">
				<div class="flex mx-auto">
					<h2 class="block text-5xl text-green-500 font-bold">52</h2>
					<v-icon icon="mdi-menu-up" class="text-green-500" :size="50"></v-icon>
				</div>
			</v-card-text>
		</v-card>
		<v-card class="col-span-3 rounded-xl pa-5" title="Avisos" elevation="0">
			<v-card-text class="mt-5">
				<strong class="block">Tienes avisos importantes</strong>
				<v-btn class="text-none mt-5" color="primary">Ver avisos</v-btn>
			</v-card-text>
		</v-card>
	</div>
</template>

<script lang="ts" setup></script>
