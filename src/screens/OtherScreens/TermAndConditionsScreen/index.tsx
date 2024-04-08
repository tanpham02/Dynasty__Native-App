import { Box, Divider } from 'native-base';

import { PrimaryLayout } from '@/components';
import { TermAndPolicyList } from './components';

const TermAndConditionsScreen = () => {
  return (
    <PrimaryLayout containerClass='bg-white' titleScreen='Điều khoản & điều kiện'>
      <Box className='flex-1'>
        <Divider className='mt-2 bg-zinc-300' />
        <TermAndPolicyList />
      </Box>
    </PrimaryLayout>
  );
};

export default TermAndConditionsScreen;
