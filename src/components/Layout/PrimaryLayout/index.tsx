/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ColorValue,
  SafeAreaView,
  StatusBarStyle,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { MyStatusBar, ScrollView, Text } from 'src/components';
import RewardSvg from 'src/assets/svg/reward-icon.svg';
import NotificationSvg from 'src/components/svg/NotificationSvg';

import { goBack, navigate } from '../../../../App';
import styles from './styles';
import theme from 'src/themes';
import { PathName } from 'src/constants';

interface Props {
  statusBarBackgroundColor?: ColorValue;
  barStyle?: null | StatusBarStyle | undefined;
  headerBarStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  goBack?(): void;
  title?: string;
  children?: JSX.Element | JSX.Element[];
}

interface HeaderBarProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const HeaderBar = (props: HeaderBarProps) => {
  const { title, style } = props;

  return (
    <View style={[styles.headerView, style]}>
      <View style={styles.notificationTextView}>
        <Text style={styles.notificationText}>{title || ''}</Text>
      </View>
      <View style={styles.notificationBtnGroupView}>
        <TouchableOpacity
          style={[styles.rewardBtn, theme.stylesPrimary.shadow]}
          onPress={() => navigate(PathName.PATH_SCREEN.MY_PROMOTION_SCREEN)}
        >
          <View style={styles.rewardView}>
            <RewardSvg height="20" width="20" color={theme.colors.primarySecond} />
            <Text style={styles.totalRewardText}>9</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.notificationBtn, theme.stylesPrimary.shadow]}
          onPress={() => navigate(PathName.PATH_SCREEN.NOTIFICATION_SCREEN)}
        >
          <View>
            <NotificationSvg height="20" width="20" showNotification />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PrimaryLayout = (props: Props) => {
  return (
    <>
      <MyStatusBar
        backgroundColor={props.statusBarBackgroundColor || 'white'}
        barStyle={props.barStyle || 'dark-content'}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[props.style, { flex: 1 }]}>
          <HeaderBar title={props.title} style={props.headerBarStyle} />
          {props.children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default PrimaryLayout;
