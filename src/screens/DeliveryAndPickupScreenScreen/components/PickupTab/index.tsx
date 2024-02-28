import { Svg } from '@/assets';
import { widthScreen } from '@/utils';
import { Box, FlatList, Input, Text } from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import StorePickupItem from '../StorePickupItem';
import { ButtonPrimary } from '@/components';

const PickupTab = () => {
  return (
    <Box className='flex-1'>
      <Box className='mt-10 relative flex-1'>
        <MapView
          style={{
            width: widthScreen,
            height: '100%',
          }}
          showsUserLocation
          showsMyLocationButton
          provider={PROVIDER_GOOGLE}
          region={{
            // latitude: coordinate?.latitude || 10.770744,
            // longitude: coordinate?.longitude || 106.706093,
            latitude: 10.770744,
            longitude: 106.706093,
            latitudeDelta: 0.05,
            longitudeDelta: 0.025,
          }}
        >
          {/* {coordinate?.latitude && coordinate?.longitude && <Marker draggable coordinate={coordinate} />} */}
        </MapView>
      </Box>
      <Box className='bg-white pb-2'>
        <Box className='flex-row gap-1 items-center px-4 py-2'>
          <Text className='font-nunito-700'>05 Cửa hàng gần bạn</Text>
          <Svg.CheckCircle width={20} height={20} className='text-secondary' />
        </Box>
        <Box>
          <FlatList
            horizontal
            data={[{}, {}, {}]}
            pagingEnabled
            snapToAlignment='center'
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <StorePickupItem />}
            keyExtractor={(_, index) => index.toString()}
          />
        </Box>
        <ButtonPrimary title='Đồng ý' containerClass='mx-2 mb-4' />
      </Box>
    </Box>
  );
};

export default PickupTab;
