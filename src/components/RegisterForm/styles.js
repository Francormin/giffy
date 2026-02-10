import styled from "@emotion/styled";

export const AuthFormWrapper = styled.div`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : null)};
  width: 100%;
`;

export const InputErrorWrapper = styled.div`
  ${({ hasError }) =>
    hasError &&
    `
      input,
      input:hover,
      input:focus,
      input:focus-visible {
        border-color: #b01;
        box-shadow: 0 0 0 2px rgba(176, 0, 17, 0.15);
      }
    `}
`;

export const ValidationError = styled.small`
  color: #b01;
  margin-top: -8px;
  display: block;
`;
