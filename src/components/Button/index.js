import { Button, Link } from "./styled";

const ButtonComponent = ({ children, ...props }) => {
  return props.href 
    ? <Link {...props}>{children}</Link>
    : <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
