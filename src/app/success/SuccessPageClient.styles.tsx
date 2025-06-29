import styled from "styled-components";
import { media } from "@/theme/styled-theme";

export const SuccessContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.currentSemantic.background};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lg} {
    padding: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const SuccessContent = styled.div`
  max-width: 800px;
  width: 100%;
  background: ${({ theme }) => theme.currentSemantic.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  text-align: center;
`;

export const SuccessIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SuccessTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.royalOrange.base};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${media.md} {
    font-size: 3rem;
  }
`;

export const SuccessMessage = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

export const OrderDetails = styled.div`
  background: ${({ theme }) => theme.colors.caramel.light};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: left;
`;

export const OrderDetailsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.chocolateKisses.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const OrderDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const OrderItemName = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.currentSemantic.text};
  flex: 1;
`;

export const OrderItemQuantity = styled.span`
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  margin: 0 ${({ theme }) => theme.spacing.md};
`;

export const OrderItemPrice = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.royalOrange.base};
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.chocolateKisses.base};
  color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: 1.125rem;
`;

export const CustomerInfo = styled.div`
  background: ${({ theme }) => theme.colors.caramel.light};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: left;
`;

export const CustomerInfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.chocolateKisses.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const CustomerInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CustomerInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.currentSemantic.border};

  &:last-child {
    border-bottom: none;
  }

  ${media.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const CustomerInfoLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.currentSemantic.text};
  min-width: 100px;

  ${media.sm} {
    min-width: auto;
  }
`;

export const CustomerInfoValue = styled.span`
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  text-align: right;
  flex: 1;

  ${media.sm} {
    text-align: left;
  }
`;

export const BackToShopButton = styled.button`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.royalOrange.base},
    ${({ theme }) => theme.colors.bittersweetShimmer.base}
  );
  color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  ${({ theme }) => theme.spacing["2xl"]};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  font-weight: bold;
  font-size: 1.125rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const LoadingMessage = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  text-align: center;
`;
