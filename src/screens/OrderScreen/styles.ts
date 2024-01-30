import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
  },
  optionView: {
    marginVertical: theme.spacing.marginVerticalContent,
  },
  flatList: {
    marginBottom: theme.spacing.marginBottomContent
  },
  newProductBtn: {
    backgroundColor: '#E8EB95',
    paddingHorizontal: 19,
    paddingVertical: 7,
    marginRight: 10,
    borderRadius: 32,
  },
  newProductText: {},
  header: {
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.semiBold,
    marginVertical: 10
  }
});

export default styles;
