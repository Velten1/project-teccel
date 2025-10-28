import { Request, Response, NextFunction } from 'express';
import { findUserById } from '../repository/auth';

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req as any).userId;
        
        if (!userId) {
            return res.status(401).json({ message: "Token não fornecido" });
        }
        
        const user = await findUserById(userId);
        
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        
        if ((user as any).role !== "admin") {
            return res.status(403).json({ message: "Acesso negado" });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}