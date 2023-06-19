import React from 'react';
import { useAllCountries } from '../../api';
import { Country } from '../../types/country';
import CountryCard from './CountryCard';

const Countries: React.FC = () => {
  const { data, isLoading, isError } = useAllCountries();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching countries.</p>;
  }

  return (
    <div className="py-2 px-5">
      <h1>Countries List</h1>
      <ul className="flex flex-wrap md:-mx-11 md:space-x-12 2xl:space-x-11">
        {!!data &&
          data.map((country: Country, i) => (
            <li
              key={country.name.common}
              className={`md:w-80 mx-auto sm:mx-0 mb-8 md:mb-12 ${
                i === 0 && 'md:ml-11'
              }`}
            >
              <CountryCard
                name={country.name.common}
                population={country.population as string}
                capital={country.capital}
                region={country.region}
                flagSrc={country.flags.svg}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
