import styled from "styled-components";

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CartIcon = styled.div`
  color: ${({ theme }) => theme.currentSemantic.text};
  transition: color 0.2s ease;

  ${CartIconWrapper}:hover & {
    color: ${({ theme }) => theme.currentSemantic.primary};
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${({ theme }) => theme.currentSemantic.primary};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  min-width: 20px;
  animation: bounce 0.6s ease;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-3px);
    }
    60% {
      transform: translateY(-1px);
    }
  }
`;

export const Toast = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.currentSemantic.primary};
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  z-index: 1000;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
