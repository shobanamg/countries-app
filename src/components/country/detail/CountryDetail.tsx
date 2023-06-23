import { Link, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useCountryByNameDetail } from '../../../api';
import Loader from '../../loader/Loader';
import InfoField from '../InfoField';
import formatPopulation from '../../../utils/formatPopulation';
import getNativeName from '../../../utils/getNativeName';
import getCurrencies from '../../../utils/getCurrencies';
import getBorder from '../../../utils/getBorder';
import BackButton from '../../button/BackButton';
import ErrorMessage from '../../error/ErrorMessage';

const CountryDetail = () => {
  const { countryName } = useParams();
  const { data, isLoading, isError, error } = useCountryByNameDetail(
    countryName as string
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage error={error as AxiosError} />;
  }

  const {
    name,
    flags,
    population,
    capital,
    region,
    subregion,
    tld,
    languages,
    currencies,
    borders,
  } = !!data && data[0];

  return (
    <>
      <BackButton />
      <div className="flex flex-col md:flex-row md:justify-between mt-24">
        <div className="w-full md:w-1/3 xl:w-1/2 md:pr-5 xl:pr-20">
          <img
            src={flags.svg}
            alt={`Flag of ${name.common}`}
            className="object-center object-cover aspect-video"
          />
        </div>
        <div className="w-full py-4 md:py-0 xl:py-8 md:w-2/3 xl:w-1/2 md:pl-5 xl:pl-20">
          <h2 className="font-bold mb-2 truncate overflow-hidden text-xl md:text-2xl">
            {name.common}
          </h2>
          <div className="md:text-sm space-y-1 flex flex-col xl:flex-row">
            <div className=" space-y-1 xl:w-1/2">
              <InfoField
                fieldName="Native Name:"
                fieldValue={getNativeName(name.nativeName)}
              />

              <InfoField
                fieldName="Population:"
                fieldValue={formatPopulation(population)}
              />
              <InfoField fieldName="Region:" fieldValue={region} />
              <InfoField fieldName="Sub Region:" fieldValue={subregion} />
              <InfoField
                fieldName="Capital:"
                fieldValue={!!capital && capital.join(', ')}
              />
            </div>
            <div className=" space-y-1 xl:w-1/2">
              {!!tld && (
                <InfoField
                  fieldName="Top Level Domain:"
                  fieldValue={tld.join(', ')}
                />
              )}
              {!!currencies && (
                <InfoField
                  fieldName="Currencies:"
                  fieldValue={getCurrencies(currencies)}
                />
              )}

              {!!languages && (
                <InfoField
                  fieldName="Languages:"
                  fieldValue={Object.values(languages).join(', ')}
                />
              )}
            </div>
          </div>
          {!!borders && borders.length !== 0 && (
            <div className="mt-8 lg:mt-12 flex flex-col md:flex-row lg:space-x-2">
              <h3 className="font-bold text-lg md:text-sm md:font-semibold whitespace-nowrap md:mt-1.5">
                Border Countries:
              </h3>
              <ul className="flex flex-wrap pl-0 space-x-2 space-y-2 md:-mt-2">
                {borders.map((border: string, i) => {
                  return (
                    <li key={border} className={`${i === 0 && 'mt-2 md:ml-2'}`}>
                      <Link
                        to={`/countries-app/countries/${getBorder(border)}`}
                        className="bg-white  shadow-md flex items-center  h-10 md:h-8 px-6 md:px-8"
                      >
                        {getBorder(border)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
