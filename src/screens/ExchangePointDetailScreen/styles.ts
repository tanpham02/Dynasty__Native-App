import { StatusBar, StyleSheet } from 'react-native';
import theme from 'src/themes';
import { heightScreen, widthScreen } from 'src/utils/systemUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -(heightScreen / 3.5),
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {},
  titleText: {
    marginLeft: 32,
    fontSize: 14,
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
  },
  bannerImage: {
    width: '100%',
    height: heightScreen / 2.7,
  },
  contentView: {
    alignItems: 'center',
    marginTop: heightScreen / 4,
  },
  bannerPromotionImage: {
    width: widthScreen / 2,
    height: widthScreen / 2,
    objectFit: 'cover',
    borderRadius: 10,
  },
  infoTextView: {
    marginVertical: theme.spacing.marginVerticalContent,
  },
  titlePromotionText: {
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
  },
  expDatePromotionText: {
    marginTop: 5,
  },
  descriptionTextView: {},
  descriptionText: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.textRegular,
  },
  buttonSubmit: {
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 17,
  },
});

export default styles;
