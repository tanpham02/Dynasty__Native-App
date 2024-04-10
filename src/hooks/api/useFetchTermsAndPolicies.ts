import { useQuery } from 'react-query';

import { QUERY_KEY } from '@/constants';
import { TermAndPolicyService } from '@/services';
import { TermAndPolicyModel } from '@/models';

export const useFetchTermsAndPolicies = () => {
  return useQuery<TermAndPolicyModel, Error>({
    queryKey: [QUERY_KEY.TERMS_AND_POLICIES],
    queryFn: TermAndPolicyService.getAll,
  });
};
