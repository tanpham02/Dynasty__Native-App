import { Divider, ScrollView } from 'native-base';
import { memo } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ContactSupportButton, MainMenu, SubMenu, UserSignInButton } from './components';

const SideBar = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView>
        <View className='px-4 py-2'>
          <UserSignInButton />
          <Divider className='bg-zinc-200 my-3' />
          <MainMenu />
          <Divider className='bg-zinc-200 my-3' />
          <SubMenu />
          <Divider className='bg-zinc-200 my-3' />
          <ContactSupportButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(SideBar);
