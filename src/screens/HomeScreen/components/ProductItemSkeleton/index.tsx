import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';
import { Box, Skeleton } from 'native-base';
import { View } from 'react-native';

import styles from '@/styles';
import { widthScreen } from '@/utils';

const ProductItemSkeleton = () => {
  return (
    <Box style={styles.widthTwoPerFive} className='relative min-h-[280px]'>
      <Canvas
        style={{
          flex: 1,
          height: 280,
        }}
      >
        <RoundedRect x={10} y={10} r={8} height={230} width={widthScreen * 0.5 - 45} color='#f0f6fc'>
          <Shadow dx={10} dy={10} blur={10} color='#dfe6ee' />
          <Shadow dx={-10} dy={-10} blur={10} color='#f7f7f7' />
        </RoundedRect>
      </Canvas>
      <View className='absolute top-1 left-1 right-0 bottom-1'>
        <Box className='mr-3 rounded-lg p-2 mb-2 ml-1'>
          <Skeleton className='w-full h-full max-h-[150px] rounded-lg mt-1' />
          <Skeleton className='mt-2 h-3 rounded-lg' />
          <Skeleton className='mt-1 h-3 rounded-lg' />
          <View className='my-3 w-2/5 h-0.5 bg-secondary' />
          <Box className='flex-row justify-between'>
            <Skeleton className='h-3 rounded-lg w-2/5' />
            <Skeleton className='h-6 rounded w-2/5' />
          </Box>
        </Box>
      </View>
    </Box>
  );
};

export default ProductItemSkeleton;
