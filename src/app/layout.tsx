import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import { StyledThemeWrapper } from "@/theme/styled-theme-provider";
import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Cocktail Business",
  description: "A sophisticated cocktail business application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider
            defaultTheme="light"
            storageKey="cocktail-business-theme"
          >
            <StyledThemeWrapper>{children}</StyledThemeWrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
