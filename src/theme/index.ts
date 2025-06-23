/**
 * Theme system exports
 * Main entry point for all theme-related utilities
 */

export {
    colors,
    semanticColors,
    darkModeColors,
    getColorWithOpacity,
    tailwindColors,
    type ColorName,
    type SemanticColorName,
} from './colors';

export { useTheme, ThemeProvider, type Theme, type ThemeContextType } from './theme-provider';

/**
 * Theme configuration constants
 */
export const THEME_CONFIG = {
    defaultTheme: 'light' as const,
    storageKey: 'cocktail-business-theme',
    cssVariablePrefix: '--',
} as const;

/**
 * Breakpoints for responsive design
 */
export const breakpoints = {
    mobile: '0px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
} as const;

/**
 * Common spacing values
 */
export const spacing = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
} as const;

/**
 * Typography scale
 */
export const typography = {
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    },
    lineHeight: {
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
    },
} as const; 