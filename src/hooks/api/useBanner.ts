import { useQuery } from 'react-query';

import { QUERY_KEY } from '@/constants';
import { BannerModel } from '@/models';
import { BannerService } from '@/services';

export const useFetchAllBanner = () => {
  return useQuery<BannerModel[], Error>({
    queryKey: [QUERY_KEY.ALL_BANNER],
    queryFn: BannerService.getAllBanners,
  });
};
