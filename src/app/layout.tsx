import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import { StyledThemeWrapper } from "@/theme/styled-theme-provider";
import StyledComponentsRegistry from "./lib/registry";
import { Analytics } from "@vercel/analytics/next";

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
          <ThemeProvider>
            <StyledThemeWrapper>
              {children}
              <Analytics debug={true} />
            </StyledThemeWrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
