import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';

import { UserModel } from '@/models';
import { tokenManager } from 'App';
import { UserService } from '@/services';
import { GlobalLoading, globalLoading } from '@/components';
import { AppDispatch, RootState, getUserInfo } from '@/redux';

export const useUserForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const isOpeningPhotosLibrary = useRef<boolean>(false);

  const formMethods = useForm<UserModel>();

  const { handleSubmit, reset, getFieldState } = formMethods;

  const updateUserInfo = async (data: UserModel) => {
    try {
      globalLoading.show();

      const formData = new FormData();
      let dataSubmit: UserModel = { _id: data._id };

      Object.keys(data).forEach((key) => {
        if (getFieldState(key).isDirty) dataSubmit[key] = data[key];
      });

      formData.append('customerInfo', JSON.stringify(dataSubmit));

      await UserService.updateInfoById(dataSubmit._id, formData);
      dispatch(getUserInfo());

      showMessage({
        message: 'Cập nhật thông tin cá nhân thành công!',
        type: 'success',
      });
    } catch (err) {
      console.log('🚀 ~ updateUserInfo ~ err:', err);
      showMessage({
        message: 'Có lỗi xảy ra vui lòng thử lại sau!',
        type: 'danger',
      });
    } finally {
      globalLoading.hide();
    }
  };

  const updateUserAvatar = async () => {
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
            globalLoading.show();
            console.log('🚀 ~ updateUserAvatar ~ fileSelected:', fileSelected);

            const formData = new FormData();
            formData.append('file', {
              uri: fileSelected,
              name: filename,
              type,
            } as any);

            formData.append('customerInfo', JSON.stringify(user));

            await UserService.updateInfoById(user?._id, formData);
            await dispatch(getUserInfo());
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
      globalLoading.hide();
    }
  };

  const handleSubmitUserForm = handleSubmit(updateUserInfo);

  const fillUserData = () => {
    if (user && Object.keys(user).length > 0) {
      console.log('user', user);
      reset({ ...user });
    }
  };

  return { formMethods, fillUserData, user, handleSubmitUserForm, updateUserAvatar } as const;
};
