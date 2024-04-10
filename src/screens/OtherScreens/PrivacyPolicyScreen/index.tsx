import { Box, Divider, FlatList } from 'native-base';

import { ExpandItem, PrimaryLayout } from '@/components';
import { PrivacyPolicyList } from './components';

const data = [
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
];

const PrivacyPolicyScreen = () => {
  return (
    <PrimaryLayout containerClass='bg-white' titleScreen='Chính sách bảo mật'>
      <Box className='flex-1'>
        <Divider className='mt-2 bg-zinc-300' />
        <PrivacyPolicyList data={data} />
      </Box>
    </PrimaryLayout>
  );
};

export default PrivacyPolicyScreen;
