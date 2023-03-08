import { AxiosError, AxiosResponse } from 'axios';

import API from './index';

// Interceptor de petición
API.instance.interceptors.request.use(
	config => {
		// Agregar el token de autenticación a la cabecera de la petición
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

// Interceptor de respuesta
API.instance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response.data;
	},
	(error: AxiosError) => {
		if (error.response?.status === 401) {
			// Redirigir al usuario a la página de inicio de sesión si no está autenticado
			window.location.href = '/login';
		}
		return Promise.reject(error);
	}
);
