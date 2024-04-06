import { SwipeListView } from 'react-native-swipe-list-view';
import { FlatList } from 'native-base';
import { showMessage } from 'react-native-flash-message';

import { RefreshControl } from '@/components';
import { useDeleteUserAddress, useFetchUserAddress } from '@/hooks';
import { AddressEmptyList, AddressItem, AddressItemActions, AddressItemSkeleton } from '..';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const AddressList = () => {
  const isFocused = useIsFocused();

  const {
    data: userSavedAddresses,
    isFetching: isFetchingUserAddress,
    refetch: refetchUserAddress,
    isRefetching: isRefetchingUserAddress,
  } = useFetchUserAddress();

  useEffect(() => {
    if (isFocused) refetchUserAddress();
  }, [isFocused]);

  const { mutate: deleteUserAddressById } = useDeleteUserAddress({
    onSuccess: () => refetchUserAddress(),
    onError: () => showMessage({ message: 'Có lỗi xảy ra vui lòng thử lại sau!', type: 'danger' }),
  });

  return (
    <>
      {isFetchingUserAddress ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={() => <AddressItemSkeleton />}
          data={Array.from({ length: 5 }).fill({})}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : Array.isArray(userSavedAddresses?.addressList) && userSavedAddresses.addressList.length > 0 ? (
        <SwipeListView
          refreshControl={<RefreshControl onRefresh={refetchUserAddress} refreshing={isRefetchingUserAddress} />}
          disableRightSwipe
          rightOpenValue={-100}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <AddressItem {...item} />}
          data={userSavedAddresses?.addressList || []}
          keyExtractor={(_, index) => index.toString()}
          renderHiddenItem={({ item }) => (
            <AddressItemActions {...item} onDelete={() => deleteUserAddressById(item._id)} />
          )}
        />
      ) : (
        <AddressEmptyList />
      )}
    </>
  );
};

export default AddressList;
