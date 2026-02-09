import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  max-width: 420px;
  margin: 25px auto 35px;
`;

export const MainRow = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 360px) {
    flex-direction: column-reverse;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 14px 16px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.background.primary};
  background-color: ${({ theme }) => theme.colors.text.secondary};

  &::placeholder {
    opacity: 0.7;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.brand.primary};
  }
`;

export const FiltersRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 660px) {
    flex-wrap: nowrap;
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 13px;
  border: none;
  outline: none;

  color: ${({ theme }) => theme.colors.background.primary};
  background-color: ${({ theme }) => theme.colors.text.secondary};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brand.primary};
  }

  @media (min-width: 660px) {
    min-width: 190px;
  }
`;
