// Utilities
import { defineStore } from 'pinia';
import { UserStoreState } from './interfaces/User';

export const useUserStore = defineStore('user', {
	state: (): UserStoreState => ({
		user: {
			name: 'Jane',
			lastName: 'Doe',
			email: 'jane.doe@example.com',
		},
	}),
	actions: {
		logout() {
			console.log('Logout');
		},
	},
});
