import { FieldLabelProps } from '@/types';
import { Text } from 'native-base';

const FieldLabel = ({ label, isRequired }: FieldLabelProps) => {
  return (
    <>
      {label && (
        <Text className='text-[13.5px] font-nunito-700 text-gray-10 mr-1 mb-[2px]'>
          {label}
          {isRequired && <Text className='font-nunito-700 text-danger'> *</Text>}
        </Text>
      )}
    </>
  );
};

export default FieldLabel;
