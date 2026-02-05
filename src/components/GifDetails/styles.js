import styled from "@emotion/styled";

export const Container = styled.section`
  max-width: 1100px;
  margin: 1rem auto 1.2rem;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Media = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    object-fit: contain;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Meta = styled.div`
  display: flex;
  gap: 10px;
`;

export const Badge = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
