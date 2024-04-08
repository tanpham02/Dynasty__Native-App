import { HTMLProps } from 'react';
import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export interface SearchParams {
    searchText?: string;
    pageIndex?: number;
    pageSize?: number;
    status?: string;
    sort?: string;
    ascending?: boolean;
    [key: string]: any;
}

export enum ModelStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface BaseModel {
    _id: string;
    status: ModelStatus;
    createdAt: string;
    updatedAt: string;
}

export interface ListDataResponse<T> {
    data: T[];
    totalElement: number;
    pageIndex: number;
    pageSize: number;
    totalPage: number;
    isLastPage: boolean;
}

export interface FieldLabelProps {
    label?: string;
    isRequired?: boolean;
}

export interface FormBaseProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends FieldLabelProps {
    name: TName;
    rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    rootClassName?: HTMLProps<HTMLElement>['className'];
    wrapperClassName?: HTMLProps<HTMLElement>['className'];
    className?: HTMLProps<HTMLElement>['className'];
    placeholder?: string;
}

export interface OptionsType {
    label: string;
    value: string
}