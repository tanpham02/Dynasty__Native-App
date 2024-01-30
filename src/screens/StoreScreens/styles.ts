import { Platform, StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
  headerBarStyle: {
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.marginVerticalContent,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
  },
  inputView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    width: '65%',
  },
  textInput: {
    fontSize: 12,
    fontFamily: theme.fontFamily.medium,
    marginLeft: 10,
  },
  mapsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 10,
    borderRadius: 40,
    width: '33%',
    justifyContent: 'center',
  },
  mapsText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 14,
    color: theme.colors.textBold,
  },
  resultView: {},
  resultText: {
    fontSize: 12,
  },
  resultValueText: {
    color: theme.colors.textValueBold,
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
  },
  flatList: {
    marginTop: theme.spacing.marginTopContent,
  },
  storeListView: {
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
    flex: 1,
  },
  storeBtn: {
    flexDirection: 'row',
    marginVertical: 4,
    marginRight: Platform.OS === 'android' ? 160 : 0,
  },
  infoView: {
    marginHorizontal: theme.spacing.marginHorizontalContent / 2,
    justifyContent: 'space-between',
    marginVertical: 17,
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
  },
  bannerImage: {
    width: 105,
    height: 100,
    borderRadius: 9,
  },
  starValueText: {
    fontSize: 12,
  },
  addressText: {
    fontSize: 12,
    fontFamily: theme.fontFamily.medium,
  },
  distanceText: {
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: theme.fontFamily.medium,
  },
});

export default styles;
