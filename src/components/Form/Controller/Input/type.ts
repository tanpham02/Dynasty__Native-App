import { FieldPath, FieldValues } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { FormBaseProps } from '@/types';

export interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends TextInputProps,
    FormBaseProps<TFieldValues, TName> {}
