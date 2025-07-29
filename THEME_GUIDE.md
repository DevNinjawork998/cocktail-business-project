# Cocktail Business Theme System

This project uses a comprehensive theme system based on styled-components with a sophisticated cocktail-inspired color palette. The theme provides consistent styling across the application with support for both light and dark modes.

## Color Palette

The theme is built around five core colors:

- **Chocolate Kisses** (`#451515`) - Deep, rich brown - Primary color
- **Mauvelous** (`#EA9DAE`) - Soft mauve pink - Primary light
- **Caramel** (`#FBE89E`) - Warm caramel yellow - Accent color
- **Royal Orange** (`#F89256`) - Vibrant orange - Secondary color
- **Bittersweet Shimmer** (`#C74C3D`) - Rich red - Danger/Alert color

## Usage

### 1. Styled-components with Theme

The theme provides a comprehensive styled-components theme object that can be used throughout your components:

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.chocolateKisses};
  color: ${(props) => props.theme.colors.caramel};
  border: 1px solid ${(props) => props.theme.colors.mauvelous};
  padding: 12px 24px;
  border-radius: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
```

### 2. Theme Provider

Wrap your application with the `StyledThemeProvider` to enable theme access:

```tsx
import { StyledThemeProvider } from "@/theme/styled-theme-provider";

function App() {
  return <StyledThemeProvider>{/* Your app content */}</StyledThemeProvider>;
}
```

### 3. TypeScript Integration

Import and use the theme colors in your TypeScript/JavaScript code:

```tsx
import { colors, semanticColors } from "@/theme";

// Direct color values
const primaryColor = colors.chocolateKisses; // '#451515'

// Semantic color assignments
const buttonColor = semanticColors.primary; // '#451515'
```

### 4. Theme Hook

Use the `useTheme` hook to access theme functionality:

```tsx
import { useTheme } from "@/theme";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
```

## Semantic Color Assignments

The theme includes semantic color assignments for common UI elements:

- **Primary**: Chocolate Kisses - Main brand color
- **Primary Light**: Mauvelous - Lighter brand color for highlights
- **Secondary**: Royal Orange - Secondary actions and highlights
- **Accent**: Caramel - Accent elements and call-to-actions
- **Danger**: Bittersweet Shimmer - Error states and destructive actions

## Component Styling Structure

### File Organization

Each component follows a consistent structure:

```text
src/components/ComponentName/
├── ComponentName.tsx          # Main component logic
├── ComponentName.styles.tsx   # Styled-components definitions
└── __tests__/
    └── ComponentName.test.tsx # Component tests
```

### Styled Component Example

```tsx
// ComponentName.styles.tsx
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.medium};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.surfaceHover};
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.typography.sizes.large};
  font-weight: ${(props) => props.theme.typography.weights.bold};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const Button = styled.button<{
  variant?: "primary" | "secondary" | "accent" | "danger";
}>`
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.colors.chocolateKisses;
      case "secondary":
        return props.theme.colors.royalOrange;
      case "accent":
        return props.theme.colors.caramel;
      case "danger":
        return props.theme.colors.bittersweetShimmer;
      default:
        return props.theme.colors.chocolateKisses;
    }
  }};
  color: ${(props) => props.theme.colors.text.onPrimary};
  border: none;
  padding: ${(props) => props.theme.spacing.small} ${(props) =>
      props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: ${(props) => props.theme.typography.sizes.medium};
  font-weight: ${(props) => props.theme.typography.weights.medium};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
```

### Component Implementation

```tsx
// ComponentName.tsx
import React from "react";
import { Container, Title, Button } from "./ComponentName.styles";

interface ComponentNameProps {
  title: string;
  onAction?: () => void;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  onAction,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button variant="primary" onClick={onAction}>
        Action
      </Button>
    </Container>
  );
};
```

## Theme Structure

### Colors

```typescript
colors: {
  // Core palette
  chocolateKisses: '#451515',
  mauvelous: '#EA9DAE',
  caramel: '#FBE89E',
  royalOrange: '#F89256',
  bittersweetShimmer: '#C74C3D',

  // Semantic colors
  primary: '#451515',
  primaryLight: '#EA9DAE',
  secondary: '#F89256',
  accent: '#FBE89E',
  danger: '#C74C3D',

  // UI colors
  surface: '#FFFFFF',
  surfaceHover: '#F5F5F5',
  border: '#E0E0E0',
  text: {
    primary: '#333333',
    secondary: '#666666',
    onPrimary: '#FFFFFF',
  }
}
```

### Typography

```typescript
typography: {
  fontFamily: {
    primary: 'Geist, sans-serif',
    secondary: 'system-ui, sans-serif',
  },
  sizes: {
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
    xxlarge: '32px',
  },
  weights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  }
}
```

### Spacing

```typescript
spacing: {
  xs: '4px',
  small: '8px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',
}
```

### Border Radius

```typescript
borderRadius: {
  small: '4px',
  medium: '8px',
  large: '12px',
  round: '50%',
}
```

## Dark Mode Support

The theme automatically provides dark mode variants:

```tsx
const DarkModeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text.primary};

  @media (prefers-color-scheme: dark) {
    background-color: ${(props) => props.theme.colors.dark.surface};
    color: ${(props) => props.theme.colors.dark.text.primary};
  }
`;
```

## Utility Functions

### `getColorWithOpacity`

Create transparent versions of theme colors:

```tsx
import { getColorWithOpacity } from "@/theme";

const transparentBackground = getColorWithOpacity("chocolateKisses", 0.1);
// Returns: 'rgba(69, 21, 21, 0.1)'
```

## File Structure

```text
src/
  theme/
    ├── colors.ts                    # Color definitions and utilities
    ├── index.ts                     # Main theme exports
    ├── styled-theme.ts              # Styled-components theme configuration
    ├── styled-theme-provider.tsx    # Styled-components theme provider
    └── theme-provider.tsx           # React context for theme management
  components/
    └── ThemeShowcase.tsx            # Example component demonstrating theme usage
  app/
    ├── globals.css                  # Global styles and CSS variables
    └── layout.tsx                   # Theme provider integration
```

## Best Practices

1. **Use semantic colors** when possible instead of direct color names
2. **Leverage styled-components** for component-specific styling
3. **Use the TypeScript exports** for type safety and IntelliSense
4. **Test both light and dark modes** when implementing new components
5. **Use the opacity utility** for creating subtle variations
6. **Keep styles close to components** with `.styles.tsx` files
7. **Use theme props** for consistent spacing and typography

## Examples

### Button Component

```tsx
// Button.styles.tsx
import styled from "styled-components";

export const StyledButton = styled.button<{
  variant?: "primary" | "secondary" | "accent" | "danger";
}>`
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.colors.primary;
      case "secondary":
        return props.theme.colors.secondary;
      case "accent":
        return props.theme.colors.accent;
      case "danger":
        return props.theme.colors.danger;
      default:
        return props.theme.colors.primary;
    }
  }};
  color: ${(props) => props.theme.colors.text.onPrimary};
  border: none;
  padding: ${(props) => props.theme.spacing.small} ${(props) =>
      props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: ${(props) => props.theme.typography.sizes.medium};
  font-weight: ${(props) => props.theme.typography.weights.medium};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
```

### Card Component

```tsx
// Card.styles.tsx
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.medium};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.surfaceHover};
  }
`;
```

This theme system provides a robust foundation for maintaining consistent, accessible, and beautiful styling throughout your cocktail business application using styled-components.
