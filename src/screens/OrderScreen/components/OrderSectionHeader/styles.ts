import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  headerView: {
    paddingVertical: theme.spacing.paddingVerticalContent / 2,
    backgroundColor: theme.colors.background
  },
  headerText: {
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.semiBold,
    marginVertical: 10,
  },
});

export default styles;
