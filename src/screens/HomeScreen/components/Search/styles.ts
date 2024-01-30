import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
    paddingVertical: theme.spacing.paddingVerticalContent / 2,
    width: '100%',
  },
  searchView: {
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: theme.colors.borderBox,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  optionView: {
    flexDirection: 'row',
    marginVertical: theme.spacing.marginVerticalContent,
  },
  newProductBtn: {
    backgroundColor: '#E8EB95',
    paddingHorizontal: 19,
    paddingVertical: 7,
    marginRight: 10,
    borderRadius: 32,
  },
  newProductText: {},
  flatList: {}
});

export default styles;
