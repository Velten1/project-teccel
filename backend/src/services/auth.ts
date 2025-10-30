import bcrypt from 'bcryptjs'
import {
    createUser,
    findUserByEmail,
    findUserByCpf,
    generateToken,
    findUserById,
    updateUserPassword
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
    
    const existingUserByEmail = await findUserByEmail(email) 
    if (existingUserByEmail){
        return { status: 400, message: "Email já cadastrado" }
    }

    const existingUserByCpf = await findUserByCpf(cpf)
    if (existingUserByCpf){
        return { status: 400, message: "CPF já cadastrado" }
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

export const resetUserPassword = async (
    email: string,
    password: string, 
    newPassword: string
) => {
    const user = await findUserByEmail(email)
    if (!user) {
        return { status : 404, message: "Endereço de e-mail invalido." }
    }
    if (newPassword.length < 6) {
        return { status: 400, message: "A Sua nova senha precisa de no minimo 6 caracteres"}
    }
    if (newPassword === password) {
        return { status:400, message: "A Sua nova senha e sua senha atual não podem coincidir!" }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return { status:401, message: "Senha atual invalida!" }
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await updateUserPassword(user.id, hashedPassword);

    return { status:200, message: "Senha redefinida com sucesso!" }
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