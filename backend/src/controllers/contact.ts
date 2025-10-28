import { Request, Response } from 'express';
import { saveContactRequest, getContactRequests } from "../services/contact";

export const createContact = async (req: Request, res: Response) => {
    try {
        const { name, email, tel, message } = req.body;
        
        if (!name || !email || !tel || !message) {
            return res.status(400).json({ message: "Preencha todos os campos!" });
        }
        
        const userId = (req as any).userId; // Pega do middleware se estiver logado
        
        const response = await saveContactRequest(name, email, tel, message, userId);
        return res.status(response.status).json(response);
    } catch (error: any) {
        console.error('Erro no contato:', error);
        return res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
}

export const getAllContacts = async (req: Request, res: Response) => {
    try {
        const response = await getContactRequests();
        return res.status(response.status).json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}