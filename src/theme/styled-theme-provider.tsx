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

  // Create theme object with current theme mode
  const themeWithMode = {
    ...styledTheme,
    mode: theme,
    // Dynamic semantic colors based on current theme
    currentSemantic:
      theme === "dark"
        ? {
            ...styledTheme.semantic,
            ...styledTheme.darkMode,
          }
        : styledTheme.semantic,
  };

  return (
    <StyledThemeProvider theme={themeWithMode}>{children}</StyledThemeProvider>
  );
}
