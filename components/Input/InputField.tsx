"use client";
import { Controller } from "react-hook-form";
import { InputFieldProps, FormData } from "./InputFieldType";
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
} from "./styles";

const InputField = (props: InputFieldProps) => {
  const {
    errors,
    name,
    type = "text",
    control,
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
        render={({ field }) => (
          <ChakraInput
            {...field}
            type={type}
            id={name}
            variant={variant}
            placeholder={placeholder}
            sx={{ ...defaultInputStyles, ...styleProps?.inputStyles }}
            border={"1px solid"}
            borderColor={"lightGrey"}
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
      isInvalid={!!errors[name]}
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
        render={({ field }) => (
          <ChakraInput
            {...field}
            type={type}
            id={name}
            variant={variant}
            placeholder={placeholder}
            sx={{ ...defaultInputStyles, ...styleProps?.inputStyles }}
            border={"1px solid"}
            borderColor={"lightGrey"}
          />
        )}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errors && errors[name] && (
        <FormErrorMessage sx={styleProps?.errorTextStyle}>
          {errors && errors[name]?.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
