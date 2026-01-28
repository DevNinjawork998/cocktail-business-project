import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.currentSemantic.background};
  padding-top: 4rem; /* Account for fixed navigation bar */
`;
