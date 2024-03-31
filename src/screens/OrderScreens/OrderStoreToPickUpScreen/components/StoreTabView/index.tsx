import { widthScreen } from '@/utils';
import { Box, Center, useColorModeValue } from 'native-base';
import { useState } from 'react';
import { Animated, Pressable, StatusBar } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const StoreTabView = () => {
  const FirstRoute = () => (
    <Center flex={1} my='4'>
      This is Tab 1
    </Center>
  );

  const SecondRoute = () => (
    <Center flex={1} my='4'>
      This is Tab 2
    </Center>
  );

  const initialLayout = {
    width: widthScreen,
  };
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Tab 1',
    },
    {
      key: 'second',
      title: 'Tab 2',
    },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection='row'>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 1 : 0.5)),
          });
          const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box borderBottomWidth='3' borderColor={borderColor} flex={1} alignItems='center' p='3'>
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
};

export default StoreTabView;
