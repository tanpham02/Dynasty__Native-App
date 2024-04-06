import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';
import { Box, Image, Text } from 'native-base';
import { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';

import { Svg } from '@/assets';
import { GlobalLoading } from '@/components';
import { UserModel } from '@/models';
import { AppDispatch, RootState, getUserInfo } from '@/redux';
import { UserService } from '@/services';
import { getFullImageUrl } from '@/utils';
import { tokenManager } from 'App';

const MyAvatar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [file, setFile] = useState(null);

  const isOpeningPhotosLibrary = useRef<boolean>(false);

  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const handleUploadAvatar = async () => {
    try {
      if (!isOpeningPhotosLibrary.current) {
        const { status } = await requestMediaLibraryPermissionsAsync();
        isOpeningPhotosLibrary.current = true;

        if (status !== 'granted') {
          // If permission is denied, show an alert
          isOpeningPhotosLibrary.current = false;
          showMessage({
            message: 'Vui lòng mở quyền truy cập thư viện của bạn trước!',
            type: 'warning',
          });
        } else {
          // Launch the image library and get
          // the selected image
          const result = await launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
          });

          if (result?.canceled) {
            isOpeningPhotosLibrary.current = false;
            return;
          }

          const fileSelected = result.assets?.[0].uri;
          let filename = fileSelected.split('/').pop();
          // Infer the type of the image
          let match = /\.(\w+)$/.exec(filename);
          let type = match ? `image/${match[1]}` : `image`;

          if (fileSelected && user?._id) {
            GlobalLoading.show();

            const formData = new FormData();
            formData.append('file', {
              uri: fileSelected,
              name: filename,
              type,
            } as any);

            formData.append('customerInfo', JSON.stringify(user));

            await UserService.updateInfoById(user?._id, formData);
            await dispatch(getUserInfo());
            setFile(fileSelected);
            showMessage({
              message: 'Cập nhật ảnh đại diện thành công!',
              type: 'success',
            });
          }
        }
        isOpeningPhotosLibrary.current = false;
      }
    } catch (err) {
      showMessage({
        message: 'Cập nhật ảnh đại diện thất bại!',
        type: 'danger',
      });
      console.log('🚀 ~ handleUploadAvatar ~ err:', err);
      isOpeningPhotosLibrary.current = false;
    } finally {
      GlobalLoading.hide();
    }
  };

  return (
    <Box className='bg-white rounded-lg p-4 items-center'>
      <TouchableOpacity
        onPress={handleUploadAvatar}
        className='w-16 h-16 bg-primary items-center justify-center rounded-full relative'
      >
        {user?.avatar ? (
          <Image
            alt='avatar'
            resizeMode='cover'
            className='w-full h-full rounded-full'
            source={{ uri: getFullImageUrl(user?.avatar) }}
          />
        ) : (
          <Text className='font-nunito-700 text-white uppercase text-lg'>{user?.fullName?.charAt(0) || 'A'}</Text>
        )}
        <Box className='w-6 h-6 bg-black/70 rounded-full absolute -bottom-1 right-0 items-center justify-center border border-white'>
          <Svg.Camera width={14} height={14} className='text-white' />
        </Box>
      </TouchableOpacity>
      <Text className='font-nunito-700 text-lg mt-2 text-zinc-700'>{user?.fullName}</Text>
      <Text className='font-nunito-500 text-[13px] text-zinc-500'>{user?.phoneNumber || user?.email}</Text>
    </Box>
  );
};

export default MyAvatar;
