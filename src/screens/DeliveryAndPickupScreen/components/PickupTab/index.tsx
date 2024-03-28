import { Box, Image, Text } from 'native-base';
import { useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Svg } from '@/assets';
import MakerContainerImage from '@/assets/images/marker-store.png';
import { ButtonPrimary } from '@/components';
import { pad, widthScreen } from '@/utils';
import { FlatList, TouchableOpacity } from 'react-native';
import StorePickupItem from '../StorePickupItem';

const PickupTab = () => {
  const mapRef = useRef<MapView>(null);

  const storeFlatListRef = useRef<FlatList>(null);

  const [storeSelectedId, setStoreSelectedId] = useState<string>();

  const handleFocusIntoMarker = (key: string, index?: number) => {
    mapRef.current?.fitToSuppliedMarkers([key], {
      edgePadding: {
        top: 100,
        right: 100,
        left: 100,
        bottom: 100,
      },
      animated: true,
    });

    if (Number.isInteger(index)) {
      storeFlatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
      setStoreSelectedId(key);
    }
  };

  const handleScroll = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const itemWidth = widthScreen * 0.8; // 80% of screen width

    // Calculate the index of the item at the center
    const centerIndex = Math.floor((contentOffset + viewSize / 2) / itemWidth);

    handleFocusIntoMarker(stores[centerIndex].id);
  };

  const stores = [
    {
      name: 'Dynasty Pizza Tân Bình',
      address: '121 Hòa Bình, Phường 12, Quận Tân Bình, Tp.Hồ Chí Minh',
      longitude: 106.64426,
      latitude: 10.792195,
      id: '0',
    },
    {
      name: 'Dynasty Pizza Gò Vấp',
      address: '121 Hòa Bình, Phường 12, Quận  Gò Vấp, Tp.Hồ Chí Minh',
      longitude: 106.696508,
      latitude: 10.819527,
      id: '1',
    },
    {
      name: 'Dynasty Pizza Quận 1',
      address: '121 Hòa Bình, Phường 12, Quận Quận 1, Tp.Hồ Chí Minh',
      longitude: 106.64426,
      latitude: 10.792195,
      id: '2',
    },
    {
      name: 'Dynasty Pizza Thủ đức',
      address: '121 Hòa Bình, Phường 12, Quận Thủ đức, Tp.Hồ Chí Minh',
      longitude: 106.696265,
      latitude: 10.775662,
      id: '3',
    },
  ];

  return (
    <Box className='flex-1'>
      <Box className='mt-10 relative flex-1'>
        <MapView
          ref={mapRef}
          style={{
            width: widthScreen,
            height: '100%',
          }}
          showsUserLocation
          showsMyLocationButton
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 10.770744,
            longitude: 106.706093,
            latitudeDelta: 0.05,
            longitudeDelta: 0.025,
          }}
        >
          {stores.map((store) => (
            <Marker draggable coordinate={{ ...store }} identifier={store.id}>
              <TouchableOpacity>
                <Image width={70} height={70} resizeMode='contain' alt='Maker Image' source={MakerContainerImage} />
              </TouchableOpacity>
            </Marker>
          ))}
        </MapView>
      </Box>
      <Box className='bg-white pb-2'>
        <Box className='flex-row gap-1 items-center px-4 py-2'>
          <Text className='font-nunito-700'>{pad(stores.length)} Cửa hàng gần bạn</Text>
          <Svg.CheckCircle width={20} height={20} className='text-secondary' />
        </Box>
        <Box>
          <FlatList
            horizontal
            data={stores}
            pagingEnabled
            onScroll={handleScroll}
            ref={storeFlatListRef}
            snapToAlignment='center'
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <StorePickupItem
                {...item}
                index={index}
                isActive={storeSelectedId === item.id}
                onPress={handleFocusIntoMarker}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </Box>
        <ButtonPrimary isDisable={!storeSelectedId} title='Đồng ý' containerClass='mx-2 mb-4' />
      </Box>
    </Box>
  );
};

export default PickupTab;
