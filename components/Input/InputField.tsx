"use client";
import { CSSProperties } from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input as ChakraInput,
  InputLeftElement,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  formControlStyles,
  defaultLabelStyles,
  defaultInputStyles,
  defaultErrorStyles,
} from "./styles";

interface InputFieldProps {
  name: string;
  type: string;
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
  error?: string | undefined;
  InputLeftElements?: React.ElementType;
  InputRightElements?: React.ElementType;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    error,
    name,
    control,
    type = "text",
    labelText,
    styleProps,
    placeholder,
    helperText,
    isDisabled = false,
    isReadOnly = false,
    variant,
    InputRightElements,
    InputLeftElements,
    isCustomInput = false,
  } = props;

  return isCustomInput ? (
    <InputGroup sx={{ ...formControlStyles, ...styleProps }}>
      {InputLeftElements && (
        <InputLeftElement>
          <InputLeftElements />
        </InputLeftElement>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <ChakraInput
            {...field}
            type={type}
            id={name}
            variant={variant}
            placeholder={placeholder}
            sx={{ ...defaultInputStyles, ...styleProps?.inputStyles }}
          />
        )}
      />

      {InputRightElements && (
        <InputRightElement>
          <InputRightElements />
        </InputRightElement>
      )}
    </InputGroup>
  ) : (
    <FormControl
      sx={{ ...formControlStyles, ...styleProps }}
      isInvalid={!!error}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
    >
      {labelText && (
        <FormLabel
          sx={{
            ...defaultLabelStyles,
            defaultInputStyles,
            ...styleProps?.labelStyles,
          }}
        >
          {labelText}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <ChakraInput
            {...field}
            type={type}
            id={name}
            variant={variant}
            placeholder={placeholder}
            sx={{ ...defaultInputStyles, ...styleProps?.inputStyles }}
          />
        )}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && (
        <FormErrorMessage
          as="span"
          sx={{ ...styleProps?.errorTextStyle, ...defaultErrorStyles }}
        >
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
