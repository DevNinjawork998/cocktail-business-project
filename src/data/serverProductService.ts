import { prisma } from '@/lib/prisma';

export interface Product {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    longDescription: string;
    price: string;
    priceSubtext: string;
    imageColor: string;
    features: Array<{ text: string; color: string }>;
}

export async function getAllProducts(): Promise<Product[]> {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return products.map(product => ({
            ...product,
            features: product.features as Array<{ text: string; color: string }>
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductById(id: string): Promise<Product | null> {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id
            }
        });
        if (!product) return null;
        return {
            ...product,
            features: product.features as Array<{ text: string; color: string }>
        };
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

export async function getOtherProducts(excludeId: string): Promise<Product[]> {
    try {
        const allProducts = await getAllProducts();
        return allProducts.filter(product => product.id !== excludeId);
    } catch (error) {
        console.error('Error fetching other products:', error);
        throw error;
    }
} 