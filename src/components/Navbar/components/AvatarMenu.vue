<template>
	<v-menu min-width="200px" rounded>
		<template v-slot:activator="{ props }">
			<v-btn icon v-bind="props">
				<v-avatar size="small">
					<v-img
						alt="Avatar"
						src="https://this-person-does-not-exist.com/img/avatar-11326f146110d286731a8bc4b9b072f4.jpg"
					></v-img>
				</v-avatar>
			</v-btn>
		</template>
		<v-card>
			<v-card-text>
				<div class="mx-auto text-center">
					<v-avatar color="brown">
						<span class="text-h5">{{ user.name[0] + user.lastName[0] }}</span>
					</v-avatar>
					<h3>{{ user.name }}</h3>
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
import { useUserStore } from '@/store/user';

const { user } = useUserStore();
</script>
