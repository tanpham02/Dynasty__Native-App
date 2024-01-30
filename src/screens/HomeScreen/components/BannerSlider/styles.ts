import { StyleSheet } from 'react-native';
import { widthScreen } from 'src/utils/systemUtils';

export const bannerWidth = widthScreen * (3 / 4);

const styles = StyleSheet.create({
  bannerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: bannerWidth,
    borderRadius: 15,
    overflow: 'hidden',
    height: 165
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  itemSeparator: {
    width: 10,
  },
  flatList: {
    flexGrow: 0,
  },

});

export default styles;
