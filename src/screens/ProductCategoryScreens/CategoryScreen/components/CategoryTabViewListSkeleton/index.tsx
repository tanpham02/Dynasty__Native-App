import { Box, FlatList, ScrollView, Skeleton } from 'native-base';

const CategoryTabViewItemSkeleton = () => {
  return (
    <Box className=''>
      <Skeleton className='rounded-full w-[56px] h-[56px]' />
      <Skeleton className='w-full' />
    </Box>
  );
};

const CategoryTabViewListSkeleton = () => {
  return (
    <FlatList
      scrollEventThrottle={16}
      pagingEnabled
      data={Array(7).fill({})}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        height: 90,
        flexGrow: 0,
      }}
      snapToAlignment='center'
      className='ml-20 pr-8'
      renderItem={({ index }) => <CategoryTabViewItemSkeleton key={index} />}
    />
  );
};

export default CategoryTabViewListSkeleton;
