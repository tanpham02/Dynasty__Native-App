import { FlatList } from 'react-native';
import { StoreNearestYourLocationItem } from '..';
import { data } from './data';
import { StoreNearestYourLocationListProps } from './type';
import { Box } from 'native-base';
import { heightScreen } from '@/utils';

const StoreNearestYourLocationList = ({}: StoreNearestYourLocationListProps) => {
  return (
    <Box className='mt-3 max-h-[500px]'>
      <FlatList
        data={data}
        renderItem={({ index, item }) => <StoreNearestYourLocationItem key={index} {...item} />}
        keyExtractor={({ name }) => name}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        scrollEnabled={true}
        // snapToAlignment='center'
      />
    </Box>
  );
};

export default StoreNearestYourLocationList;
