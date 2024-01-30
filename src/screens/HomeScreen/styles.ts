import { StyleSheet } from 'react-native';
import theme from 'src/themes';
import { heightScreen } from 'src/utils/systemUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.background,
    marginTop: -(heightScreen / 4), 
  },
  contentView: {
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
    paddingVertical: theme.spacing.paddingVerticalContent,
  },
  imageBackground: {
    height: heightScreen / 4,
  },
});

export default styles;
