import api from "../api/api";

export const listProducts = async (filters?: {
    name?: string;
    brand?: string;
    category?: string;
    active?: boolean;
    page?: number;
    limit?: number;
    sortBy?: 'createdAt' | 'price' | 'name';
    sortOrder?: 'asc' | 'desc';
}) => {
    return await api.get("products", { params: filters });
}

export const getProduct = async (id: number) => {
    return await api.get(`products/${id}`);
}

export const createProduct = async (productData: any) => {
    return await api.post("products", productData);
}

export const deleteProduct = async (id: number) => {
    return await api.delete(`products/${id}`);
}

export const archiveProduct = async (id: number) => {
    return await api.post(`products/${id}/archive`, {});
}

export const restoreProduct = async (id: number) => {
    return await api.post(`products/${id}/restore`, {});
}