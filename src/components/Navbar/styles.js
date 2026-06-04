import styled from "@emotion/styled";
import { Link } from "wouter";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const actionStyles = theme => ({
  color: theme.colors.text.secondary,
  fontWeight: theme.typography.fontWeight.bold,
  textDecoration: "none",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline"
  }
});

export const NavbarLink = styled(Link)(({ theme }) => ({
  ...actionStyles(theme)
}));

export const NavbarButton = styled.button(({ theme }) => ({
  ...actionStyles(theme),

  background: "none",
  border: "none",
  padding: 0,
  fontFamily: "inherit",
  fontSize: "inherit"
}));
