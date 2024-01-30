interface PathAndValue {
  path: string;
  value: string | null;
}

export const getPathAndValueFromURL = (url: string): PathAndValue => {
  const arr = url.split('/');
  let path = arr[2];
  let value = arr.length >= 4 ? arr[3] : null;
  return {
    path,
    value,
  };
};

export const getSearchParamFromURL = (
  url: string,
  param: string,
): string | null => {
  const include = url.includes(param);

  if (!include) {
    return null;
  }

  const params = url.split(/([?,=])/);
  const index = params.indexOf(param);
  const value = params[index + 2];
  return value;
};
