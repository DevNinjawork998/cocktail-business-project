"use client";

import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useTheme } from "./theme-provider";
import { styledTheme } from "./styled-theme";

interface StyledThemeWrapperProps {
  children: React.ReactNode;
}

export function StyledThemeWrapper({ children }: StyledThemeWrapperProps) {
  const { theme } = useTheme();

  // Create theme object with light theme mode only
  const themeWithMode = {
    ...styledTheme,
    mode: theme,
    // Always use light theme semantic colors
    currentSemantic: {
      ...styledTheme.semantic,
    },
  };

  return (
    <StyledThemeProvider theme={themeWithMode}>{children}</StyledThemeProvider>
  );
}
