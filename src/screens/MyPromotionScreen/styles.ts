import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
  },
  headerTabView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: theme.spacing.marginVerticalContent,
    gap: 10,
  },
  tabButton: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '46%',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: "center"
  },
  titleTabButtonText: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 12,
    color: theme.colors.textBold,
  },
  tabButtonActive: {
    backgroundColor: theme.colors.background,
  },
});

export default styles;
