import prisma from "../config/prisma";
import jwt from 'jsonwebtoken';

export const createUser = async (userData: any) => {
    return await prisma.user.create({
        data: userData
    })
}

export const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email }
    })
}

export const findUserByCpf = async (cpf: string) => {
    return await prisma.user.findUnique({
        where: { cpf }
    })
}   

export const generateToken = async (userId: number) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
}

export const findUserById = async (id: number) => {
    return await prisma.user.findUnique({
        where: { id: id }
    })
}