import { Link } from 'react-router-dom';
import { FC } from 'react';
import InfoField from './InfoField';
import { Country } from '../../types/country';
import formatPopulation from '../../utils/formatPopulation';

interface CountryProps {
  country: Country;
}
const CountryCard: FC<CountryProps> = ({ country }) => {
  const { name, flags, population, capital, region } = country;

  return (
    <Link
      to={`/countries-app/countries/${name.common}`}
      className="w-full h-48 md:h-40 overflow-hidden"
    >
      <div className="bg-white shadow-md rounded md:h-96 overflow-hidden transition-colors">
        <div className="w-full">
          <img
            src={flags.svg}
            alt={`Flag of ${name.common}`}
            className="object-center object-cover aspect-video"
          />
        </div>
        <div className="w-full p-8 md:p-4">
          <h2 className="font-bold mb-2 truncate overflow-hidden text-lg">
            {name.common}
          </h2>
          <div className="md:text-sm space-y-1">
            <InfoField
              fieldName="Population:"
              fieldValue={formatPopulation(population)}
            />
            <InfoField fieldName="Region:" fieldValue={region} />
            {!!capital && (
              <InfoField fieldName="Capital:" fieldValue={capital.join(', ')} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CountryCard;
