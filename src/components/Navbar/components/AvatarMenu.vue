<template>
	<v-menu min-width="200px" rounded>
		<template v-slot:activator="{ props }">
			<v-btn icon v-bind="props">
				<v-avatar size="small">
					<v-img
						alt="Avatar"
						src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
					></v-img>
				</v-avatar>
			</v-btn>
		</template>
		<v-card>
			<v-card-text>
				<div class="mx-auto text-center">
					<v-avatar color="brown">
						<span class="text-h5">{{ user.initials }}</span>
					</v-avatar>
					<h3>{{ user.fullName }}</h3>
					<p class="text-caption mt-1">
						{{ user.email }}
					</p>
					<v-divider class="my-3"></v-divider>
					<v-btn rounded variant="text"> Edit Account </v-btn>
					<v-divider class="my-3"></v-divider>
					<v-btn rounded variant="text"> Disconnect </v-btn>
				</div>
			</v-card-text>
		</v-card>
	</v-menu>
</template>

<script setup lang="ts">
const user = {
	initials: 'JD',
	fullName: 'John Doe',
	email: 'john.doe@doe.com',
};
</script>

<style scoped></style>
