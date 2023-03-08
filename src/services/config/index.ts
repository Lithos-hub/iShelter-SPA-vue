import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: `${import.meta.env.VITE_API_URL}/api/v1/`,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	get instance() {
		return this.api;
	}

	public async get<T>(url: string, params?: any): Promise<AxiosResponse<T>> {
		const response: AxiosResponse<T> = await this.api.get(url, { params });
		return this.handleResponse<T>(response);
	}

	public async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
		const response: AxiosResponse<T> = await this.api.post(url, data);
		return this.handleResponse<T>(response);
	}

	public async put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
		const response: AxiosResponse<T> = await this.api.put(url, data);
		return this.handleResponse<T>(response);
	}

	public async delete<T>(url: string): Promise<AxiosResponse<T>> {
		const response: AxiosResponse<T> = await this.api.delete(url);
		return this.handleResponse<T>(response);
	}

	private handleResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
		return {
			data: response.data,
			status: response.status,
			statusText: response.statusText,
			headers: response.headers,
			config: response.config,
		};
	}

	public setAuthorization() {
		const token = localStorage.getItem('token');
		if (token) {
			this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
		} else {
			this.removeAuthorization();
		}
	}

	public removeAuthorization() {
		if (this.api.defaults.headers.common?.Authorization) {
			delete this.api.defaults.headers.common?.Authorization;
		}
	}

	// HEADER WHEN UPLOADING FILES
	public setFormHeader() {
		this.api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
		this.api.defaults.headers.post.Accept = 'multipart/form-data';
	}

	// HEADER WHEN ANY OTHERS REQUESTS
	public setJsonHeader() {
		this.api.defaults.headers.post['Content-Type'] = 'application/json';
		this.api.defaults.headers.post.Accept = 'application/json';
	}
}

export default new Api();
