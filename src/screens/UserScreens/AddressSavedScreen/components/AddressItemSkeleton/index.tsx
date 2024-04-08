import { Box, Skeleton } from 'native-base';

const AddressItemSkeleton = () => {
  return (
    <Box className='w-[90%] mx-auto border border-zinc-100 my-2 rounded-lg bg-white p-4 space-y-3'>
      <Skeleton className='h-5 rounded-lg' />
      <Skeleton className='h-3 rounded-lg' />
      <Skeleton className='h-3 rounded-lg w-3/5' />
    </Box>
  );
};

export default AddressItemSkeleton;
