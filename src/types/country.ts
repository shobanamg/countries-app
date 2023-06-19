export type Country = {
  capital: string[];
  flags: {
    svg: string;
    png: string;
  };
  languages: object;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  name: {
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
    common: string;
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  borders: string[];
};
