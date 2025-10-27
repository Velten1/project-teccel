import { Request, Response } from 'express';
import { getUserInfoService , registerUser, loginUser} from "../services/auth";

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
        console.error('Erro no registro:', error);
        
        // Tratar erros específicos do Prisma
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0] || 'campo';
            return res.status(400).json({ message: `${field} já cadastrado` })
        }
        
        return res.status(500).json({ message: 'Erro interno do servidor', error: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Preencha seus dados corretamente!" })
        }

        const response = await loginUser(email, password)
        if (!response || !response.data) {
            return res.status(500).json({ message: 'Erro interno do servidor' })
        }
        
        // Envia o token como cookie httpOnly
        res.cookie('token', response.data.token, {
            httpOnly: true,
            maxAge: 3600000, // 1 hora
            sameSite: 'lax'
        });
        
        return res.status(response.status).json(response)
    } catch (error:any) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
}