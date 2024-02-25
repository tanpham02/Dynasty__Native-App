import { HeaderBar, MyStatusBar } from '@/components';
import { useStatusBarForAndroid } from '@/hooks';
import styles from '@/styles';
import { heightScreen } from '@/utils';
import { Box, Divider, Image, ScrollView, Text } from 'native-base';
import React, { useRef, useState } from 'react';
import { Animated, SafeAreaView, TouchableOpacity } from 'react-native';
import ProductVariantTabList from './components/ProductVariantTabList';
import { SceneMap } from 'react-native-tab-view';
import ProductVariantTabItem from './components/ProductVariantTabItem';

const HEADER_MAX_HEIGHT = heightScreen * 0.4; // 40%
const HEADER_MIN_HEIGHT = heightScreen * 0.2; // 20%
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const ProductDetail = () => {
  useStatusBarForAndroid('white');
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const [showHeaderMain, setShowHeaderMain] = useState<boolean>(false);

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

  return (
    <>
      <MyStatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView className="flex-1 bg-white">
        <Box className="flex-1 relative">
          <Animated.ScrollView
            scrollEventThrottle={5}
            showsVerticalScrollIndicator={false}
            snapToAlignment="start"
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
              className="bg-third pb-4 flex flex-col px-4 relative"
            >
              <HeaderBar headerClass="absolute" />
              <Box style={{ width: 180, height: 180 }} className="mx-auto -my-[5%]">
                <Image
                  source={{
                    uri: 'https://thepizzacompany.vn/images/thumbs/000/0002252_garden-salad_300.png',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Box className="w-full">
                <Text className="text-gray-10 font-nunito-700 text-lg mb-1">Mỳ Ý Cay Hải Sản</Text>
                <Text className="text-gray-11 font-nunito-500 text-[13px]">
                  Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi | Mỳ Ý rán với các loại hải
                  sản tươi ngon cùng ớt và tỏi | Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và
                  tỏi | Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi | Mỳ Ý rán với các
                  loại hải sản tươi ngon cùng ớt và tỏi |
                </Text>
              </Box>
            </Animated.View>

            <Divider color="blue.200" />

            <ScrollView
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              scrollEnabled={!showHeaderMain ? false : true}
              className="px-4 bg-white py-2"
              style={{
                marginBottom: HEADER_MIN_HEIGHT / 2,
              }}
            >
              {[...new Array(10)].map((_, index) => (
                <Text key={index}>
                  {index + 1}. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type and scrambled
                  it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </Text>
              ))}
            </ScrollView>
          </Animated.ScrollView>

          {showHeaderMain && (
            <Animated.View
              className="bg-white absolute top-0 left-0 right-0 z-99999"
              style={[
                styles.shadowX,
                {
                  height: 'auto',
                },
              ]}
            >
              <HeaderBar title="Mỳ Ý Cay Hải Sản" />
            </Animated.View>
          )}

          <Box className="bg-white p-3 absolute left-0 right-0 bottom-0" style={styles.shadowX}>
            <TouchableOpacity className="w-full h-14 bg-secondary rounded-lg flex items-center justify-center">
              <Text className="text-white font-nunito-700 text-base text-center">
                Thêm giỏ hàng
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
