import { Box, Divider, FlatList, Text } from 'native-base';
import { useMemo } from 'react';

import { ExpandItem, PrimaryLayout, RefreshControl } from '@/components';
import { useFetchTermsAndPolicies } from '@/hooks';

const TermAndConditionsScreen = () => {
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
    <PrimaryLayout
      containerClass='bg-third'
      headerBarClass='flex-col items-start'
      renderTitle={() => <Text className='font-nunito-700 text-2xl pt-1 px-4'>Điều khoản & điều kiện</Text>}
    >
      <Box className='flex-1'>
        <Divider className='mt-2 bg-zinc-300' />
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
      </Box>
    </PrimaryLayout>
  );
};

export default TermAndConditionsScreen;
