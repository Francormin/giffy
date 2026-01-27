import { Link as WouterLink } from "wouter";
import styled from "@emotion/styled";

import { buttonBase, buttonDisabled, buttonFocus } from "./styles";
import { variants } from "./styles";
import { sizes } from "./styles";

export const Link = styled(WouterLink)`
  ${({ theme }) => buttonBase(theme)};

  ${({ theme, variant = "primary" }) => variants[variant].base(theme)};
  ${({ size = "md" }) => sizes[size]};

  &:disabled,
  &[aria-disabled="true"] {
    ${buttonDisabled};
  }

  &:not(:disabled):not([aria-disabled="true"]):hover {
    ${({ theme, variant = "primary" }) => variants[variant].hover(theme)};
  }

  &:focus-visible {
    ${({ theme }) => buttonFocus(theme)};
  }
`;

export const Button = Link.withComponent("button");
