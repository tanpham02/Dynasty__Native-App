import { StyleSheet, View } from 'react-native';
import theme from 'src/themes';

const SeparatorFlatListItem = () => {
  return <View style={styles.container}></View>;
};

export default SeparatorFlatListItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: theme.colors.borderBox,
  },
});
