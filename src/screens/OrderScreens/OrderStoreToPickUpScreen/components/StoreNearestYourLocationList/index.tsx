import { Box } from 'native-base';
import { ScrollView } from 'react-native';

import { FormRadio } from '@/components/Form/Controller';
import { OrderModel } from '@/models';
import { StoreNearestYourLocationItem } from '..';
import { data } from './data';
import { StoreNearestYourLocationListProps } from './type';

const StoreNearestYourLocationList = ({}: StoreNearestYourLocationListProps) => {
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} scrollEventThrottle={16} className='flex-1'>
      <Box className='mt-6 w-full flex-1'>
        <FormRadio<OrderModel> name='orderAtStore' fieldName='orderAtStore'>
          {data.map((item, index) => (
            <StoreNearestYourLocationItem key={index} {...item} />
          ))}
        </FormRadio>
      </Box>
    </ScrollView>
  );
};

export default StoreNearestYourLocationList;
