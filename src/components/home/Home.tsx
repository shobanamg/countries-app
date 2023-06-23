import Search from '../search/Search';
import Countries from '../country/Countries';
import { CountryProvider } from '../../context/CountryContext';

const Home = () => {
  return (
    <CountryProvider>
      <Search />
      <Countries />
    </CountryProvider>
  );
};

export default Home;
