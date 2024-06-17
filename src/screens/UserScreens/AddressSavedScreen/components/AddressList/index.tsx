import { useIsFocused } from '@react-navigation/native';
import { FlatList } from 'native-base';
import { useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

import { RefreshControl } from '@/components';
import { AddressEmptyList, AddressItem, AddressItemActions, AddressItemSkeleton } from '..';
import { useUserAddressList } from '../../useUserAddressList';

const AddressList = () => {
  const isFocused = useIsFocused();

  const {
    isFetchingUserAddress,
    userSavedAddresses,
    refetchUserAddress,
    isRefetchingUserAddress,
    deleteUserAddress,
    updateUserAddress,
  } = useUserAddressList();

  useEffect(() => {
    if (isFocused) refetchUserAddress();
  }, [isFocused]);

  console.log('addess', userSavedAddresses);

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
          renderItem={({ item }) => <AddressItem {...item} onUpdate={() => updateUserAddress(item._id)} />}
          data={userSavedAddresses?.addressList || []}
          keyExtractor={(_, index) => index.toString()}
          renderHiddenItem={({ item }) => (
            <AddressItemActions
              {...item}
              onDelete={() => deleteUserAddress(item._id)}
              onUpdate={() => updateUserAddress(item._id)}
            />
          )}
        />
      ) : (
        <AddressEmptyList />
      )}
    </>
  );
};

export default AddressList;
