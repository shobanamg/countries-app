const getCurrencies = (currencies: object): string => {
  return Object.values(currencies)
    .map((currency) => currency.name)
    .join('');
};

export default getCurrencies;
