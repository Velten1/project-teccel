import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../service/authService";
import { sendContactRequest } from "../service/contactService";

function Dashboard() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [doubt, setDoubt] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        async function checkAuth() {
            try {
                await profile();
                setIsLoggedIn(true);
            } catch {
                setIsLoggedIn(false);
            }
        }
        checkAuth();
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            await sendContactRequest({ 
                name, 
                email, 
                tel, 
                message: doubt 
            });
            alert("Mensagem enviada com sucesso!")
            setName("")
            setTel("")
            setEmail("")
            setDoubt("")
        } catch (error: any) {
            alert(error.response?.data?.message || "Erro ao enviar mensagem!")
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/dashboard-req");
                                }}
                                className="text-xs text-gray-600 hover:text-blue-600 transition-colors mr-4"
                            >
                                Painel
                            </a>
                            <img 
                                src="img/celltechform1.png" 
                                alt="CELLTECH Logo" 
                                className="h-12 w-auto mr-3"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">CELLTECH</h1>
                                <p className="text-sm text-gray-600">Assistência Técnica</p>
                            </div>
                        </div>
                        
                        <nav className="hidden md:flex space-x-8">
                                <a href="#" 
                                   onClick={(e) => {
                                       e.preventDefault();
                                       window.scrollTo({ top: 0, behavior: 'smooth' });
                                   }}
                                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HOME</a>
                            <a href="#sobre" 
                               onClick={(e) => {
                                   e.preventDefault();
                                   document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                               }}
                               className="text-gray-700 hover:text-blue-600 font-medium transition-colors">SOBRE</a>
                            <a href="#produtos" 
                               onClick={(e) => {
                                   e.preventDefault();
                                   document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
                               }}
                               className="text-gray-700 hover:text-blue-600 font-medium transition-colors">PRODUTOS</a>
                            <a href="#contato" 
                               onClick={(e) => {
                                   e.preventDefault();
                                   document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                               }}
                               className="text-gray-700 hover:text-blue-600 font-medium transition-colors">CONTATO</a>
                            
                            {isLoggedIn ? (
                                <a href="" className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                   onClick={(e) => { e.preventDefault(); navigate("/profile"); }}
                                >PERFIL</a>
                            ) : (
                                <a href="" className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                   onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                                >Logue Já!</a>
                            )}
                        </nav>
                        
                        <button 
                            className="md:hidden text-gray-700 hover:text-blue-600"
                            onClick={toggleMobileMenu}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-4 py-2 space-y-2">
                        <a 
                            href="#" 
                            className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMobileMenuOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            HOME
                        </a>
                        <a 
                            href="#sobre" 
                            className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMobileMenuOpen(false);
                                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            SOBRE
                        </a>
                        <a 
                            href="#produtos" 
                            className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMobileMenuOpen(false);
                                document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            PRODUTOS
                        </a>
                        <a 
                            href="#contato" 
                            className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMobileMenuOpen(false);
                                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            CONTATO
                        </a>
                        
                        {isLoggedIn ? (
                            <a 
                                href="" 
                                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    navigate("/profile");
                                }}
                            >
                                PERFIL
                            </a>
                        ) : (
                            <a 
                                href="" 
                                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    navigate("/login");
                                }}
                            >
                                Logue Já!
                            </a>
                        )}
                    </div>
                </div>
            )}

            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">CellTech</h1>
                    <p className="text-xl mb-4">
                        A tecnologia é a nossa especialidade. Estamos em Barueri-SP
                    </p>
                    <p className="text-lg mb-6">
                        A melhor assistência! Conserto, upgrade, manutenção e restauração. Estamos aqui para você!
                    </p>
                    <p className="text-sm opacity-90 mb-6">
                        Contate-nos Abaixo
                    </p>
                    <button 
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-4 bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
                    >
                        Fale Conosco
                    </button>
                </div>
            </section>

            <div className="bg-gray-800 text-white text-center py-2">
                <h2 className="text-2xl font-bold">Assistência Técnica</h2>
            </div>

            <section id="produtos" className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nossos Produtos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                            <div className="mb-4">
                                <img 
                                    src="img/iphonewhite.jpg"
                                    alt="iPhone 15 Pro Max" 
                                    className="w-full h-48 object-contain rounded-lg mx-auto bg-gray-100"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">iPhone 15 Pro Max</h3>
                            <p className="text-2xl font-bold text-green-600 mb-3">R$ 9.599,00</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                                Ver Detalhes
                            </button>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                            <div className="mb-4">
                                <img 
                                    src="img/macbook.jpg" 
                                    alt="MacBook Air M2" 
                                    className="w-full h-48 object-contain rounded-lg mx-auto bg-gray-100"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">MacBook Air M2</h3>
                            <p className="text-2xl font-bold text-green-600 mb-3">R$ 9.489,99</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                                Ver Detalhes
                            </button>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                            <div className="mb-4">
                                <img 
                                    src="img/pelicula.jpg" 
                                    alt="AirPods Pro" 
                                    className="w-full h-48 object-contain rounded-lg mx-auto bg-gray-100"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Película Pro</h3>
                            <p className="text-2xl font-bold text-green-600 mb-3">R$ 179,99</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                                Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contato" className="py-12 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">ENTRE EM CONTATO</h2>
                    
                    <div className="max-w-2xl mx-auto bg-gray-700 rounded-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-lg font-medium mb-2">NOME :</label>
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-400 text-white"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-lg font-medium mb-2">TELEFONE :</label>
                                <input 
                                    type="tel" 
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-400 text-white"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-lg font-medium mb-2">EMAIL :</label>
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-400 text-white"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-lg font-medium mb-2">DÚVIDA/SUGESTÃO:</label>
                                <textarea 
                                    value={doubt}
                                    onChange={(e) => setDoubt(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-400 text-white resize-none"
                                    rows={4}
                                    placeholder="Digite sua dúvida ou sugestão aqui..."
                                    required
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                            >
                                ENVIAR
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section id="sobre" className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">SOBRE NÓS</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        A CELLTECH é especializada em assistência técnica para dispositivos móveis e eletrônicos. 
                        Com anos de experiência no mercado, oferecemos serviços de qualidade e garantia para 
                        todos os nossos clientes.
                    </p>
                </div>
            </section>

        </div>
    )
}

export default Dashboard