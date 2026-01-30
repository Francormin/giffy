import { Button, Link } from "./styled";

const ButtonComponent = ({ children, ...props }) => {
  const isLink = props.href || props.to;

  return isLink
    ? <Link {...props}>{children}</Link>
    : <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
