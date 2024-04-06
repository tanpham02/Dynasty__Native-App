import { HStack } from 'native-base';
import { memo } from 'react';

import { ButtonIcon } from '@/components';
import { AddressItemActionProps } from './type';
import { navigate } from '@/utils';
import { PATH_SCREEN } from '@/constants';
import { useDeleteUserAddress } from '@/hooks';

const AddressItemAction = ({ _id, onDelete }: AddressItemActionProps) => {
  const onUpdateAddress = () => navigate(PATH_SCREEN.ADDRESS_UPDATE_SCREEN, { id: _id });

  return (
    <HStack space={2} className='items-center h-full justify-end flex-row w-[90%] mx-auto'>
      <ButtonIcon icon='Edit' onPress={onUpdateAddress} />
      <ButtonIcon icon='TrashBin' color='danger' onPress={onDelete} />
    </HStack>
  );
};

export default memo(AddressItemAction);
