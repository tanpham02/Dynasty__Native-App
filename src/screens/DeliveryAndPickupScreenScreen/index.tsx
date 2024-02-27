import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { Box, FlatList, Input, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useQuery } from 'react-query';

import { Svg } from '@/assets';
import { ButtonPrimary, BuyActionItem, GlobalLoading, PrimaryLayout } from '@/components';
import { QueryKey } from '@/constants';
import { OpenStreetMapService } from '@/services';
import styles from '@/styles';
import { NavigationUtils, heightScreen, widthScreen } from '@/utils';
import { BuyActionType, buyActions } from './data';
import { StorePickupItem } from './components';

const DeliveryAndPickupScreenScreen = () => {
  const [tabActiveKey, setTabActiveKey] = useState<BuyActionType>(BuyActionType.DELIVERY);

  const params = NavigationUtils.getParams();

  const [coordinate, setCoordinate] = useState({
    latitude: null,
    longitude: null,
  });

  // for first login
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (params?.buyAction) {
      setTabActiveKey(params.buyAction);
    }
  }, [params?.buyAction]);

  // when select location (being limited)
  const { data: userLocationInfo } = useQuery({
    queryKey: [QueryKey.QUERY_KEY.LOCATION, coordinate],
    queryFn: async () => {
      try {
        GlobalLoading.show();
        if (coordinate?.latitude && coordinate?.longitude)
          return await OpenStreetMapService.getLocationsByLonLat({
            lat: coordinate.latitude,
            lon: coordinate.longitude,
          });

        return null;
      } catch (err) {
        showMessage({
          message: 'Có lỗi xảy ra vui lòng thử lại sau!',
        });
        console.log('🚀 ~ queryFn: ~ err:', err);
      } finally {
        GlobalLoading.hide();
      }
    },
  });

  // for first login
  const getCurrentLocation = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      showMessage({
        message: 'Permission to access location was denied',
        type: 'danger',
      });
      return;
    }

    let location = await getCurrentPositionAsync({});

    if (location?.coords?.latitude && location?.coords?.longitude) {
      setCoordinate({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  const handleMakerLocation = (e: MapPressEvent) => {
    setCoordinate(e.nativeEvent.coordinate);
  };

  return (
    <PrimaryLayout
      statusBarBackgroundColor='white'
      containerClass='bg-gray-5 flex-1'
      renderTitle={() => (
        <Box className='w-full flex-row items-center mx-3'>
          {buyActions.map((buyAction, index) => (
            <BuyActionItem
              wrapperClassName='mr-3'
              key={index}
              {...buyAction}
              onPress={() => setTabActiveKey(index)}
              isActive={tabActiveKey === index}
            />
          ))}
        </Box>
      )}
    >
      <Box className='flex-1'>
        <Box className='mx-4 mt-7 flex-row items-center'>
          <Input
            placeholder='Nhập địa điểm của bạn'
            className='flex-1 bg-white'
            _focus={{
              borderColor: 'gray.200',
            }}
            borderRadius={8}
          />
          <TouchableOpacity
            className='w-10 h-10 items-center justify-center bg-gray-5 rounded-lg ml-1'
            style={styles.shadowX}
          >
            <Svg.ArrowRight width={20} height={20} />
          </TouchableOpacity>
        </Box>
        <Box className='mt-4 relative flex-1'>
          <MapView
            onPress={handleMakerLocation}
            style={{
              width: widthScreen,
              height: '100%',
            }}
            showsUserLocation
            showsMyLocationButton
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: coordinate?.latitude || 10.770744,
              longitude: coordinate?.longitude || 106.706093,
              latitudeDelta: 0.05,
              longitudeDelta: 0.025,
            }}
          >
            {coordinate?.latitude && coordinate?.longitude && <Marker draggable coordinate={coordinate} />}
          </MapView>
        </Box>
        {/* <View className='absolute bottom-0 left-0 right-0 p-4 bg-white'>
        <Text numberOfLines={2} className='font-nunito-500'>
          {userLocationInfo?.display_name}
        </Text>
        <TouchableOpacity className='bg-primary py-2 px-4 rounded-lg mt-3' style={styles.shadowPrimary}>
          <Text className='text-center text-white font-nunito-500 text-sm' onPress={NavigationUtils.goBack}>
            Đồng ý
          </Text>
        </TouchableOpacity>
      </View> */}
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
    </PrimaryLayout>
  );
};

export default DeliveryAndPickupScreenScreen;
