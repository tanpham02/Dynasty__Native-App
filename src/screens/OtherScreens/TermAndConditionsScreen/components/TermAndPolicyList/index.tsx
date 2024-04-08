import { Box, FlatList } from 'native-base';
import { useMemo } from 'react';

import { ExpandItem, RefreshControl } from '@/components';
import { useFetchTermsAndPolicies } from '@/hooks';

const TermAndPolicyList = () => {
  const { data: termAndPolicies, isRefetching, isFetching, refetch } = useFetchTermsAndPolicies();

  const termAndPoliciesData = useMemo(
    () => [
      { label: 'Chính sách vận chuyển', value: termAndPolicies?.deliveryPolicy },
      { label: 'Chính sách riêng tư', value: termAndPolicies?.privatePolicy },
      { label: 'Điều khoản và điều kiện', value: termAndPolicies?.termAndCondition },
    ],
    [termAndPolicies],
  );

  return (
    <Box className='flex-1 bg-white'>
      <FlatList
        data={termAndPoliciesData}
        scrollEventThrottle={16}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ExpandItem {...item} isLoading={isFetching} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </Box>
  );
};

export default TermAndPolicyList;
