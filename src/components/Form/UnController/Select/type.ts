import { FormSelectProps } from '../../Controller/Select/type';

export interface FormSelectUnControllerProps extends FormSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}
