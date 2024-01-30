import { StyleSheet } from 'react-native';
import theme from 'src/themes';
import { heightScreen, widthScreen } from 'src/utils/systemUtils';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.marginHorizontalContent,
  },
  headerGroupView: {
    height: heightScreen / 4,
    position: 'relative',
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
    paddingVertical: theme.spacing.paddingVerticalContent,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationBtn: {
    backgroundColor: '#ffffff',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  notificationTextView: {},
  notificationText: {
    fontFamily: theme.fontFamily.semiBold,
    color: theme.colors.textBold,
    fontSize: 16,
  },
  notificationBtnGroupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  rewardBtn: {
    backgroundColor: '#ffffff',
    height: 35,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  rewardView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
  },
  totalRewardText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 18,
    color: theme.colors.textBold,
  },
  userInfoHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoView: {
    borderRadius: 14,
    // position: "absolute",
    bottom: -20,
    paddingHorizontal: theme.spacing.paddingHorizontalContent * 1.5,
    paddingVertical: theme.spacing.paddingVerticalContent * 1.5,
  },
  userGroupView: {
    flexDirection: 'row',
  },
  userImage: {
    height: 48,
    width: 48,
    objectFit: 'cover',
    borderRadius: 24,
  },
  userInfoTextView: {
    marginLeft: 10,
  },
  userFullNameText: {
    color: theme.colors.textLight,
    fontFamily: theme.fontFamily.bold,
  },
  rememberView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginTop: 4
  },
  userRememberText: {
    color: theme.colors.textLight,
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
  },
  promotionCodeView: {
    flexDirection: 'row',
    marginTop: theme.spacing.marginTopContent,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promotionCodeGroupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promotionCodeText: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.textLight,
    fontSize: 14,
  },
  promotionCodeValueBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  promotionCodeValueText: {
    color: '#E8EB95',
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 14,
    marginRight: 5,
    marginLeft: 5,
  },
  shareBtn: {
    height: 28,
    width: 28,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
