// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/default/DefaultLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/home/HomeView.vue'),
			},
			{
				path: '/organization',
				name: 'Organization',
				component: () =>
					import(
						/* webpackChunkName: "home" */ '@/views/organization/OrganizationView.vue'
					),
			},
			{
				path: '/calendar',
				name: 'Calendar',
				component: () =>
					import(
						/* webpackChunkName: "home" */ '@/views/calendar/CalendarView.vue'
					),
			},
			{
				path: '/animals',
				name: 'Animals',
				component: () =>
					import(
						/* webpackChunkName: "home" */ '@/views/animals/AnimalsView.vue'
					),
			},
			{
				path: '/stats',
				name: 'Stats',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/stats/StatsView.vue'),
			},
			{
				path: '/applications',
				name: 'Applications',
				component: () =>
					import(
						/* webpackChunkName: "home" */ '@/views/applications/ApplicationsView.vue'
					),
			},
			{
				path: '/financial',
				name: 'Financial',
				component: () =>
					import(
						/* webpackChunkName: "home" */ '@/views/financial/FinancialView.vue'
					),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
