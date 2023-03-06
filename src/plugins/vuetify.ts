/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

const myCustomLightTheme = {
	dark: false,
	colors: {
		background: '#FAFBFB',
		surface: '#FFFFFF',
		primary: '#FC4B6C',
		'primary-darken-1': '#3700B3',
		secondary: '#0f172a',
		'secondary-darken-1': '#018786',
		error: '#B00020',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
	},
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		defaultTheme: 'myCustomLightTheme',
		themes: {
			myCustomLightTheme,
		},
	},
});
