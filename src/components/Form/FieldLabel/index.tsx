import { Text } from 'native-base';
import React from 'react';

import { FieldLabelProps } from './type';

const FieldLabel = ({ label, isRequired }: FieldLabelProps) => {
  return (
    <>
      {label && (
        <Text className='text-[13.5px] font-nunito-700 text-gray-10 mr-1 mb-0.5'>
          {label}
          {isRequired && <Text className='font-nunito-700 text-danger'>*</Text>}
        </Text>
      )}
    </>
  );
};

export default FieldLabel;
