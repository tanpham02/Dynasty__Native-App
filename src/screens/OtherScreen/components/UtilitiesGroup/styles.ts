import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  utilitiesLabel: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.darkBlue200,
    fontSize: 16,
    lineHeight: 20
  },
  utilitiesGroup: {
    marginTop: 14,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4
  },
  utilitiesItem: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
    gap: 11,
    borderRadius: 10,
    flexBasis: "100%",
    maxWidth: "49%",
    flex: 1,
    height: 59,
    marginVertical: 4,
    marginHorizontal: -2
  },
  utilitiesText: {
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
    fontFamily: theme.fontFamily.medium
  }
});

export default styles;
