import { InterfaceSelectProps } from 'native-base/lib/typescript/components/primitives/Select/types';
import { HTMLProps, ReactNode } from 'react';
import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export interface SelectOptions {
  label: ReactNode | any;
  value: any;
}

export interface FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends InterfaceSelectProps {
  name: TName;
  borderColor?: string;
  options: Array<SelectOptions>;
  allowClear?: boolean;
  label?: string;
  isRequired?: boolean;
  isFormController?: boolean;
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  wrapperClassName?: HTMLProps<HTMLElement>['className'];
  className?: HTMLProps<HTMLElement>['className'];
}
