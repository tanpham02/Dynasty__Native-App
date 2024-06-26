import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';
import { Box } from 'native-base';
import { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Svg } from '@/assets';
import { HeaderProps } from './type';
import { PATH_SCREEN } from '@/constants';
import { navigate, widthScreen } from '@/utils';
import styles from '@/styles';

const Header = ({ openSidebar }: HeaderProps) => {
  const goToNotificationScreen = () => navigate(PATH_SCREEN.NOTIFICATION_SCREEN);

  return (
    <View className='flex-row justify-between items-center gap-3'>
      <View className='flex-1 h-[85px] relative'>
        {/* <Canvas
          style={{
            flex: 1,
            backgroundColor: '#f5faff',
          }}
        >
          <RoundedRect x={12} y={16} width={widthScreen - 90} height={48} r={8} color='#f0f6fc'>
            <Shadow dx={10} dy={10} blur={10} color='#dfe6ee' />
            <Shadow dx={-10} dy={-10} blur={10} color='#ffffff' />
          </RoundedRect>
          <RoundedRect x={widthScreen - 60} y={16} width={48} height={48} r={8} color='#f0f6fc'>
            <Shadow dx={10} dy={10} blur={10} color='#dfe6ee' />
            <Shadow dx={-10} dy={-10} blur={10} color='#ffffff' />
          </RoundedRect>
        </Canvas> */}
        <TouchableOpacity onPress={goToNotificationScreen} className='absolute top-7 right-6'>
          <Svg.Notification width={24} height={24} />
          <Box className='bg-secondary w-[18px] h-[18px] rounded-full items-center justify-center absolute -top-2 -right-2'>
            <Text className='text-white font-nunito-700 text-[9px]'>9</Text>
          </Box>
        </TouchableOpacity>
        <View className='flex-row items-center rounded-lg my-2 py-1 px-4 absolute top-2 left-4 w-[77%]'>
          <TouchableOpacity onPress={openSidebar}>
            <Svg.Menu width={30} height={30} className='text-zinc-500 py-2 px-4' />
          </TouchableOpacity>
          <View className='mr-2 ml-4 flex-1 py-1'>
            <Text className='text-zinc-800 font-nunito-700 uppercase text-xs'>Chọn vị trí</Text>
            <Text className='text-zinc-500 font-nunito-500 text-xs'>Nhận chính xác giá...</Text>
          </View>
          <View className='w-4 h-4 bg-secondary rounded item-center justify-center flex-row'>
            <Svg.ArrowDown width={14} height={14} className='text-white' />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);
