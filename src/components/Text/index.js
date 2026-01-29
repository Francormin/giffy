import { StyledText } from "./styles";

const Text = ({ as = "p", variant = "body", children, ...props }) => {
  return (
    <StyledText as={as} variant={variant} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
