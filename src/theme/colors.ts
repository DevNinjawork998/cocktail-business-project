/**
 * Cocktail Business Theme Colors
 * Based on the provided color palette
 */

export const colors = {
    // Primary Color Palette
    chocolateKisses: '#451515',
    mauvelous: '#EA9DAE',
    caramel: '#FBE89E',
    royalOrange: '#F89256',
    bittersweetShimmer: '#C74C3D',

    // RGB variants for transparency
    chocolateKissesRgb: '69, 21, 21',
    mauvelousRgb: '234, 157, 174',
    caramelRgb: '251, 232, 158',
    royalOrangeRgb: '248, 146, 86',
    bittersweetShimmerRgb: '199, 76, 61',
} as const;

export const semanticColors = {
    primary: colors.chocolateKisses,
    primaryLight: colors.mauvelous,
    secondary: colors.royalOrange,
    accent: colors.caramel,
    danger: colors.bittersweetShimmer,

    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#fafafa',
    surface: '#ffffff',
    surfaceHover: '#f5f5f5',

    // Text colors
    foreground: colors.chocolateKisses,
    foregroundMuted: `rgba(${colors.chocolateKissesRgb}, 0.7)`,
    foregroundLight: `rgba(${colors.chocolateKissesRgb}, 0.5)`,

    // Border colors
    border: `rgba(${colors.chocolateKissesRgb}, 0.2)`,
    borderLight: `rgba(${colors.chocolateKissesRgb}, 0.1)`,

    // Shadow
    shadow: `rgba(${colors.chocolateKissesRgb}, 0.1)`,
} as const;

export const darkModeColors = {
    background: '#1a1a1a',
    backgroundSecondary: '#2a2a2a',
    surface: '#2a2a2a',
    surfaceHover: '#3a3a3a',
    foreground: colors.caramel,
    foregroundMuted: `rgba(${colors.caramelRgb}, 0.8)`,
    foregroundLight: `rgba(${colors.caramelRgb}, 0.6)`,
    border: `rgba(${colors.caramelRgb}, 0.3)`,
    borderLight: `rgba(${colors.caramelRgb}, 0.2)`,
} as const;

export type ColorName = keyof typeof colors;
export type SemanticColorName = keyof typeof semanticColors;

/**
 * Helper function to get color with opacity
 */
export const getColorWithOpacity = (colorName: ColorName, opacity: number): string => {
    const rgbKey = `${colorName}Rgb` as keyof typeof colors;
    const rgbValue = colors[rgbKey];
    return `rgba(${rgbValue}, ${opacity})`;
};

/**
 * Tailwind CSS class name helpers
 */
export const tailwindColors = {
    text: {
        chocolateKisses: 'text-chocolate-kisses',
        mauvelous: 'text-mauvelous',
        caramel: 'text-caramel',
        royalOrange: 'text-royal-orange',
        bittersweetShimmer: 'text-bittersweet-shimmer',
    },
    bg: {
        chocolateKisses: 'bg-chocolate-kisses',
        mauvelous: 'bg-mauvelous',
        caramel: 'bg-caramel',
        royalOrange: 'bg-royal-orange',
        bittersweetShimmer: 'bg-bittersweet-shimmer',
    },
    border: {
        chocolateKisses: 'border-chocolate-kisses',
        mauvelous: 'border-mauvelous',
        caramel: 'border-caramel',
        royalOrange: 'border-royal-orange',
        bittersweetShimmer: 'border-bittersweet-shimmer',
    },
} as const; 