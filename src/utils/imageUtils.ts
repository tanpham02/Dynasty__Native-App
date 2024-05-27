import configEnv from '@/configs';

export const getFullImageUrl = (url?: string) => {
  return url?.startsWith('https://') || url?.startsWith('http://') ? url : `${configEnv.API_BASE_URL}${url}`;
};
