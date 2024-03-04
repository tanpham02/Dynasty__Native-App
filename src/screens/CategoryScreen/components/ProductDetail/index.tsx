import { HeaderBar, MyStatusBar } from '@/components';
import { useStatusBarForAndroid } from '@/hooks';
import { default as styleCustom } from '@/styles';
import { heightScreen } from '@/utils';
import { Box, Divider, Image, ScrollView, Text } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
<<<<<<< HEAD
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  SectionList,
  Pressable,
} from 'react-native';
=======
import { Animated, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, SectionList } from 'react-native';
>>>>>>> e6c2258902c95bcdc624e298402fcbe5fce1896a
import ProductVariantTabList from './components/ProductVariantTabList';

const HEADER_MAX_HEIGHT = heightScreen * 0.36; // 36%
const HEADER_MIN_HEIGHT = heightScreen * 0.2; // 20%
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const ProductDetail = () => {
  useStatusBarForAndroid('white');
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const [showHeaderMain, setShowHeaderMain] = useState<boolean>(false);
  const [activeTabKey, setActiveTabKey] = useState<number>(0);
  const sectionListRef = useRef<SectionList>();

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

  //   useEffect(() => {
  //     handleScrollToCurrentSectionList(activeTabKey);
  //   }, [activeTabKey]);

  const onScrollHeader = (scrollYValue: number) => {
    if (scrollYValue >= SCROLL_DISTANCE) {
      setShowHeaderMain(true);
    } else {
      setShowHeaderMain(false);
    }
  };

  const handleScrollToCurrentSectionList = (index: number) => {
    console.log('🚀 ~ handleScrollToCurrentSectionList ~ index:', index);
    setActiveTabKey(index);
    sectionListRef.current?.scrollToLocation({
      sectionIndex: index,
      itemIndex: 1,
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
              <ProductVariantTabList activeTabKey={activeTabKey} setActiveTabKey={handleScrollToCurrentSectionList} />
            </Animated.View>
          )}
          <Animated.ScrollView
            scrollEventThrottle={5}
            showsVerticalScrollIndicator={false}
            snapToAlignment='start'
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
              }}
              className='bg-third pb-4 flex flex-col px-4 relative border-b border-dashed border-zinc-300'
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
                <Pressable className='bg-primary' onPress={() => handleScrollToCurrentSectionList(3)}>
                  <Text>SCroll</Text>
                </Pressable>
                <Text className='text-gray-11 font-nunito-500 text-[13px]'>
                  Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi | Mỳ Ý rán với các loại hải sản tươi ngon cùng
                  ớt và tỏi | Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi | Mỳ Ý rán với các loại hải sản
                  tươi ngon cùng ớt và tỏi | Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi |
                </Text>
              </Box>
            </Animated.View>

            {/* <Divider color="blue.200" /> */}

            {/* <SectionList
              style={{
                marginBottom: HEADER_MIN_HEIGHT / 2,
              }}
              ref={sectionListRef}
              scrollEventThrottle={16}
              className={`px-4 bg-white py-2 `}
              sections={DATA}
              keyExtractor={(_, index) => `${index}`}
              renderItem={({ item }) => (
                <View>
                  <Text>{item}</Text>
                </View>
              )}
              onScrollToIndexFailed={({ index }) => {
                const wait = new Promise((resolve) => setTimeout(resolve, 500));
                wait.then(() => {
                  sectionListRef.current.scrollToLocation({
                    sectionIndex: index,
                    itemIndex: activeTabKey,
                    viewPosition: 0,
                  });
                });
              }}
              renderSectionHeader={({ section: { title } }) => <Text className='pt-4'>{title}</Text>}
              stickySectionHeadersEnabled
            /> */}
          </Animated.ScrollView>
          <SectionList
            style={{
              marginBottom: HEADER_MIN_HEIGHT / 2,
            }}
            ref={sectionListRef}
            scrollEventThrottle={16}
            initialNumToRender={10}
            className={`px-4 bg-white py-2 `}
            sections={DATA}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View className='h-36 bg-primary'>
                <Text>{item}</Text>
              </View>
            )}
            onScrollToIndexFailed={() => {
              const wait = new Promise((resolve) => setTimeout(resolve, 500));
              wait.then(() => {
                sectionListRef.current.scrollToLocation({
                  sectionIndex: activeTabKey,
                  itemIndex: 1,
                });
              });
            }}
            renderSectionHeader={({ section: { title } }) => <Text className='pt-4 text-xl'>{title}</Text>}
            //   stickySectionHeadersEnabled
          />

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
