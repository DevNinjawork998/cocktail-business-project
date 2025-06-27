import styled from "styled-components";

// Styled Components
export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.currentSemantic.background};
  border-bottom: 1px solid ${({ theme }) => theme.currentSemantic.border};
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;
`;

export const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const DesktopNavLinks = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
    }
  `}
`;

export const NavLink = styled.div`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  font-weight: 500;
  transition: color 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.currentSemantic.foreground};
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `}
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      flex: none;
    }
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
`;

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.royalOrange.base};
`;

export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesktopRightNav = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
    }
  `}
`;

export const ThemeButton = styled.button`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  transition: color 0.2s ease;
  font-size: 0.875rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

export const IconButton = styled.a`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  transition: color 0.2s ease;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: ${({ theme }) => theme.semantic.secondary};
  color: white;
  font-size: 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileCartBadge = styled(CartBadge)`
  width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
`;

export const MobileIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `}
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-top: 1px solid ${({ theme }) => theme.currentSemantic.border};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `}
`;

export const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const MobileNavLink = styled.div`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  transition: color 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;
