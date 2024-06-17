import { Text } from 'native-base';
import { Linking, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Svg } from '@/assets';
import { RootState } from '@/redux';
import { StoreConfigModel } from '@/models';

const ContactSupportButton = () => {
  const storeConfig = useSelector<RootState, StoreConfigModel>((state) => state.storeStore.storeConfig);

  const callSupport = () => Linking.openURL(`tel:${storeConfig?.storeInformation?.phoneNumber}`);

  return storeConfig?.storeInformation?.phoneNumber ? (
    <TouchableOpacity className='flex-row items-center' onPress={callSupport}>
      <View className='w-8 h-8 bg-secondary rounded-lg items-center justify-center'>
        <Svg.Call width={20} height={20} className='text-white' />
      </View>
      <Text className='font-nunito-700 uppercase ml-2 text-sm'>Liên hệ hỗ trợ</Text>
    </TouchableOpacity>
  ) : (
    <></>
  );
};

export default ContactSupportButton;
