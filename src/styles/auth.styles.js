import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`;

const errorFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const AuthLoading = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;
  animation: ${pulse} 1.2s ease-in-out infinite;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.background.primary};

  label,
  input,
  button {
    font-size: 1rem;
    display: block;
  }

  label {
    color: ${({ theme }) => theme.colors.background.primary};
  }

  input {
    padding: 0.6rem 0.75rem;
    color: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.text.secondary};
    border-radius: 4px;

    &:focus-visible {
      outline: none;
      border-color: #555;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover {
      border-color: #999;
    }

    button:not(:disabled):hover {
      transform: translateY(-1px);
    }
  }

  @media (min-width: 768px) {
    max-width: 360px;
    padding: 1.2rem;
  }

  @media (min-width: 1024px) {
    max-width: 420px;
    padding: 1.5rem;

    input,
    button {
      font-size: 1.05rem;
    }
  }
`;

export const AuthError = styled.p`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: #b00020;
  background-color: rgba(176, 0, 32, 0.08);
  border-radius: 8px;
  text-align: center;
  animation: ${errorFadeIn} 0.3s ease-out;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
