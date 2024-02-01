import { navigate } from 'App';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Image, Share, Text, TouchableOpacity, View } from 'react-native';
import CopySvg from '@/assets/svg/pizza.svg';
import RewardSvg from '@/assets/svg/pizza.svg';
import ShareSvg from '@/assets/svg/pizza.svg';
import StartSvg from '@/assets/svg/pizza.svg';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';
import { PathName } from 'src/constants';
import theme from 'src/themes';
import * as Clipboard from 'expo-clipboard';
import styles from './styles';

const UserInfo = () => {
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

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
    Alert.alert('Đã copy');
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#6BA4D4', '#ADDAFF']}
      style={styles.userInfoView}
    >
      <View style={styles.userInfoHeaderView}>
        <View style={styles.userGroupView}>
          <Image
            source={require('src/assets/images/home-screen-images/user-test.jpg')}
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
          <TouchableOpacity style={styles.promotionCodeValueBtn} onPress={copyToClipboard}>
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
  );
};

export default UserInfo;
