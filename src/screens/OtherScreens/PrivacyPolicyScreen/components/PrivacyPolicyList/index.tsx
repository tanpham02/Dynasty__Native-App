import { Box, FlatList } from 'native-base';

import { ExpandItem } from '@/components';
import { PrivacyPolicyListProps } from './type';

const PrivacyPolicyList = ({ data }: PrivacyPolicyListProps) => {
  return (
    <Box className='flex-1 bg-white'>
      <FlatList
        data={data}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ExpandItem {...item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </Box>
  );
};

export default PrivacyPolicyList;
