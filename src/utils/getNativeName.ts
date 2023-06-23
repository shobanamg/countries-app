const getNativeName = (nativeName: object): string => {
  return Object.values(nativeName)[0].common;
};

export default getNativeName;
