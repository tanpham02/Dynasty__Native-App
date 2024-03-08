import { Box, Image, Text } from 'native-base';
import React, { useRef, useState } from 'react';
import { Animated, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import { HeaderBar, MyStatusBar } from '@/components';
import { useStatusBarForAndroid } from '@/hooks';
import { default as styleCustom } from '@/styles';
import { heightScreen } from '@/utils';

import ProductVariantContentItem from './components/ProductVariantContentItem';
import ProductVariantTabList from './components/ProductVariantTabList';

const HEADER_MAX_HEIGHT = heightScreen * 0.36; // 36%
const HEADER_MIN_HEIGHT = heightScreen * 0.2; // 20%
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const data = ['Kích thước', 'Đế', 'Nước sốt', 'Topping'];

const ProductDetail = () => {
  useStatusBarForAndroid('white');

  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>();
  const isScrolling = useRef<boolean>(false);

  const [showHeaderMain, setShowHeaderMain] = useState<boolean>(false);
  const [activeTabKey, setActiveTabKey] = useState<number>(0);
  const flatListItemLayout = useRef<{ current: { [key: string]: Object } }>();

  const animatedHeightHeader = scrollOffsetY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const animatedOpacity = scrollOffsetY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const onScrollHeader = (scrollYValue: number) => {
    if (scrollYValue >= SCROLL_DISTANCE) {
      setShowHeaderMain(true);
    } else {
      setShowHeaderMain(false);
    }
  };

  scrollOffsetY.addListener(({ value }) => {
    const scrollOffsetY = value + 130;
    const itemFrom = flatListItemLayout.current[activeTabKey]?.y;
    const itemTo = itemFrom + flatListItemLayout.current[activeTabKey]?.height;

    if (!isScrolling.current) {
      if (scrollOffsetY >= itemTo && activeTabKey < data.length - 1) {
        setActiveTabKey(activeTabKey + 1);
      } else if (scrollOffsetY < itemFrom && activeTabKey !== 0) {
        setActiveTabKey(activeTabKey - 1);
      }
    }
  });

  const handleScrollToCurrentSectionList = (index: number) => {
    const offsetY = flatListItemLayout.current[index]?.y;

    isScrolling.current = true;
    scrollRef.current?.scrollTo({
      x: 0,
      y: offsetY - 130,
      animated: true,
    });
  };

  return (
    <>
      <MyStatusBar backgroundColor='white' barStyle='dark-content' />
      <SafeAreaView className='flex-1 bg-white'>
        <Box className='flex-1 relative'>
          {showHeaderMain && (
            <Animated.View
              className='bg-white absolute top-0 left-0 right-0 z-99999'
              style={[
                styleCustom.shadowX,
                {
                  maxHeight: 130,
                },
              ]}
            >
              <HeaderBar title='Mỳ Ý Cay Hải Sản' headerClass='-mb-4' />
              <ProductVariantTabList
                activeTabKey={activeTabKey}
                setActiveTabKey={setActiveTabKey}
                handleScrollToCurrentSectionList={handleScrollToCurrentSectionList}
              />
            </Animated.View>
          )}

          <Animated.ScrollView
            className='mb-[90px]'
            scrollEventThrottle={5}
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            snapToAlignment='start'
            onScrollEndDrag={() => {
              isScrolling.current = false;
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: scrollOffsetY } },
                },
              ],
              {
                listener: (event: any) => {
                  onScrollHeader(event.nativeEvent.contentOffset.y);
                },
                useNativeDriver: false,
              },
            )}
          >
            <Animated.View
              style={{
                minHeight: typeof animatedHeightHeader === 'number' && Number(animatedHeightHeader),
                height: !showHeaderMain ? 'auto' : 0,
                opacity: animatedOpacity,
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: '#c6c6c6',
                margin: -1,
              }}
              className='bg-third pb-4 flex flex-col px-4 relative z-999999'
            >
              <HeaderBar headerClass='absolute' />
              <Box style={{ width: 180, height: 180 }} className='mx-auto -my-[5%]'>
                <Image
                  source={{
                    uri: 'https://thepizzacompany.vn/images/thumbs/000/0002252_garden-salad_300.png',
                  }}
                  alt=''
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Box className='w-full'>
                <Text className='text-gray-10 font-nunito-700 text-lg mb-1'>Mỳ Ý Cay Hải Sản</Text>
                <Text className='text-gray-11 font-nunito-500 text-[13px]' numberOfLines={2}>
                  Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi \\ Mỳ Ý rán với các loại hải sản tươi ngon cùng
                  ớt và tỏi \\ ớt và tỏi \\ ớt và tỏi \\ ớt và tỏi \\
                </Text>
              </Box>
            </Animated.View>

            {data.map((item, index) => (
              <ProductVariantContentItem
                key={index}
                title={item}
                itemIdex={index}
                flatListItemLayout={flatListItemLayout}
              />
            ))}
          </Animated.ScrollView>

          <Box className='bg-white p-3 absolute left-0 right-0 bottom-0' style={styleCustom.shadowX}>
            <TouchableOpacity className='w-full h-14 bg-secondary rounded-lg flex items-center justify-center'>
              <Text className='text-white font-nunito-700 text-base text-center'>Thêm giỏ hàng</Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
