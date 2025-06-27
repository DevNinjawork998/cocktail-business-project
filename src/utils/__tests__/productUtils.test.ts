import {
    filterIngredientsByType,
    getIngredientTypes,
    searchIngredients,
    calculatePriceWithTax,
    formatPrice,
    validateProduct,
    type Product
} from '../productUtils'

describe('Product Utils', () => {
    describe('filterIngredientsByType', () => {
        it('filters ingredients by type correctly', () => {
            const adaptogens = filterIngredientsByType('Adaptogen')
            const fruits = filterIngredientsByType('Fruit')

            expect(adaptogens.length).toBeGreaterThan(0)
            expect(fruits.length).toBeGreaterThan(0)

            adaptogens.forEach(ingredient => {
                expect(ingredient.type).toBe('Adaptogen')
            })

            fruits.forEach(ingredient => {
                expect(ingredient.type).toBe('Fruit')
            })
        })

        it('returns empty array for non-existent type', () => {
            const result = filterIngredientsByType('NonExistentType')
            expect(result).toEqual([])
        })
    })

    describe('getIngredientTypes', () => {
        it('returns unique ingredient types', () => {
            const types = getIngredientTypes()

            expect(types).toContain('Adaptogen')
            expect(types).toContain('Fruit')
            expect(types).toContain('Natural Flavor')

            // Check for uniqueness
            const uniqueTypes = [...new Set(types)]
            expect(types).toEqual(uniqueTypes)
        })
    })

    describe('searchIngredients', () => {
        it('finds ingredients by name', () => {
            const results = searchIngredients('Ginger')

            expect(results.length).toBeGreaterThan(0)
            expect(results[0].name).toBe('Ginger')
        })

        it('finds ingredients by description', () => {
            const results = searchIngredients('antioxidants')

            expect(results.length).toBeGreaterThan(0)
            results.forEach(ingredient => {
                expect(ingredient.description.toLowerCase()).toContain('antioxidants')
            })
        })

        it('is case insensitive', () => {
            const results1 = searchIngredients('GINGER')
            const results2 = searchIngredients('ginger')

            expect(results1).toEqual(results2)
        })

        it('returns empty array for no matches', () => {
            const results = searchIngredients('NonExistentIngredient')
            expect(results).toEqual([])
        })
    })

    describe('calculatePriceWithTax', () => {
        it('calculates price with default tax rate', () => {
            const result = calculatePriceWithTax(100)
            expect(result).toBe(108) // 100 + 8% tax
        })

        it('calculates price with custom tax rate', () => {
            const result = calculatePriceWithTax(100, 0.1)
            expect(result).toBe(110) // 100 + 10% tax
        })

        it('handles zero price', () => {
            const result = calculatePriceWithTax(0)
            expect(result).toBe(0)
        })

        it('rounds to 2 decimal places', () => {
            const result = calculatePriceWithTax(99.99, 0.075)
            expect(result).toBe(107.49) // 99.99 + 7.5% tax
        })
    })

    describe('formatPrice', () => {
        it('formats price as USD currency', () => {
            const result = formatPrice(29.99)
            expect(result).toBe('$29.99')
        })

        it('formats zero price', () => {
            const result = formatPrice(0)
            expect(result).toBe('$0.00')
        })

        it('formats large numbers', () => {
            const result = formatPrice(1234.56)
            expect(result).toBe('$1,234.56')
        })

        it('handles different currencies', () => {
            const result = formatPrice(29.99, 'EUR')
            expect(result).toContain('€')
        })
    })

    describe('validateProduct', () => {
        const validProduct: Product = {
            id: '1',
            name: 'Test Product',
            description: 'Test description',
            price: 29.99,
            image: '/test.jpg',
            category: 'test-category',
            ingredients: [],
            healthBenefits: []
        }

        it('validates a complete product', () => {
            const result = validateProduct(validProduct)
            expect(result.isValid).toBe(true)
            expect(result.errors).toEqual([])
        })

        it('detects missing name', () => {
            const invalidProduct = { ...validProduct, name: '' }
            const result = validateProduct(invalidProduct)

            expect(result.isValid).toBe(false)
            expect(result.errors).toContain('Product name is required')
        })

        it('detects missing description', () => {
            const invalidProduct = { ...validProduct, description: '' }
            const result = validateProduct(invalidProduct)

            expect(result.isValid).toBe(false)
            expect(result.errors).toContain('Product description is required')
        })

        it('detects invalid price', () => {
            const invalidProduct = { ...validProduct, price: -10 }
            const result = validateProduct(invalidProduct)

            expect(result.isValid).toBe(false)
            expect(result.errors).toContain('Product price must be a positive number')
        })

        it('detects missing category', () => {
            const invalidProduct = { ...validProduct, category: '' }
            const result = validateProduct(invalidProduct)

            expect(result.isValid).toBe(false)
            expect(result.errors).toContain('Product category is required')
        })

        it('detects multiple validation errors', () => {
            const invalidProduct = {
                ...validProduct,
                name: '',
                price: -10,
                category: ''
            }
            const result = validateProduct(invalidProduct)

            expect(result.isValid).toBe(false)
            expect(result.errors).toHaveLength(3)
            expect(result.errors).toContain('Product name is required')
            expect(result.errors).toContain('Product price must be a positive number')
            expect(result.errors).toContain('Product category is required')
        })

        it('handles whitespace-only strings', () => {
            const invalidProduct = { ...validProduct, name: '   ' }
            const result = validateProduct(invalidProduct)

            expect(result.isValid).toBe(false)
            expect(result.errors).toContain('Product name is required')
        })
    })
}) 