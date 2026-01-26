import { Link } from "wouter";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  display: inline-block;
  color: var(--primary-font-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: border 0.2s ease, transform 0.2s ease;

  :hover {
    border: 1px solid var(--primary-font-color);
    transform: translateY(-2px);
  }
`;

const Button = ({ children, href }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
}
 
export default Button;
