import styled, { css } from "styled-components";

export const Section = styled.section`
  margin: 4rem auto 0 auto;
  max-width: 800px;
  padding: 2rem;
  background: ${({ theme }) => theme.semantic.background};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
`;

export const Headline = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Intro = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.semantic.text};
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const IngredientList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

export const IngredientItem = styled.li<{ $typecolor: string }>`
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  background: ${({ $typecolor }) => $typecolor};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const IngredientHeader = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.semantic.backgroundSecondary};
  }
`;

export const IngredientIcon = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
`;

export const IngredientName = styled.span`
  flex: 1;
  text-align: left;
`;

export const ChevronIcon = styled.span<{ open: boolean }>`
  font-size: 1.2rem;
  margin-left: 1rem;
  transition: transform 0.3s;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const IngredientDropdown = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "200px" : "0")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
  background: ${({ theme }) => theme.semantic.backgroundSecondary};
  padding: ${({ open }) => (open ? "1rem 1.5rem" : "0 1.5rem")};
`;

export const IngredientDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.semantic.textSecondary};
  font-size: 1rem;
`;
