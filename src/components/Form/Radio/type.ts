import { IRadioGroupProps, InterfaceRadioProps } from 'native-base/lib/typescript/components/primitives/Radio/types';
import { HTMLProps, ReactNode } from 'react';
import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export interface FormRadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends IRadioGroupProps {
  fieldName: TName;
  children: ReactNode;
  label?: string;
  isRequired?: boolean;
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  wrapperClassName?: HTMLProps<HTMLElement>['className'];
  className?: HTMLProps<HTMLElement>['className'];
}
