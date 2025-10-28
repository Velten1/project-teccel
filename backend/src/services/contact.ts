import { createContact, getAllContacts } from "../repository/contact";

export const saveContactRequest = async (
    name: string,
    email: string,
    tel: string,
    message: string,
    userId?: number
) => {
    const newContact = await createContact({
        name,
        email,
        tel,
        message,
        userId: userId || null
    });
    
    return { status: 201, data: newContact };
}

export const getContactRequests = async () => {
    const contacts = await getAllContacts();
    return { status: 200, data: contacts };
}