import { FC } from 'react';
import { useCountryContext } from '../../context/CountryContext';

const Search: FC = () => {
  const { handleSearch, searchQuery } = useCountryContext();

  return (
    <div
      className={`h-[60px] w-full sm:w-[350px] px-7 my-16 flex m-auto mt-8 gap-2 align-items items-center 
      shadow-md rounded-lg bg-white
      }`}
    >
      <input
        type="text"
        placeholder="Search for a country..."
        className={`w-full focus:outline-none 
          "bg-white"
        `}
        value={searchQuery}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
