import { HTMLProps } from 'react';
import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends TextInputProps {
  name: TName;
  label?: string;
  isRequired?: boolean;
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  wrapperClassName?: HTMLProps<HTMLElement>['className'];
  className?: HTMLProps<HTMLElement>['className'];
}
