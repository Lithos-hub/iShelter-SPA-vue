import { useQuery } from 'vue-query';
import API from '@/services/config';
import { Animal } from '@/models';

export const useAnimalsQuery = () =>
	useQuery('animals', () => API.get<Animal[]>('/animals'));
