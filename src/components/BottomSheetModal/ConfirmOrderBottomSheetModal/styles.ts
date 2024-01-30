import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingTop: theme.spacing.paddingTopContent / 2,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  closeButton: {
    position: 'absolute',
    right: -10,
  },
  titleText: {
    fontSize: 14,
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
  },
  contentView: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.borderBox,
    paddingHorizontal: 14,
    paddingVertical: theme.spacing.paddingHorizontalContent / 2,
  },
  contentHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: theme.colors.borderBox,
    borderBottomWidth: 1,
    paddingBottom: theme.spacing.paddingHorizontalContent / 2,
  },
  contentHeaderLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentHeaderLeftText: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.textBold,
    marginLeft: 10,
  },
  addProductButton: {
    height: 38,
    width: 104,
  },
  swipeListView: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderBox,
    paddingVertical: theme.spacing.paddingHorizontalContent / 2,
  },
  contentDetailView: {
    paddingTop: theme.spacing.paddingVerticalContent,
    paddingBottom: theme.spacing.paddingVerticalContent / 2,
    borderBottomColor: theme.colors.borderBox,
    borderBottomWidth: 1,
  },
  textGroupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.paddingHorizontalContent / 2,
  },
  groupLeftText: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.textRegular,
  },
  groupRightText: {
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.textRegular,
  },
  storeView: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.borderBox,
    paddingHorizontal: 14,
    paddingVertical: theme.spacing.paddingHorizontalContent / 2,
    marginVertical: theme.spacing.marginVerticalContent / 2,
  },
  changeStoreButton: {
    height: 38,
    width: 104,
  },
  dotView: {
    backgroundColor: '#8DC0B9',
    width: 4,
    height: 4,
    marginRight: 7,
  },
  addressStoreView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  addressStoreText: {

  },
  paymentSelectButton: {
    marginLeft: 15
  },
  paymentSelectText: {
    color: theme.colors.textSecondBold
  },
  submitButton: {
    width: '95%',
    alignSelf: "center",
    paddingVertical: 20,
    borderRadius: 100
  }
});

export default styles;
