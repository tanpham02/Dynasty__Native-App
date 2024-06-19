import styles from '@/styles';
import { Box, FlatList, Skeleton } from 'native-base';

const ProductItemSkeleton = () => {
  return (
    <Box className='pb-4 px-4 gap-y-3 mx-4 mt-4 bg-third rounded-lg' style={styles.shadowX}>
      <Box className='gap-y-2'>
        {[...new Array(2)].map((_, index) => (
          <Skeleton key={index} className='flex-1 w-full h-[22px]' />
        ))}
      </Box>
      <Box className='flex-row justify-between'>
        <Box className='flex-row gap-2'>
          {[...new Array(3)].map((_, index) => (
            <Skeleton key={index} className='w-5 h-5 rounded-full' />
          ))}
        </Box>
        <Skeleton className='w-5 h-5 rounded-full' />
      </Box>
      <Skeleton className='h-[120px] rounded-lg'></Skeleton>
      <Box className='flex-row gap-x-3 justify-between items-center'>
        <Box className='flex-1 gap-y-2'>
          <Skeleton className='w-1/2 h-[20px]' />
          <Skeleton className='w-1/3 h-[20px]' />
        </Box>
        <Skeleton className='w-[100px] rounded-lg' />
      </Box>
    </Box>
  );
};

const ProductListSkeleton = () => {
  return (
    <FlatList
      scrollEventThrottle={16}
      keyExtractor={(_, index) => index.toString()}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      data={Array(3).fill({})}
      renderItem={({ index }) => <ProductItemSkeleton key={index} />}
    />
  );
};

export default ProductListSkeleton;
