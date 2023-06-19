import { AxiosResponse } from 'axios';
import { useQuery, QueryFunction } from 'react-query';
import { Country } from './types/country';
import api from './utils/axios-utils';

export const fetchAllCountries: QueryFunction<Country[]> = async () => {
  const response: AxiosResponse<Country[]> = await api.get('/all');
  return response.data;
};

export const useAllCountries = () => {
  return useQuery<Country[]>('countries', fetchAllCountries);
};
