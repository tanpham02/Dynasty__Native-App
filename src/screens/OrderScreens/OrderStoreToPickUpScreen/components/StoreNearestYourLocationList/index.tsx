import { FlatList, ScrollView } from 'react-native';
import { StoreNearestYourLocationItem } from '..';
import { data } from './data';
import { StoreNearestYourLocationListProps } from './type';
import { Box, HStack } from 'native-base';
import { heightScreen } from '@/utils';
import { FormRadio } from '@/components/Form/Controller';
import { OrderModel } from '@/models';

const StoreNearestYourLocationList = ({}: StoreNearestYourLocationListProps) => {
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
      <Box className='mt-4 w-full flex-1'>
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
