import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Image, Share, TouchableOpacity, View } from 'react-native';
import CopySvg from '@/assets/svg/pizza.svg';
import RewardSvg from '@/assets/svg/pizza.svg';
import ShareSvg from '@/assets/svg/pizza.svg';
import StartSvg from '@/assets/svg/pizza.svg';
import { Text } from 'src/components';
import NotificationSvg from 'src/components/svg/NotificationSvg';
import theme from 'src/themes';
import styles from './styles';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';
import { navigate } from 'App';
import { PathName } from 'src/constants';

const UserHeader = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerView}>
          <View style={styles.notificationTextView}>
            <Text style={styles.notificationText}>Bạn ơi, </Text>
            <Text style={styles.notificationText}>Hôm nay bạn muốn uống gì?</Text>
          </View>
          <View style={styles.notificationBtnGroupView}>
            <TouchableOpacity
              style={styles.rewardBtn}
              onPress={() => navigate(PathName.PATH_SCREEN.MY_PROMOTION_SCREEN)}
            >
              <View style={styles.rewardView}>
                <RewardSvg height="20" width="20" color={theme.colors.primarySecond} />
                <Text style={styles.totalRewardText}>9</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.notificationBtn}
              onPress={() => navigate(PathName.PATH_SCREEN.NOTIFICATION_SCREEN)}
            >
              <View>
                <NotificationSvg height="20" width="20" showNotification />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#6BA4D4', '#ADDAFF']}
        style={styles.userInfoView}
      >
        <View style={styles.userInfoHeaderView}>
          <View style={styles.userGroupView}>
            <Image
              source={require('../../../../assets/images/home-screen-images/user-test.jpg')}
              style={styles.userImage}
            />
            <View style={styles.userInfoTextView}>
              <Text style={styles.userFullNameText}>{`Em iu <3`}</Text>
              <View style={styles.rememberView}>
                <StartSvg />
                <Text style={styles.userRememberText}>Thành viên Vip</Text>
              </View>
            </View>
          </View>
          <LinearGradientButton
            icon={<RewardSvg height="27" width="27" color={'#ffffff'} />}
            title="Đổi điểm"
            onPress={() => navigate(PathName.PATH_SCREEN.EXCHANGE_POINT_DETAIL_SCREEN)}
          />
        </View>
        <View style={styles.promotionCodeView}>
          <View style={styles.promotionCodeGroupView}>
            <Text style={styles.promotionCodeText}>Mã giới thiệu của bạn:</Text>
            <TouchableOpacity style={styles.promotionCodeValueBtn}>
              <Text style={styles.promotionCodeValueText}>KH123456</Text>
              <CopySvg width={12} height={20} color={theme.colors.textButton} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onShare}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#90C2B8', '#D5E5CC']}
              style={styles.shareBtn}
            >
              <ShareSvg width={15} height={15} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default UserHeader;
