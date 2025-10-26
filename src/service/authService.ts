import api from "../api/api";

export const register = async (userData: any) => {
    return await api.post("auth/register", userData)
}

export const login = async (userData: any) => {
    return await api.post("auth/login", userData)
}