import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move half the content width for seamless loop of duplicated content */
  }
`;

export const BannerContainer = styled.div`
  background-color: ${({ theme }) => theme.currentSemantic.primary};
  color: ${({ theme }) => theme.currentSemantic.text};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  overflow: hidden;
  position: relative;
  z-index: 20;
  width: 100%;
  /* Removed white-space: nowrap; from here */
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  width: fit-content; /* Allow content to dictate width */
  animation: ${marquee} 30s linear infinite; /* Apply animation here */

  /* Ensure items within BannerContent are displayed inline and have spacing */
  & > * {
    margin-right: ${({ theme }) => theme.spacing.lg}; /* Space between items */
    flex-shrink: 0; /* Prevent items from shrinking */
  }
`;

export const BannerText = styled.p`
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: 60px; /* Adjust height as needed */
  vertical-align: middle;
`;

export const BannerImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.sm};
`;
