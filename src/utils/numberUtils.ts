export const formatMoneyVND = (number: number): string => {
  return `${new Intl.NumberFormat('vi-VN', {}).format(number)}`;
};

export const UUIDNumber = (): number => {
  return parseInt(Date.now() + (Math.random() * 100000).toFixed(), 10);
};
