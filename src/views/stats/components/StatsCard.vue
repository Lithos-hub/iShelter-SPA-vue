<template>
	<v-card
		data-testid="stats-card"
		class="col-span-4 rounded-xl pa-5"
		title="Entrada de animales ⤵ "
		elevation="0"
	>
		<v-card-text class="mt-5">
			<div class="flex mx-auto justify-between">
				<div>
					<strong>Mes anterior</strong>
					<div class="flex">
						<h2 class="block text-5xl font-bold">32</h2>
					</div>
				</div>
				<div>
					<strong>Mes actual</strong>
					<div class="flex">
						<h2 class="block text-5xl text-ishelter-success font-bold">52</h2>
						<v-icon
							icon="mdi-menu-up"
							class="text-ishelter-success"
							:size="50"
						></v-icon>
					</div>
				</div>
			</div>
		</v-card-text>
	</v-card>
</template>
