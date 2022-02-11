export const convertToDate = (locale, value) => {
  const format = {
    timeZone: 'America/Santiago',
  };
  return new Intl.DateTimeFormat(locale, format).format(new Date(value));
};

export const convertToNumber = (locale, value) => {
  const format = {
    style: 'currency',
    currency: 'CLP',
  };
  return new Intl.NumberFormat(locale, format).format(`${value}`.toString());
};
