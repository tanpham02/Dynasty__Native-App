import { StyleSheet } from 'react-native';
import theme from 'src/themes';
import { widthScreen } from 'src/utils/systemUtils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {},
  titleText: {
    marginLeft: 32,
    fontSize: 14,
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
  },
  contentView: {
    alignItems: 'center',
    marginTop: theme.spacing.marginTopContent,
  },
  qrCodeImage: {
    width: widthScreen / 2,
    height: widthScreen / 2,
    objectFit: 'cover',
  },
  qrCodeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.marginTopContent,
    justifyContent: 'space-between',
    width: '32%',
  },
  codeText: {
    color: theme.colors.textSemiBold,
    fontFamily: theme.fontFamily.semiBold,
  },
  codeValueText: {
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
  },
  orderButton: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 17,
    borderRadius: 50,
  },
  expDateText: {
    textAlign: 'center',
  },
  descriptionView: {
    width: '90%',
    alignSelf: 'center',
  },
  descriptionText: {
    textAlign: 'left',
  },
});

export default styles;
