import { FormSelectProps } from '../../Controller/Select/type';

export interface FormSelectUnControllerProps extends FormSelectProps {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}
