import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
    paddingVertical: theme.spacing.paddingVerticalContent
  },
  flatList: {},
});

export default styles;
