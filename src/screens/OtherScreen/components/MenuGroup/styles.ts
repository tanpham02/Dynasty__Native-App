import { StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 23
  },
  menuLabel: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.darkBlue200
  },
  menuList: {
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.gray200,
    marginTop: 13,
    borderRadius: 10,
    paddingHorizontal: 14
  },
  menuItem: {
    display: "flex",
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7
  },
  menuText: {
    flex: 1,
    marginLeft: 7,
    fontSize: 12,
    lineHeight: 20,
    color: theme.colors.black,
    fontFamily: theme.fontFamily.regular
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: theme.colors.gray200,
  }
});

export default styles;
