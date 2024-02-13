import { JwtPayload, jwtDecode } from 'jwt-decode';

export const checkTokenExp = (token: string): boolean => {
  let date = new Date().getTime() / 1000;
  let expToken = jwtDecode<JwtPayload>(token).exp;
  if (expToken && expToken > date) {
    return true;
  }
  return false;
};
