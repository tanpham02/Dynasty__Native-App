export const formatMoneyVND = (number: number): string => {
  return `${new Intl.NumberFormat('vi-VN', {}).format(number)}`;
};

export const UUIDNumber = (): number => {
  return parseInt(Date.now() + (Math.random() * 100000).toFixed(), 10);
};

export const formatCurrencyByLocale = (value, format = 'EN') => {
  const unit = '₫';
  return Number(value).toLocaleString(format).toString() + '' + unit;
};

export const pad = (n: number) => {
  return n < 10 ? '0' + n : n;
};
