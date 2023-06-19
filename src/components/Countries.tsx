import React from 'react';
import { useAllCountries } from '../api';
import { Country } from '../types/country';

const Countries: React.FC = () => {
  const { data, isLoading, isError } = useAllCountries();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching countries.</p>;
  }

  return (
    <div>
      <h1>Countries List</h1>
      <ul>
        {!!data &&
          data.map((country: Country) => (
            <li key={country.name.official}>{country.name.official}</li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
