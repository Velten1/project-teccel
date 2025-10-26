import { Request, Response } from 'express';
import { getUserInfoService , registerUser} from "../services/auth";

export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const user = (req as any).userId
        const response = await getUserInfoService(user)

        return res.status(response.status).json(response)
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor'})
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const { name, cpf, email, tel, password} = req.body
        if (!name || !cpf || !email || !tel || !password) {
           return res.status(400).json({ message: "Preencha seus dados corretamente!" })
        }

        const response = await registerUser(name, cpf, email, tel, password)
        return res.status(response.status).json(response)
    } catch (error: any) {
        return res.status(500).json({ message: 'Erro interno do servidor', error: error.message })
    }
}