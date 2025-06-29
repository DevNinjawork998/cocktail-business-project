import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import { StyledThemeWrapper } from "@/theme/styled-theme-provider";
import StyledComponentsRegistry from "./lib/registry";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/contexts/CartContext";
import Script from "next/script";

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
      <head>
        <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <StyledThemeWrapper>
              <CartProvider>
                {children}
                <Analytics debug={true} />
              </CartProvider>
            </StyledThemeWrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
