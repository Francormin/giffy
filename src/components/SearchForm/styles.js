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

  color: var(--primary-background-color);
  background-color: var(--secondary-font-color);

  &::placeholder {
    opacity: 0.7;
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--secondary-background-color);
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

  color: var(--primary-background-color);
  background-color: var(--secondary-font-color);

  &:focus {
    outline: 2px solid var(--secondary-background-color);
  }

  @media (min-width: 660px) {
    min-width: 190px;
  }
`;
