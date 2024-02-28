import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { Box, Input, Text, Skeleton } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useQuery } from 'react-query';

import { Svg } from '@/assets';
import { QueryKey } from '@/constants';
import { OpenStreetMapService } from '@/services';
import styles from '@/styles';
import { NavigationUtils, widthScreen } from '@/utils';

const MarkerKey = 'CURRENT_LOCATION';

const DeliveryTab = () => {
  const mapRef = useRef<MapView>();

  const [coordinate, setCoordinate] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (coordinate?.latitude && coordinate?.longitude) handleFocusIntoMarker();
  }, [coordinate]);

  const { data: userLocationInfo, isFetching: isFetchingUserLocationInfo } = useQuery({
    queryKey: [QueryKey.QUERY_KEY.LOCATION, coordinate],
    queryFn: async () => {
      try {
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
      }
    },
  });

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

  const handleFocusIntoMarker = () => {
    mapRef.current.fitToSuppliedMarkers([MarkerKey], {
      edgePadding: {
        top: 100,
        right: 100,
        left: 100,
        bottom: 100,
      },
      animated: true,
    });
  };

  const handleMakerLocation = (e: MapPressEvent) => {
    setCoordinate(e.nativeEvent.coordinate);
  };

  return (
    <Box className='flex-1'>
      <Box className='mx-4 mt-7 flex-row items-center'>
        <Box className='flex-1'>
          <Input
            placeholder='Nhập địa điểm của bạn'
            className='flex-1 bg-white font-nunito-700'
            _focus={{
              borderColor: 'gray.200',
            }}
            borderRadius={8}
          />
        </Box>
        <TouchableOpacity
          className='w-10 h-10 items-center justify-center bg-gray-5 rounded-lg ml-1'
          style={styles.shadowX}
        >
          <Svg.ArrowRight width={20} height={20} />
        </TouchableOpacity>
      </Box>
      <Box className='mt-4 relative flex-1'>
        <MapView
          ref={mapRef}
          onPress={handleMakerLocation}
          style={{
            width: widthScreen,
            height: '100%',
          }}
          showsUserLocation
          showsMyLocationButton
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 10.770744,
            longitude: 106.706093,
            latitudeDelta: 0.05,
            longitudeDelta: 0.025,
          }}
        >
          {coordinate?.latitude && coordinate?.longitude && (
            <Marker identifier={MarkerKey} draggable coordinate={coordinate} />
          )}
        </MapView>
      </Box>
      <Box className='p-4 bg-white'>
        {isFetchingUserLocationInfo ? (
          <Skeleton.Text />
        ) : (
          <Text numberOfLines={2} className='font-nunito-500'>
            {userLocationInfo?.display_name || 'Vui lòng chọn địa chỉ giao hàng của bạn'}
          </Text>
        )}
        <TouchableOpacity className='bg-primary py-2 px-4 rounded-lg mt-3' style={styles.shadowPrimary}>
          <Text className='text-center text-white font-nunito-500 text-sm' onPress={NavigationUtils.goBack}>
            Đồng ý
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default DeliveryTab;
