export const formatMoneyVND = (number: number): string => {
  return `${new Intl.NumberFormat('vi-VN', {}).format(number)}`;
};

export const UUIDNumber = (): number => {
  return parseInt(Date.now() + (Math.random() * 100000).toFixed(), 10);
};

export const formatCurrencyByLocale = (value, locale = 'VI') => {
  const unit = {
    VI: 'đ',
    EN: '$',
  };
  return Number(value).toLocaleString(locale).toString() + '' + unit[locale];
};
