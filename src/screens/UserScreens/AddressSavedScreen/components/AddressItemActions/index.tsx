import { HStack } from 'native-base';
import { memo } from 'react';

import { ButtonIcon } from '@/components';
import { AddressItemActionProps } from './type';

const AddressItemAction = ({ _id, onDelete, onUpdate }: AddressItemActionProps) => {
  return (
    <HStack space={2} className='items-center h-full justify-end flex-row w-[90%] mx-auto'>
      <ButtonIcon icon='Edit' onPress={onUpdate} />
      <ButtonIcon icon='TrashBin' color='danger' onPress={onDelete} />
    </HStack>
  );
};

export default memo(AddressItemAction);
