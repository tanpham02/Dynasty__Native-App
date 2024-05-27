import { Box, Skeleton } from 'native-base';

const HomeCategoryItemSkeleton = () => {
  return (
    <Box className='items-center w-1/3 mt-4 px-2'>
      <Skeleton size='22' className='rounded-full' />
      <Skeleton className='h-3.5 rounded-lg mt-4' />
    </Box>
  );
};

export default HomeCategoryItemSkeleton;
