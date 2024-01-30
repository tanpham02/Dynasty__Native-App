export const convertMetToKm = (value?: number): string => {
  if (value && value > 0) {
    const result = value / 1000;
    if (result >= 1) {
      return `${result.toFixed(2)} km`;
    } else {
      return `${value.toFixed(2)} m`;
    }
  }
  return `0 m`;
};
