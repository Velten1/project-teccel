import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { profile, logout } from "../service/authService";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await profile();
        if (response.data.status === 200) {
          setUser(response.data.data);
        }
      } catch (err: any) {
        if (err.response?.status === 401) {
          setError("Sessão expirada. Faça login novamente.");
        } else {
          setError("Erro ao carregar perfil");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
                <p className="text-sm text-gray-600">Assistência Técnica</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                HOME
              </a>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                SAIR
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header com gradiente */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Perfil do Usuário</h2>
                  <p className="text-blue-100">Suas informações pessoais</p>
                </div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Carregando...</p>
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-700 text-lg font-semibold">{error}</p>
                  <button
                    onClick={() => navigate("/login")}
                    className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Fazer Login
                  </button>
                </div>
              ) : user ? (
                <div className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Nome Completo
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900">
                      {user.name}
                    </div>
                  </div>

                  {/* CPF */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      CPF
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900">
                      {user.cpf}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      E-mail
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900">
                      {user.email}
                    </div>
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Telefone
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900">
                      {user.tel}
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => navigate("/")}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      Voltar para Home
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      Sair da Conta
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

