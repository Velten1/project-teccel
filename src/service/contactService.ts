import api from "../api/api"

export const sendContactRequest = async (contactData: any) => {
    return await api.post("contact", contactData)
}

export const getContactRequests = async () => {
    return await api.get("contacts")
}