import { InterfaceSelectProps } from 'native-base/lib/typescript/components/primitives/Select/types';
import { ReactNode } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

import { FormBaseProps } from '@/types';

export interface SelectOptions {
  label: ReactNode | any;
  value: any;
}

export interface FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends InterfaceSelectProps,
    FormBaseProps<TFieldValues, TName> {
  borderColor?: string;
  options: Array<SelectOptions>;
  allowClear?: boolean;
  isFormController?: boolean;
}
