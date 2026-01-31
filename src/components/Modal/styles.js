import styled from "@emotion/styled";

export const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);

  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};

  position: relative;
  border-radius: 12px;

  padding: 1.3rem 0.8rem;
  width: calc(100vw - 3rem);
  max-width: 460px;
  max-height: 90vh;

  overflow-y: auto;

  @media (min-width: 1024px) {
    max-width: 520px;
    padding: 1.5rem 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;

  background: transparent;
  border: none;
  padding: 0.25rem;

  font-size: 0.9rem;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text.secondary};

  @media (hover: hover) {
    &:hover {
      opacity: 0.75;
    }
  }
`;
