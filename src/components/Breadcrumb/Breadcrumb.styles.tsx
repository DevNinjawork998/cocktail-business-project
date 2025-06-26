import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.currentSemantic.borderLight};
  background-color: ${({ theme }) => theme.currentSemantic.surface};
`;

export const BreadcrumbWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const BreadcrumbLink = styled.div`
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const BreadcrumbSeparator = styled.span`
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  font-size: 0.875rem;
  opacity: 0.6;
`;
