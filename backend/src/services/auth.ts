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

export const registerUser = async (
    name: string, 
    cpf: string, 
    email: string, 
    tel: string, 
    password: string
) => {
    if (password.length < 6) {
        return { status: 400, message: "A Senha precisa ter no minimo 6 caracteres" }
    }
    
    const existingUser = await findUserByEmail(email) 
    if (existingUser){
        return { status: 400, message: "Email já cadastrado" }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const newUser = await createUser({
        name,
        cpf,
        email,
        tel,
        password: hashedPassword
    })

    const { password: _, ...userWithoutPassword } = newUser
    return { status: 201, data: userWithoutPassword}
}

export const loginUser = async(
    email: string,
    password: string
) => {
    const user = await findUserByEmail(email)
    if (!user) {
        return { status:404, message: "Usuario não cadastrado!" }
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return { status: 401, message: "Credenciais invalidas!" }
    }

    const token = await generateToken(user.id)
    const { password: _, ...userWithoutPassword } = user
    return { status: 200, data: {token, user: userWithoutPassword} }
}