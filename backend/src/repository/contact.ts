import prisma from "../config/prisma";

export const createContact = async (contactData: any) => {
    return await prisma.contact.create({
        data:contactData
    })
}

export const getAllContacts = async () => {
    return await prisma.contact.findMany({
        orderBy: { createdAt: "desc" }
    })
}