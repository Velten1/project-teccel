import bcrypt from 'bcryptjs'
import {
    createUser,
    findUserByEmail,
    generateToken,
    findUserById
} from '../repository/auth'

export const getUserInfoService = async (userId: number) => {
    const user = await findUserById(userId);
    if (!user) {
        return { status: 404, message: 'Usuario não encontrado' }
    }
    const { password, ...userWithoutPassword } = user
    return {status: 200, data: userWithoutPassword}
}
