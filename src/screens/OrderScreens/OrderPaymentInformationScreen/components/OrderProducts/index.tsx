import { Text, VStack } from 'native-base';
import { orderProducts } from './data';
import { OrderProduct } from '..';
import { ScrollView } from 'react-native';

const OrderProducts = () => {
  return (
    <>
      <Text className='text-gray-10 font-nunito-700 text-base'>Sản phẩm đã mua</Text>
      <VStack space={3} className='mt-2.5 max-h-[500px]'>
        {orderProducts.map((item, index) => (
          <OrderProduct key={index} {...item} />
        ))}
      </VStack>
    </>
  );
};

export default OrderProducts;
