import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getContactRequests } from "../service/contactService";

function DashboardReq() {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRequests() {
            try {
                const response = await getContactRequests();
                setRequests(response.data.data)
            } catch (error) {
                console.error("Erro ao buscar requisições", error);
            } finally {
                setLoading(false);
            }
        }
        fetchRequests();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img 
                                src="img/celltechform1.png" 
                                alt="CELLTECH Logo" 
                                className="h-12 w-auto mr-3"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">CELLTECH</h1>
                                <p className="text-sm text-gray-600">Requisições de Contato</p>
                            </div>
                        </div>
                        
                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <button
                                onClick={() => navigate("/")}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                VOLTAR
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Requisições de Contato</h2>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                            <p className="mt-4 text-gray-600">Carregando...</p>
                        </div>
                    ) : requests.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="mt-4 text-gray-600">Nenhuma requisição encontrada</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mensagem</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {requests.map((request: any) => (
                                        <tr key={request.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.tel}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.email}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{request.doubt}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(request.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DashboardReq;

