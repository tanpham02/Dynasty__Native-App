import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: theme.spacing.paddingVerticalContent / 2
  },
  infoView: {
    marginHorizontal: 8,
    justifyContent: "space-around"
  },
  bannerImage: {
    borderRadius: 10
  },
  titleText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
    color: theme.colors.textBold
  },
  descriptionText: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 12,
    color: theme.colors.textNormal
  }
});

export default styles;
