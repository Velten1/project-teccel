import { Request, Response } from "express";
import { registerProduct, getProductInfoService, deleteProductService, archiveProductService, restoreProductService, listProductsService } from "../services/product";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, brand, model, category, price, description, imageUrl, active } = req.body

        if (!name || !brand || !model || !category || !price) {
            return res.status(400).json({ message: "Preencha todos os campos necessários" })
        }

        const response = await registerProduct(name, brand, model, category, price, description, imageUrl, active)
        return res.status(response.status).json(response)
    } catch (error: any) {
        console.error("Erro ao criar produto", error)
        return res.status(500).json({ message: "Erro interno no servidor" })
    }
}

export const listProducts = async (req: Request, res: Response) => {
    try {
        const { name, brand, category, active, page, limit, sortBy, sortOrder } = req.query;

        const options = {
            name: name as string | undefined,
            brand: brand as string | undefined,
            category: category as string | undefined,
            active: active !== undefined ? active === 'true' : undefined,
            page: page ? parseInt(page as string) : undefined,
            limit: limit ? parseInt(limit as string) : undefined,
            sortBy: sortBy as 'createdAt' | 'price' | 'name' | undefined,
            sortOrder: sortOrder as 'asc' | 'desc' | undefined,
        };

        const response = await listProductsService(options);
        return res.status(response.status).json(response);
    } catch (error: any) {
        console.error("Erro ao listar produtos", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const productId = parseInt(id)

        if (isNaN(productId)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const response = await getProductInfoService(productId)
        return res.status(response.status).json(response)
    } catch (error: any) {
        console.error("Erro ao buscar produto", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const productId = parseInt(id)

        if (isNaN(productId)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const response = await deleteProductService(productId)
        return res.status(response.status).json(response)
    } catch (error: any) {
        console.error("Erro ao deletar produto", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}

export const archiveProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const productId = parseInt(id)

        if (isNaN(productId)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const response = await archiveProductService(productId)
        return res.status(response.status).json(response)
    } catch (error: any) {
        console.error("Erro ao arquivar produto", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}

export const restoreProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const productId = parseInt(id)

        if (isNaN(productId)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const response = await restoreProductService(productId)
        return res.status(response.status).json(response)
    } catch (error: any) {
        console.error("Erro ao restaurar produto", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}