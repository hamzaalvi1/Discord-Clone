import { CSSProperties } from "react";
export interface FormData {
  [key: string]: string;
}
export interface InputFieldProps {
  type: string;
  name: string;
  control: any;
  variant?: string;
  labelText?: string;
  helperText?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isCustomInput?: boolean;
  styleProps?: {
    labelStyles?: CSSProperties;
    inputStyles?: CSSProperties;
    errorTextStyle?: CSSProperties;
  };
  errors?: any;
  InputLeftElements?: React.ElementType;
  InputRightElements?: React.ElementType;
}
