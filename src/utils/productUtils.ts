import { ingredients } from '@/components/HealthBenefits/ingredients'

export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    ingredients: string[]
    healthBenefits: string[]
}

export interface Ingredient {
    icon: string
    name: string
    subtitle: string
    description: string
    type: string
}

/**
 * Filters ingredients by type
 */
export const filterIngredientsByType = (type: string): Ingredient[] => {
    return ingredients.filter(ingredient => ingredient.type === type)
}

/**
 * Gets all unique ingredient types
 */
export const getIngredientTypes = (): string[] => {
    const types = ingredients.map(ingredient => ingredient.type)
    return [...new Set(types)]
}

/**
 * Searches ingredients by name
 */
export const searchIngredients = (query: string): Ingredient[] => {
    const lowercaseQuery = query.toLowerCase()
    return ingredients.filter(ingredient =>
        ingredient.name.toLowerCase().includes(lowercaseQuery) ||
        ingredient.description.toLowerCase().includes(lowercaseQuery)
    )
}

/**
 * Calculates total price with tax
 */
export const calculatePriceWithTax = (price: number, taxRate: number = 0.08): number => {
    return Math.round((price * (1 + taxRate)) * 100) / 100
}

/**
 * Formats price as currency
 */
export const formatPrice = (price: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(price)
}

/**
 * Validates product data
 */
export const validateProduct = (product: Partial<Product>): { isValid: boolean; errors: string[] } => {
    const errors: string[] = []

    if (!product.name || product.name.trim().length === 0) {
        errors.push('Product name is required')
    }

    if (!product.description || product.description.trim().length === 0) {
        errors.push('Product description is required')
    }

    if (typeof product.price !== 'number' || product.price <= 0) {
        errors.push('Product price must be a positive number')
    }

    if (!product.category || product.category.trim().length === 0) {
        errors.push('Product category is required')
    }

    return {
        isValid: errors.length === 0,
        errors
    }
} 