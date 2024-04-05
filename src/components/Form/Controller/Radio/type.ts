import { IRadioGroupProps } from 'native-base/lib/typescript/components/primitives/Radio/types';
import { ReactNode } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

import { FormBaseProps } from '@/types';

export interface FormRadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends IRadioGroupProps,
    FormBaseProps<TFieldValues, TName> {
  fieldName: TName;
  children: ReactNode;
  name: TName; // conflict with field name of IRadioGroupProps
}
