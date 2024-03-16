import { memo } from 'react';
import { FlatList, View } from 'react-native';

import HomeSliderImage from '../HomeSliderImage';
import { HomeSliderProps } from './type';
import { Skeleton } from 'native-base';
import styles from '@/styles';

const HomeSlider = ({ data, isLoading }: HomeSliderProps) => {
  return (
    <View className='mt-6 ml-2'>
      {isLoading ? (
        <FlatList
          horizontal
          pagingEnabled
          data={Array.from({ length: 3 }).fill({})}
          snapToAlignment='center'
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          renderItem={() => (
            <Skeleton
              style={[styles.heightOnePerFive, styles.widthFourPerFiveScreen]}
              className='rounded-lg m-1 mr-2'
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <FlatList
          horizontal
          pagingEnabled
          data={data}
          snapToAlignment='center'
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <HomeSliderImage uri={`https://dynasty-ws.vtaan.id.vn${item?.url}`} />}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default memo(HomeSlider);
