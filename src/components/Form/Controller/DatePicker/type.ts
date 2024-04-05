import { FieldPath, FieldValues } from 'react-hook-form';

import { FormBaseProps } from '@/types';

export interface FormDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FormBaseProps<TFieldValues, TName> {}
