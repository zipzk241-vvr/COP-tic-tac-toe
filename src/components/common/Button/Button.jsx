import { StyledButton } from "./Button.styles";

function Button({ children, onClick, variant = "primary", ...props }) {
  return (
    <StyledButton onClick={onClick} $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
