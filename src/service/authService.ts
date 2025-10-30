import api from "../api/api";

export const register = async (userData: any) => {
    return await api.post("auth/register", userData)
}

export const login = async (userData: any) => {
    return await api.post("auth/login", userData)
}

export const profile = async () => {
    return await api.get("auth/me")
}

export const logout = async () => {
    return await api.post("auth/logout");
  };

  export const resetPassword = async (userData: any) => {
    return await api.post("auth/reset-password", userData)
  } 