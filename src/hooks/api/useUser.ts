import { QueryKey, UseQueryOptions, useQuery } from 'react-query';

import { QUERY_KEY } from '@/constants';
import { UserAddressResponse, UserModel } from '@/models';
import { UserService } from '@/services';

interface FetchUserParams {
  userId: string;
  options?: UseQueryOptions<UserModel, Error, UserModel, QueryKey>;
}

export const useFetchUserInfo = ({ userId, options }: FetchUserParams) => {
  return useQuery<UserModel, Error>({
    queryKey: [QUERY_KEY.USER, userId],
    queryFn: () => UserService.getInfoById(userId),
    ...options,
  });
};

export const useFetchUserAddress = () => {
  const userId = '6610186d6861b729f3d2ffc5';

  return useQuery<UserAddressResponse, Error>({
    queryKey: [QUERY_KEY.USER_ADDRESS, userId],
    queryFn: () => UserService.getSavedAddress(userId),
  });
};
