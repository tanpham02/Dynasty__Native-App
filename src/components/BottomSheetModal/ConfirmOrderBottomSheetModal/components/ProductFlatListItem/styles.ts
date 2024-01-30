import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: theme.spacing.marginHorizontalContent / 2,
  },
  dotView: {
    backgroundColor: '#8DC0B9',
    width: 4,
    height: 4,
    marginRight: 7
  },
  bannerImage: {
    height: 53,
    width: 53,
    borderRadius: 10,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoView: {
    marginLeft: theme.spacing.marginLeftContent,
  },
  productText: {
    marginVertical: 2,
  },
  quantityText: {
    marginVertical: 2,
  },
  rightView: {},
});

export default styles;
