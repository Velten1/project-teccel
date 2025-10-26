import { Request, Response } from 'express';
import { getUserInfoService } from "../services/auth";

export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const user = (req as any).userId
        const response = await getUserInfoService(user)

        return res.status(response.status).json(response)
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor'})
    }
}