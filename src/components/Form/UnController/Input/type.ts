import { TextInputProps } from 'react-native';

import { FormBaseProps } from '@/types';

export interface FormInputProps extends FormBaseProps, TextInputProps {
  onChangeText?: (text: string) => void;
}
