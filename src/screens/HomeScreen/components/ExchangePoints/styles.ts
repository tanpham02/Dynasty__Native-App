import { StyleSheet } from 'react-native';
import theme from 'src/themes';
import { widthScreen } from 'src/utils/systemUtils';

export const bannerWidth = widthScreen * (3 / 4);

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.marginVerticalContent,
  },
  flatList: {
    flexGrow: 0,
  },
  itemSeparator: {
    width: 10,
  },
  promotionCardView: {
    marginVertical: 10,
    width: bannerWidth,
    flexDirection: 'row',
    overflow: 'hidden',
    height: 99,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.borderBox
  },
  bannerImage: {
    width: 105,
    height: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  infoGroupView: {
    paddingHorizontal: theme.spacing.marginHorizontalContent * 1.5,
    justifyContent: "space-between",
    paddingVertical: 11,
  },
  infoView: {
    flexDirection: "column",
    // flexWrap: "wrap"
  },
  productNameText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
    color: theme.colors.textBold,
    marginRight: 100
  },
  productPriceText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 12,
    textDecorationLine: "line-through"
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exchangePointText: {
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
    fontSize: 16,
  },
  readMoreText: {
    color: theme.colors.textSecondBold,
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
  },
  havePointText: {
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.textNormal,
    fontSize: 12,
    marginTop: 6,
  },
  havePointValueText: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.textValueBold,
    fontSize: 12,
  },
  exchangePointBtn: {
    // alignSelf: "flex-end"
    position: "absolute",
    bottom: 10,
    right: 10
  },
  gradientBox: {
    borderRadius: 16.5,
    shadowColor: 'rgba(145, 194, 184, 0.50)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    width: 90,
    height: 33,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 12,
    color: theme.colors.textButton,
    fontFamily: theme.fontFamily.bold
  }
});

export default styles;
