import { StatusBar, StyleSheet } from 'react-native';
import theme from 'src/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingTop: theme.spacing.paddingTopContent / 2,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
  },
  backdropMaskColor: {
    color: 'rgba(42, 100, 163, 0.30)',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  closeButton: {
    position: 'absolute',
    right: -10,
  },
  titleText: {
    fontSize: 14,
    color: theme.colors.textBold,
    fontFamily: theme.fontFamily.bold,
  },
  scrollView: {},
  contentView: {},
  priceText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
    color: theme.colors.textValueBold,
  },
  descriptionText: {
    color: theme.colors.textRegular,
    fontFamily: theme.fontFamily.regular,
    marginTop: 15,
    marginBottom: 5,
  },
  readMoreText: {
    color: theme.colors.textSecondBold,
    fontFamily: theme.fontFamily.medium,
  },
  radioButtonGroupView: {
    marginTop: 20,
  },
  radioButtonOptionView: {
    marginVertical: 5,
  },
  optionTitleText: {
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.textRegular,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: theme.colors.textBold,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  radioInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonPriceText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 12,
    color: theme.colors.textValueBold,
  },
  radioButtonNameText: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.textRegular,
    marginLeft: 5,
  },
  noteInputText: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: theme.colors.borderBox,
    borderRadius: 10,
    minHeight: 80,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
    marginBottom: 50,
  },
  bottomView: {
    bottom: 20,
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  numberView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberButton: {
    height: 45,
    width: 45,
    backgroundColor: '#6BA3D4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 10,
  },
  valueText: {
    fontSize: 14,
  },
  numberButtonText: {
    color: '#fff',
  },
  submitButton: {
    width: '80%',
    paddingVertical: 15,
  },
});

export default styles;
