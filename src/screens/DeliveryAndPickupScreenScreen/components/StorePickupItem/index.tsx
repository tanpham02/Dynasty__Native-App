import { Box, Text } from 'native-base';
import { Linking, Platform, TouchableOpacity } from 'react-native';
import { useCallback, useState } from 'react';

import { Svg } from '@/assets';
import styles from '@/styles';

const StorePickupItem = ({ name, address, longitude, latitude, onPress, isActive, id, index }) => {
  const handleDirectOnMap = useCallback(() => {
    const label = 'Dynasty Pizza';
    const lat = longitude;
    const lng = latitude;

    const scheme = Platform.select({
      ios: 'http://maps.apple.com/?ll=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${lat},${lng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => onPress?.(id, index)}
      className={`border rounded-lg p-3 bg-white mt-2 mb-4 mx-1.5 ${isActive ? 'border-secondary' : 'border-zinc-200'}`}
      style={[styles.shadowX, styles.widthFourPerFiveScreen]}
    >
      <Box className='border-b border-dashed border-zinc-200 flex-row pb-5'>
        <Svg.Location width={20} height={20} className='text-zinc-700' />
        <Box className='flex-1 mx-2'>
          <Text className='font-nunito-700 text-zinc-700 text-sm' numberOfLines={1}>
            {name}
          </Text>
          <Text className='font-nunito-500 text-zinc-500 text-[13px]' numberOfLines={2}>
            {address}
          </Text>
        </Box>
        <TouchableOpacity className='items-center' onPress={handleDirectOnMap}>
          <Box className='w-7 h-7 border border-sky-600 rounded-full items-center justify-center'>
            <Svg.Direction width={20} height={20} className='text-sky-600' />
          </Box>
          <Text className='font-nunito-700 text-zinc-700 text-[11px]'>Chỉ đường</Text>
        </TouchableOpacity>
      </Box>
      <Box className='pt-2 flex-row justify-between items-end'>
        <Box>
          <Text className='font-nunito-700 text-xs text-zinc-400'>Trạng thái</Text>
          <Text className='text-xs font-nunito-700'>
            <Text className='text-green-600'>Đang mở . </Text>
            <Text>Đóng vào 21:00</Text>
          </Text>
        </Box>
        {isActive ? (
          <Box className='border border-green-600 rounded-lg py-1 px-2 flex-row gap-1 justify-center bg-green-600/5'>
            <Text
              className='text-xs font-nunito-600 text-green-600'
              style={{
                lineHeight: 14,
              }}
            >
              Đang chọn
            </Text>
            <Svg.CheckCircle width={14} height={14} className='text-green-600' />
          </Box>
        ) : (
          <Box className='border border-zinc-200 rounded-lg py-1 px-2 flex-row gap-1 justify-center'>
            <Text
              className='text-xs font-nunito-600 text-zinc-600'
              style={{
                lineHeight: 14,
              }}
            >
              Lựa chọn
            </Text>
            <Box className='w-3 h-3 rounded-full bg-zinc-100 border border-zinc-200' />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default StorePickupItem;
