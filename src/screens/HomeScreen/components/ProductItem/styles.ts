import { StyleSheet } from 'react-native';
import theme from 'src/themes';
import { widthScreen } from 'src/utils/systemUtils';

export const bannerWidth = widthScreen * (3 / 4);
const styles = StyleSheet.create({
  promotionCardView: {
    marginVertical: 10,
    width: bannerWidth / 2,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: bannerWidth / 2,
    borderRadius: 15,
  },
  infoGroupView: {
    // marginHorizontal: theme.spacing.marginHorizontalContent * 1.5,
    // justifyContent: "space-between",
    paddingVertical: 15,
  },
  infoView: {
    flexDirection: 'column',
  },
  productNameText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
    color: theme.colors.textBold,
  },
  productPriceText: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.textValueBold,
    fontSize: 12,
    marginTop: 10,
  },
});

export default styles;
