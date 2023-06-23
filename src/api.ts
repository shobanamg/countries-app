import { AxiosResponse } from 'axios';
import { QueryFunction, useQuery } from '@tanstack/react-query';
import { Country } from './types/country';
import api from './utils/axios-utils';

export const fetchAllCountries: QueryFunction<Country[]> = async () => {
  const response: AxiosResponse<Country[]> = await api.get('/all');
  return response.data;
};

export const fetchCountryByName: (name: string) => Promise<Country[]> = async (
  name: string
) => {
  const response: AxiosResponse<Country[]> = await api.get(`/name/${name}`);
  return response.data;
};

export const useAllCountries = () => {
  return useQuery<Country[]>(['countries'], fetchAllCountries);
};

export const useCountryByName = (name: string) => {
  return useQuery<Country[]>({
    queryKey: ['countries', name],
    queryFn: () => fetchCountryByName(name),
    enabled: !!name,
  });
};

export const useCountryByNameDetail = (name: string) => {
  return useQuery<Country[]>({
    queryKey: ['countryDetail', name],
    queryFn: () => fetchCountryByName(name),
    enabled: !!name,
  });
};
