import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
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
