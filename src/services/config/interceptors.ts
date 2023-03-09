import { useSnackbarStore } from '@/components/BaseSnackbar/store';
import { useUserStore } from '@/store/user';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// import { useErrorHandle } from '../utils';

export const requestInterceptor = (
	config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> => {
	// logic here
	return config;
};

export const requestErrorInterceptor = (
	error: any
): Promise<InternalAxiosRequestConfig<any>> => {
	// logic here
	return Promise.reject(error);
};

export const responseInterceptor = (
	response: AxiosResponse<any>
): AxiosResponse<any> => {
	// logic here
	return response;
};

export const responseErrorInterceptor = (
	error: any
): Promise<AxiosResponse<any>> => {
	const { showSnackbar } = useSnackbarStore();
	const { logout } = useUserStore();

	// showSnackbar('error', useErrorHandle(error as AxiosError));
	showSnackbar('error', error.message);
	switch (error.response?.status) {
		case 403:
			logout();
			return Promise.reject(error.message);
	}

	return Promise.reject(error);
};
