import { StyleSheet, View } from 'react-native';

const SeparatorItem = () => {
    return (
        <View style={styles.separatorItem} />
    )
}

export default SeparatorItem;

const styles = StyleSheet.create({
  separatorItem: {
    width: 10,
    height: 10
  },
});
