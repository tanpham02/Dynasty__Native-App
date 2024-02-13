import { Box, Text } from 'native-base';

import { GlobalLoading, PrimaryLayout, ScrollView } from '@/components';
import { ExpandItem } from './components';
import { useEffect } from 'react';

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
    <PrimaryLayout containerClass="bg-third">
      <Box className="flex-1">
        <Text className="font-nunito-700 text-2xl px-3">Điều khoản & điều kiện</Text>
        <ScrollView>
          {datas.map((data, index) => (
            <ExpandItem key={index} {...data} />
          ))}
        </ScrollView>
      </Box>
    </PrimaryLayout>
  );
};

export default TermAndConditionsScreen;
