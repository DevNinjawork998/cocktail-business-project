import { colors, semanticColors, darkModeColors } from './colors';

export interface StyledTheme {
    colors: typeof colors;
    semantic: typeof semanticColors;
    darkMode: typeof darkModeColors;
    mode: 'light' | 'dark';
    currentSemantic: Record<string, string>;
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    radii: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
}

export const styledTheme: Omit<StyledTheme, 'mode' | 'currentSemantic'> = {
    colors,
    semantic: semanticColors,
    darkMode: darkModeColors,
    spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
        '4xl': '6rem',    // 96px
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    radii: {
        sm: '0.25rem',    // 4px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        full: '9999px',
    },
};

// Helper function for media queries
export const media = {
    sm: `@media (min-width: ${styledTheme.breakpoints.sm})`,
    md: `@media (min-width: ${styledTheme.breakpoints.md})`,
    lg: `@media (min-width: ${styledTheme.breakpoints.lg})`,
    xl: `@media (min-width: ${styledTheme.breakpoints.xl})`,
    '2xl': `@media (min-width: ${styledTheme.breakpoints['2xl']})`,
}; 