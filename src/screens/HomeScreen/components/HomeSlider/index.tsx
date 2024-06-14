import { Skeleton } from 'native-base';
import { memo, useRef, useState } from 'react';
import { FlatList, LayoutRectangle, NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native';

import styles from '@/styles';
import HomeSliderImage from '../HomeSliderImage';
import { HomeSliderProps } from './type';
import { widthScreen } from '@/utils';

const HomeSlider = ({ data, isLoading }: HomeSliderProps) => {
  const flatListRef = useRef<FlatList>();
  const [layoutInfo, setLayoutInfo] = useState({});
  const currentSlide = useRef<number>(0);
  const prevOffsetX = useRef<number>(0);

  const setFlatListItemLayout = (index: number, layout: LayoutRectangle) => {
    setLayoutInfo((prevState) => ({
      ...prevState,
      [index]: layout,
    }));
  };

  const handleScrollFlatListEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffSetX = event.nativeEvent.contentOffset?.x + widthScreen * 0.2 - 12;
    const direction =
      currentOffSetX > (layoutInfo[currentSlide.current]?.x + layoutInfo[currentSlide.current]?.width) / 2
        ? 'right'
        : 'left';
    prevOffsetX.current = currentOffSetX;
    let currentIndex = Math.max(
      0,
      direction === 'right'
        ? currentSlide.current !== data.length - 1
          ? currentSlide.current + 1
          : currentSlide.current
        : currentSlide.current - 1,
    );

    flatListRef.current.scrollToIndex({
      index: currentIndex,
      viewPosition: 0.5,
    });

    currentSlide.current = currentIndex;
  };

  return (
    <View className='mt-6 ml-2'>
      {isLoading ? (
        <FlatList
          horizontal
          data={Array.from({ length: 3 }).fill({})}
          snapToAlignment='start'
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
          ref={flatListRef}
          horizontal
          data={data}
          snapToAlignment='start'
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HomeSliderImage index={index} setFlatListItemLayout={setFlatListItemLayout} item={item} />
          )}
          keyExtractor={(_, index) => index.toString()}
          onScrollEndDrag={handleScrollFlatListEndDrag}
        />
      )}
    </View>
  );
};

export default memo(HomeSlider);
