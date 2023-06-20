import InfoField from './InfoField';

interface CountryCardProps {
  name: string;
  capital: string[];
  region: string;
  population: string;
  flagSrc: string;
}

const CountryCard = ({
  name = '',
  capital = [],
  region = '',
  population = '',
  flagSrc = '',
}: CountryCardProps) => {
  return (
    <div className="bg-white shadow-md rounded md:h-96 overflow-hidden transition-colors">
      <div className="w-full">
        <img
          src={flagSrc}
          alt={`Flag of ${name}`}
          className="object-center object-cover aspect-video"
        />
      </div>
      <div className="w-full p-8 md:p-4">
        <h2 className="font-bold mb-2 truncate overflow-hidden text-lg">
          {name}
        </h2>
        <div className="md:text-sm space-y-1">
          <InfoField fieldName="Population:" fieldValue={population} />
          <InfoField fieldName="Region:" fieldValue={region} />
          <InfoField fieldName="Capital:" fieldValue={capital.join(', ')} />
        </div>
      </div>
    </div>
  );
};
export default CountryCard;
