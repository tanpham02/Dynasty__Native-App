import { Box } from 'native-base';

import { FaqList } from './components';
import { PrimaryLayout } from '@/layouts';

const FAQsScreen = () => {
  return (
    <PrimaryLayout containerClass='bg-white' titleScreen='Câu hỏi thường gặp'>
      <Box className='flex-1'>
        <FaqList />
      </Box>
    </PrimaryLayout>
  );
};

export default FAQsScreen;
