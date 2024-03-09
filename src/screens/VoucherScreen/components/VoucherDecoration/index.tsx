import { Box } from 'native-base';

const VoucherDecoration = () => {
  return (
    <Box className='mt-6 w-full flex-row items-center'>
      <Box className='w-10 h-2 bg-zinc-100 rounded-lg -ml-6' />
      <Box className='flex-1 flex-row justify-between mx-1'>
        {Array.from({ length: 30 }).map((_, index) => (
          <Box key={index} className='w-1.5 h-1.5 rounded-full bg-zinc-100' />
        ))}
      </Box>
      <Box className='w-10 h-2 bg-zinc-100 rounded-lg -mr-6' />
    </Box>
  );
};

export default VoucherDecoration;
