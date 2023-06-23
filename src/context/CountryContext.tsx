import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Country } from '../types/country';
import { useAllCountries, useCountryByName } from '../api';

interface CountryContextValue {
  countriesData: Country[] | undefined;
  handleSearch: (value: string) => void;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  searchQuery: string | undefined;
}
const CountryContext = createContext<CountryContextValue | undefined>(
  undefined
);

export const CountryProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const allCountriesQuery = useAllCountries();
  const {
    data: allCountries,
    isLoading: allCountriesLoading,
    isError: allCountriesIsError,
    error: allCountriesError,
  } = allCountriesQuery;

  const [searchQuery, setSearchQuery] = useState<undefined | string>(undefined);
  const countryByNameQuery = useCountryByName(searchQuery);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const {
    data: countryByNameData,
    isLoading: countryLoading,
    isFetching: countryIsFetching,
    isError: countryIsError,
    error: countryError,
  } = countryByNameQuery;

  useEffect(() => {
    if (allCountries) {
      setCountriesData(allCountries);
    }
  }, [allCountries]);

  useEffect(() => {
    if (countryByNameData) {
      setCountriesData(countryByNameData);
    }
  }, [countryByNameData]);

  const isLoading =
    allCountriesLoading || (countryIsFetching && countryLoading);
  const isError = allCountriesIsError || countryIsError;
  const error = allCountriesError || countryError;

  const contextValue = useMemo(
    () => ({
      countriesData,
      handleSearch,
      isLoading,
      isError,
      error,
      searchQuery,
    }),
    [countriesData, isLoading, isError, error, searchQuery]
  );
  return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};
