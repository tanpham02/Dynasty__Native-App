import { Box, FlatList } from 'native-base';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { ExpandItem } from '@/components';
import { StoreConfigModel } from '@/models';
import { RootState } from '@/redux';

const TermAndPolicyList = () => {
  const storeConfig = useSelector<RootState, StoreConfigModel>((state) => state.storeStore.storeConfig);

  const termAndPoliciesData = useMemo(
    () => [
      { label: 'Chính sách vận chuyển', value: storeConfig?.termAndPolicy?.deliveryPolicy },
      { label: 'Chính sách riêng tư', value: storeConfig?.termAndPolicy?.privatePolicy },
      { label: 'Điều khoản và điều kiện', value: storeConfig?.termAndPolicy?.termAndCondition },
    ],
    [storeConfig],
  );

  return (
    <Box className='flex-1 bg-white'>
      <FlatList
        data={termAndPoliciesData}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ExpandItem {...item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </Box>
  );
};

export default TermAndPolicyList;
