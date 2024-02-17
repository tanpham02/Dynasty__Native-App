import { Box, Divider, FlatList, Text } from 'native-base';
import { useEffect } from 'react';

import { GlobalLoading, PrimaryLayout, ScrollView, ExpandItem } from '@/components';

const datas = [
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
  {
    label: 'Câu hỏi 1',
    value:
      'This is done in an optimized way that is faster than calling setState and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread.',
  },
];

const TermAndConditionsScreen = () => {
  useEffect(() => {
    GlobalLoading.show();

    const timer = setTimeout(() => {
      GlobalLoading.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PrimaryLayout
      containerClass="bg-third"
      headerBarClass="flex-col items-start"
      renderTitle={() => (
        <Text className="font-nunito-700 text-2xl pt-1 px-4">Điều khoản & điều kiện</Text>
      )}
    >
      <Box className="flex-1">
        <Divider className="mt-2 bg-zinc-300" />
        <Box className="flex-1 bg-white">
          <FlatList
            data={datas}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ExpandItem {...item} />}
            keyExtractor={(_, index) => index.toString()}
          />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default TermAndConditionsScreen;
