import { HTMLProps } from "react";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { NeatDatePickerProps } from "react-native-neat-date-picker/src/components/NeatDatePicker.d";

export interface FormDatePickerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    name: TName;
    label?: string;
    isRequired?: boolean;
    rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    placeholder?: string
    wrapperClassName?: HTMLProps<HTMLElement>['className'];
    // className?: HTMLProps<HTMLElement>['className'];
}
