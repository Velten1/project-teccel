import prisma from "../config/prisma";
import { Prisma } from "@prisma/client";

export const createProduct = async (productData: any) => {
    return await prisma.product.create({
        data: productData
    })
}

export const getProductById = async (id: number) => {
    return await prisma.product.findUnique({
        where: { id }
    })
}

export const updateProduct = async (
    id: number,
    name: string,
    brand: string,
    model: string,
    category: string,
    price: Prisma.Decimal | number | string,
    description: string,
    imageUrl: string,
    active: boolean
) => {
    const priceDecimal = new Prisma.Decimal(price as any);

    return await prisma.product.update({
        where: { id: id },
        data: { name: name,
            brand: brand,
            model: model,
            category: category,
            price: priceDecimal,
            description: description,
            imageUrl: imageUrl,
            active: active
        }
    })
}

export const deleteProduct = async (id: number) => {
    return await prisma.product.delete({
        where: { id:id }
    })
}

// Atualização parcial de produto: aceita apenas campos enviados
export const updateProductPartial = async (
    id: number,
    data: Partial<{
        name: string;
        brand: string;
        model: string;
        category: string;
        price: Prisma.Decimal | number | string;
        description: string | null;
        imageUrl: string | null;
        active: boolean;
    }>
) => {
    const payload: any = { ...data };
    if (payload.price !== undefined) {
        payload.price = new Prisma.Decimal(payload.price as any);
    }

    return prisma.product.update({
        where: { id },
        data: payload,
    })
}

export const archiveProduct = async (id: number) => {
    return prisma.product.update({
        where: { id },
        data: { active: false }
    })
}

export const restoreProduct = async (id: number) => {
    return prisma.product.update({
        where: { id },
        data: { active: true }
    })
}

export const listProducts = async (options: {
    
    name?: string;    
    brand?: string;    
    category?: string; 
    active?: boolean;  
    page?: number;  
    limit?: number; 
    sortBy?: 'createdAt' | 'price' | 'name'; 
    sortOrder?: 'asc' | 'desc';              
} = {}) => {
    let {
        name,
        brand,
        category,
        active,
        page = 1,
        limit = 10,
        sortBy = 'createdAt',
        sortOrder = 'desc'
    } = options;

    page = Math.max(1, page);
    limit = Math.min(Math.max(1, limit), 100);
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
        name: name ? { contains: name }: undefined,
        brand: brand || undefined,
        category: category || undefined,
        active: typeof active === 'boolean' ? active : undefined,
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput = {
        [sortBy]: sortOrder,
    } as Prisma.ProductOrderByWithRelationInput;

    const [items, total] = await Promise.all([
        prisma.product.findMany({ where, orderBy, skip, take: limit }),
        prisma.product.count({ where })
    ]);

    return {
        items,
        total,
        page,
        limit,
    };
}