import { CSSProperties } from "react";

export interface InputFieldProps {
  type: string;
  name: string;
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
  error?: {};
  InputLeftElements?: React.ElementType;
  InputRightElements?: React.ElementType;
} 

export interface FormData {
  [key: string]: string;
}