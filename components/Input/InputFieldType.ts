import { CSSProperties } from "react";

export interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  variant?: string;
  placeholder?: string;
  labelText?: string;
  errorText?: string;
  helperText?: string;
  onChange?: () => void;
  onBlur?: () => void;
  label?: boolean;
  error?: boolean;
  isHelper?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isCustomInput?: boolean;
  styleProps?: CSSProperties;
  labelStyles?: CSSProperties;
  inputStyles?: CSSProperties;
  errorTextStyle?: CSSProperties;
  InputLeftElements?: React.ElementType;
  InputRightElements?: React.ElementType;
}
