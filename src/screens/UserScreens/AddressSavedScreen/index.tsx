import { Box } from 'native-base';

import { PATH_SCREEN } from '@/constants';
import { navigate } from '@/utils';
import { AddressList } from './components';
import { ButtonPrimary } from '@/components';
import { PrimaryLayout } from '@/layouts';

const AddressSavedScreen = () => {
  const createNewUserAddress = () => navigate(PATH_SCREEN.ADDRESS_UPDATE_SCREEN);

  return (
    <PrimaryLayout titleScreen='Địa chỉ của tôi' containerClass='bg-white'>
      <Box className='flex-1'>
        <AddressList />
        <ButtonPrimary
          color='danger'
          title='Thêm địa chỉ'
          onPress={createNewUserAddress}
          containerClass='w-[90%] my-4 mx-auto'
        />
      </Box>
    </PrimaryLayout>
  );
};

export default AddressSavedScreen;
