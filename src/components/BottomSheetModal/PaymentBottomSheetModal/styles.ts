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
  contentView: {},
  titleContentText: {
    color: theme.colors.textRegular,
    fontFamily: theme.fontFamily.regular,
  },
  flatList: {
    marginVertical: theme.spacing.marginVerticalContent,
  },
});

export default styles;
