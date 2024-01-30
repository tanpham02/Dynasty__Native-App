import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
  },
  titleText: {
    fontFamily: theme.fontFamily.semiBold,
    color: theme.colors.textButton,
    fontSize: 14,
    marginLeft: 5,
  },
});

export default styles;
