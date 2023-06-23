import React from 'react';
import { Country } from '../../types/country';
import CountryCard from './CountryCard';
import { useCountryContext } from '../../context/CountryContext';
import Loader from '../loader/Loader';
import ErrorMessage from '../error/ErrorMessage';

const Countries: React.FC = () => {
  const { countriesData, isLoading, isError, error } = useCountryContext();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="py-2 px-5">
      <ul className="flex flex-wrap md:-mx-11 md:space-x-12 2xl:space-x-11">
        {!!countriesData &&
          countriesData.map((country: Country, i) => (
            <li
              key={country.name.common}
              className={`md:w-80 mx-auto sm:mx-0 mb-8 md:mb-12 ${
                i === 0 && 'md:ml-11'
              }`}
            >
              <CountryCard country={country} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
