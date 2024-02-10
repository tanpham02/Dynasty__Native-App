import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Text, TextInput } from 'react-native';

import { Svg } from '@/assets';
import { MyStatusBar } from '@/components';
import styles from '@/styles';
import { Button, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BuyActionItem from '../HomeScreen/components/BuyActionItem';
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { heightScreen, widthScreen } from '@/utils/systemUtils';
import * as Location from 'expo-location';
import { showMessage } from 'react-native-flash-message';
import { goBack } from '@/utils/navigationUtil';
import { QUERY_KEY } from '@/constants/queryKey';
import { globalLoading } from '@/components/GlobalLoading';
import { openStreetMapService } from '@/services/openStreetMapService';

const buyActions = [
  {
    Icon: Svg.Delivery,
    label: 'Giao hàng',
  },
  {
    Icon: Svg.Store,
    label: 'Nhận hàng',
  },
];

const DeliveryScreen = () => {
  const [tabActiveKey, setTabActiveKey] = useState<number>(0);

  const [coordinate, setCoordinate] = useState({
    latitude: null,
    longitude: null,
  });

  // for first login
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // when select location (being limited)
  const { data: userLocationInfo } = useQuery({
    queryKey: [QUERY_KEY.LOCATION, coordinate],
    queryFn: async () => {
      try {
        globalLoading.show();
        if (coordinate?.latitude && coordinate?.longitude)
          return await openStreetMapService.getLocationsByLonLat({
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
        globalLoading.hide();
      }
    },
  });

  const goBackToPrevScreen = () => goBack();

  // for first login
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      showMessage({
        message: 'Permission to access location was denied',
        type: 'danger',
      });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

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
    <>
      <SafeAreaView className="flex-1 bg-gray-5">
        <View className="flex-row items-center mx-3">
          <TouchableOpacity
            onPress={goBackToPrevScreen}
            style={styles.shadowX}
            className="bg-gray-5 w-[45px] h-[45px] rounded-lg items-center justify-center mr-6"
          >
            <Svg.ArrowLeft width={22} height={22} />
          </TouchableOpacity>
          {buyActions.map((buyAction, index) => (
            <BuyActionItem
              wrapperClassName="mr-3"
              key={index}
              {...buyAction}
              onPress={() => setTabActiveKey(index)}
              isActive={tabActiveKey === index}
            />
          ))}
        </View>
        <View className="mx-4 mt-4 flex-row items-center">
          {/* <Input placeholder="Nhập địa điểm của bạn" className="flex-1 bg-white" /> */}
          <TouchableOpacity
            className="w-10 h-10 items-center justify-center bg-gray-5 rounded-lg ml-1"
            style={styles.shadowX}
          >
            <Svg.ArrowRight width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View className="mt-4 relative">
          <MapView
            onPress={handleMakerLocation}
            style={{
              width: widthScreen,
              height: heightScreen - 185,
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
            {coordinate?.latitude && coordinate?.longitude && (
              <Marker draggable coordinate={coordinate} />
            )}
          </MapView>
        </View>
        <View className="absolute bottom-0 left-0 right-0 p-4 bg-white">
          <Text numberOfLines={2} className="font-nunito-500">
            {userLocationInfo?.display_name}
          </Text>
          <TouchableOpacity className="bg-primary py-2 px-4 rounded-lg mt-3">
            <Text
              className="text-center text-white font-nunito-500 text-sm"
              onPress={goBackToPrevScreen}
            >
              Đồng ý
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DeliveryScreen;
