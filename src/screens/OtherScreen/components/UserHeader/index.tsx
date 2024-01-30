import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity, View } from 'react-native';
import CopySvg from 'src/assets/svg/copy-icon.svg';
import RewardSvg from 'src/assets/svg/reward-icon.svg';
import ShareSvg from 'src/assets/svg/share-icon.svg';
import StartSvg from 'src/assets/svg/start-icon.svg';
import { Text } from 'src/components';
import NotificationSvg from 'src/components/svg/NotificationSvg';
import theme from 'src/themes';
import styles from './styles';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';
import { navigate } from 'App';
import { PathName } from 'src/constants';

const UserHeader = () => {
  return (
    <View style={styles.container}>
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
          <TouchableOpacity>
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
