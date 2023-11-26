import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
// SystemStyleObject
interface ButtonProps extends ChakraButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  variant?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  styleProps?: React.CSSProperties;
  handleClick?: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  const {
    title,
    handleClick,
    variant = "primary",
    rightIcon,
    leftIcon,
    styleProps,
    className,
    loading = false,
    type = "button",
    children,
    disabled = false,
    ...rest
  } = props;

  return (
    <ChakraButton
      type={type}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={handleClick}
      variant={variant}
      sx={styleProps}
      className={className}
      isLoading={loading}
      isDisabled={disabled}
      {...rest}
    >
      {title}
    </ChakraButton>
  );
};

export default Button;
