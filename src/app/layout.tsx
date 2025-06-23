import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";

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
        <ThemeProvider
          defaultTheme="light"
          storageKey="cocktail-business-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
