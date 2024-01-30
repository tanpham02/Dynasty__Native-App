import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.borderBox,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  bannerImage: {
    width: 119,
    height: 112,
    borderRadius: 9,
  },
  contentView: {
    marginHorizontal: theme.spacing.marginHorizontalContent,
    justifyContent: 'space-between',
    marginVertical: 8,
    width: '100%',
  },
  infoView: {},
  titleText: {
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
    marginRight: 130,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.textValueBold
  },
  submitBtn: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 4,
    right: 4,
    height: 33,
    width: 33,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center"
  },
});

export default styles;
