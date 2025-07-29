# Product Images

This folder contains product images for the cocktail business website.

## Current Setup

The website is currently using sample images from Unsplash for demonstration purposes. These images are automatically loaded from the database.

## File Naming Convention

If you want to use local images instead, name them exactly as the product ID with `.jpg` extension:

- `tequila-sundown.jpg`
- `dark-stormy.jpg`
- `maca-martini.jpg`
- `tropical-twist.jpg`
- `berry-bliss.jpg`
- `citrus-splash.jpg`

## Image Requirements

- **Format**: JPEG (.jpg) recommended
- **Size**: 400x400px minimum (will be resized automatically)
- **Aspect Ratio**: Square (1:1) works best
- **File Size**: Keep under 500KB for fast loading

## How to Switch to Local Images

1. **Add your images** to this folder with the correct naming
2. **Update the database** by changing the `imageUrl` in `prisma/seed.ts`:
   ```typescript
   imageUrl: "/images/products/tequila-sundown.jpg";
   ```
3. **Reseed the database**:
   ```bash
   npm run db:seed
   ```

## Current Sample Images

The website currently uses these Unsplash images:

- **Tequila Sundown**: Cocktail with orange/cranberry theme
- **Dark & Stormy**: Dark cocktail with ginger/lime
- **Maca Martini**: Rich coffee/chocolate themed drink
- **Tropical Twist**: Pineapple/coconut tropical drink
- **Berry Bliss**: Mixed berries with mint
- **Citrus Splash**: Lemon/lime citrus drink

## Fallback

If no image is found, the system will show a colored placeholder based on the product's `imageColor` field.

## Example

```
public/images/products/
├── tequila-sundown.jpg
├── dark-stormy.jpg
├── maca-martini.jpg
├── tropical-twist.jpg
├── berry-bliss.jpg
└── citrus-splash.jpg
```
