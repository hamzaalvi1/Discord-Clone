"use client";
import { CSSProperties } from "react";
import { InputProps } from "@chakra-ui/react";
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
    iconStyles?: CSSProperties;
  };
  error?: string | undefined;
  inputLeftElements?: React.ElementType;
  inputRightElements?: React.ElementType;
  [key: string]: unknown; // Additional properties can have any name and any type
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
    inputRightElements: InputRightElements,
    inputLeftElements: InputLeftElements,
    ...rest
  } = props;

  return (
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
      <InputGroup>
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
              {...rest}
            />
          )}
        />
        {InputRightElements && (
          <InputRightElement>
            <InputRightElements style={{ ...styleProps?.iconStyles }} />
          </InputRightElement>
        )}
      </InputGroup>
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
