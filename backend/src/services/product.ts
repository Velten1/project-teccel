import { createProduct, getProductById, deleteProduct, archiveProduct, restoreProduct, listProducts } from "../repository/product";
import { Prisma } from "@prisma/client";

export const getProductInfoService = async (productId: number) => {
    const product = await getProductById(productId)
    if (!product) {
        return { status: 404, message: "Produto não encontrado" }
    }

    return { status: 200, data: product }
}

export const listProductsService = async (options: {
    name?: string;
    brand?: string;
    category?: string;
    active?: boolean;
    page?: number;
    limit?: number;
    sortBy?: 'createdAt' | 'price' | 'name';
    sortOrder?: 'asc' | 'desc';
}) => {
    const result = await listProducts(options);
    return { status: 200, data: result };
}

export const registerProduct = async (
    name: string,
    brand: string,
    model: string,
    category: string,
    price: Prisma.Decimal | number | string,
    description: string,
    imageUrl: string,
    active: boolean
) => {
    function normalizesyntax(value: unknown):string | undefined {
        if (typeof value !== "string") return undefined
        const trimmed = value.trim()
        return trimmed ? trimmed : undefined
    }

    name = normalizesyntax(name) ?? ""
    brand = normalizesyntax(brand) ?? ""
    model = normalizesyntax(model) ?? ""
    category = normalizesyntax(category) ?? ""
    description = normalizesyntax(description) ?? ""
    imageUrl = normalizesyntax(imageUrl) ?? ""

    function normalizePrice(price: Prisma.Decimal | number | string): Prisma.Decimal | null {
        // se decimal, vai direto
        if (price instanceof Prisma.Decimal) {
            return price;
        }
        
        // vira string se for numero
        let priceStr = typeof price === 'number' ? price.toString() : price;
        //normalização de caracteres
        priceStr = priceStr.trim();
        priceStr = priceStr.replace(/[R$\s]/g, '');
        priceStr = priceStr.replace(',', '.');
        
        // tenta converter para numero
        const numPrice = parseFloat(priceStr);
        
        // checa se é nan ou invalid
        if (isNaN(numPrice)) {
            return null;
        }
        
        // arredondando
        const rounded = Math.round(numPrice * 100) / 100;
        return new Prisma.Decimal(rounded.toFixed(2));
    }

    const normalizedPrice = normalizePrice(price)
    if (!normalizedPrice) {
        return { status:400, message: "Preço invalido" }
    }

    if (normalizedPrice.toNumber() <= 0) {
        return { status: 400, message: "Preço deve ser maior do que 0" }
    }

    const productData = {
        name,
        brand,
        model,
        category,
        price: normalizedPrice,
        description: description || null,
        imageUrl: imageUrl || null,
        active: Boolean(active)
    }


    const newProduct = await createProduct(productData)

    return {status: 201, data: newProduct}
}

export const deleteProductService = async (id: number) => {
    const product = await getProductById(id)
    if (!product) {
        return { status: 404, message: "Produto não encontrado" }
    }

    await deleteProduct(id)
    return { status: 200, message: "Produto excluído com sucesso" }
}

export const archiveProductService = async (id: number) => {
    const product = await getProductById(id)
    if (!product) {
        return { status: 404, message: "Produto não encontrado" }
    }

    if (!product.active) {
        return { status: 400, message: "Produto já está arquivado" }
    }

    const archivedProduct = await archiveProduct(id)
    return { status: 200, data: archivedProduct }
}

export const restoreProductService = async (id: number) => {
    const product = await getProductById(id)
    if (!product) {
        return { status: 404, message: "Produto não encontrado" }
    }

    if (product.active) {
        return { status: 400, message: "Produto já está ativo" }
    }

    const restoredProduct = await restoreProduct(id)
    return { status: 200, data: restoredProduct }
}