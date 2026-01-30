import styled from "@emotion/styled";
import Button from "components/Button";

export const CategoryContainer = styled.div`
  padding: 1rem 0;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

/**
 * Extendemos Button
 * NO reinventamos estilos de botón
 */
export const CategoryItem = styled(Button)`
  background-color: rgba(255, 255, 255, 0.08);

  @media (hover: hover) {
    &:not(:disabled):not([aria-disabled="true"]):hover {
      background-color: rgba(255, 255, 255, 0.15);
      color: ${({ theme }) => theme.colors.text.primary};
      transform: translateY(-1px);
    }
  }
`;
