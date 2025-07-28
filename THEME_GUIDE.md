# Cocktail Business Theme System

This project uses a comprehensive theme system based on the sophisticated cocktail-inspired color palette. The theme provides consistent styling across the application with support for both light and dark modes.

## Color Palette

The theme is built around five core colors:

- **Chocolate Kisses** (`#451515`) - Deep, rich brown - Primary color
- **Mauvelous** (`#EA9DAE`) - Soft mauve pink - Primary light
- **Caramel** (`#FBE89E`) - Warm caramel yellow - Accent color
- **Royal Orange** (`#F89256`) - Vibrant orange - Secondary color
- **Bittersweet Shimmer** (`#C74C3D`) - Rich red - Danger/Alert color

## Usage

### 1. CSS Variables

The theme provides CSS custom properties that can be used directly in your stylesheets:

```css
.my-element {
  background-color: var(--chocolate-kisses);
  color: var(--caramel);
  border: 1px solid var(--border);
}
```

### 2. Tailwind CSS Classes

Use the provided Tailwind utility classes:

```jsx
<div className="bg-chocolate-kisses text-caramel border-mauvelous">
  Content with theme colors
</div>
```

Available classes:

- **Text colors**: `text-chocolate-kisses`, `text-mauvelous`, `text-caramel`, `text-royal-orange`, `text-bittersweet-shimmer`
- **Background colors**: `bg-chocolate-kisses`, `bg-mauvelous`, `bg-caramel`, `bg-royal-orange`, `bg-bittersweet-shimmer`
- **Border colors**: `border-chocolate-kisses`, `border-mauvelous`, `border-caramel`, `border-royal-orange`, `border-bittersweet-shimmer`

### 3. TypeScript Integration

Import and use the theme colors in your TypeScript/JavaScript code:

```tsx
import { colors, semanticColors, tailwindColors } from "@/theme";

// Direct color values
const primaryColor = colors.chocolateKisses; // '#451515'

// Semantic color assignments
const buttonColor = semanticColors.primary; // '#451515'

// Tailwind class names
const buttonClass = tailwindColors.bg.chocolateKisses; // 'bg-chocolate-kisses'
```

### 4. Theme Provider

Wrap your application with the `ThemeProvider` to enable theme switching:

```tsx
import { ThemeProvider } from "@/theme";

function App() {
  return (
    <ThemeProvider defaultTheme="light">{/* Your app content */}</ThemeProvider>
  );
}
```

### 5. Theme Hook

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

## Dark Mode

The theme automatically provides dark mode variants:

- Background colors are adjusted to darker tones
- Text colors are inverted for better contrast
- The Caramel color becomes the primary text color in dark mode

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
    ├── colors.ts          # Color definitions and utilities
    ├── theme-provider.tsx # React context for theme management
    └── index.ts          # Main exports and configuration
  components/
    └── ThemeShowcase.tsx # Example component demonstrating theme usage
  app/
    ├── globals.css       # CSS variables and utility classes
    └── layout.tsx        # Theme provider integration
```

## Best Practices

1. **Use semantic colors** when possible instead of direct color names
2. **Leverage CSS variables** for maximum flexibility
3. **Use the TypeScript exports** for type safety and IntelliSense
4. **Test both light and dark modes** when implementing new components
5. **Use the opacity utility** for creating subtle variations

## Examples

### Button Component

```tsx
import { tailwindColors } from "@/theme";

const Button = ({ variant = "primary", children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded transition-opacity hover:opacity-90";

  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-primary",
    danger: "bg-danger text-white",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};
```

### Card Component

```tsx
const Card = ({ children }) => (
  <div className="bg-surface border border-border rounded-lg p-6 hover:bg-surface-hover transition-colors">
    {children}
  </div>
);
```

This theme system provides a robust foundation for maintaining consistent, accessible, and beautiful styling throughout your cocktail business application.
