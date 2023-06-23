import { FC } from 'react';
import Search from '../search/Search';
import Countries from '../country/Countries';
import { CountryProvider } from '../../context/CountryContext';

const Home: FC = () => {
  return (
    <CountryProvider>
      <Search />
      <Countries />
    </CountryProvider>
  );
};

export default Home;
