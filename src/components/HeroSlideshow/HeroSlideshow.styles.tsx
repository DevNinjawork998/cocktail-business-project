import styled from "styled-components";

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Dot = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 6px;
  background: ${({ active, theme }) =>
    active ? theme.semantic.primary : theme.semantic.backgroundSecondary};
  border: none;
  cursor: pointer;
  transition: background 0.2s;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffe9a7 0%, #fbe89e 100%);
  border-radius: 1.5rem;
  font-size: 3rem;
  color: #c74c3d;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
`;

export const PlaceholderLabel = styled.div`
  font-size: 1.2rem;
  color: #451515;
  margin-top: 0.5rem;
`;
