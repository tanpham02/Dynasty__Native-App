import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// const StatusBarHeight = StatusBar.currentHeight;

const GradientStatusBar = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#8EC1B8', '#FBFCDA']}
        style={styles.gradient}
      />
      <StatusBar backgroundColor={'transparent'} translucent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    // height: StatusBar.currentHeight,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default GradientStatusBar;
