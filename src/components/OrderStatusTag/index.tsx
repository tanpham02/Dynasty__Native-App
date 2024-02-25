import { Box, Text } from 'native-base';

const OrderStatusTag = () => {
  return (
    <Box className="border border-primary bg-primary/10 absolute top-4 right-4 py-0.5 px-3 rounded-xl">
      <Text className="font-nunito-500 text-xs text-green-900">Mới</Text>
    </Box>
  );
};

export default OrderStatusTag;
