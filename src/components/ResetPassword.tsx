import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../service/authService";

// arrumar o reset password para ter email, senha e nova senha para o usuario conseguir trocar atraves de resetpassword (backend)

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function resetPasswordSubmit() {
    try{
      const response = await resetPassword({ email, password, newPassword })

      if (response) {
        console.log("Troca de senha efetuada")
        alert("Troca de senha efetuada com sucesso!")
        navigate("/")
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Erro na troca de senha", error.response.data.message);
        alert(error.response.data.message);
      } else {
        console.error("Erro desconhecido na troca", error.message);
      }
      alert("Erro interno no servidor. Tente novamente mais tarde.");
    }
    
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HOME</a>
              <a href="/#sobre" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">SOBRE</a>
              <a href="/#produtos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">PRODUTOS</a>
              <a href="/#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">CONTATO</a>
            </nav>
            <button className="md:hidden text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-row items-center justify-center py-16">
        <div className="flex flex-col items-center justify-center mr-8">
          <div
            className="bg-gradient-to-br from-blue-600/50 via-purple-700/40 to-blue-800/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl sm:w-[900px] h-[500px] shadow-blue-500/40 hover:shadow-purple-500/60 transition-all duration-500"
            style={{ backgroundImage: "url(img/celltechform1.png)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full sm:w-[380px] border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-tr-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zm0 2c-2.21 0-6 1.119-6 3.333V18a2 2 0 002 2h8a2 2 0 002-2v-1.667C18 14.119 14.21 13 12 13z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Recuperar Senha</h1>
                <p className="text-gray-600 text-sm">Informe seu e-mail para receber as instruções</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  Nova Senha
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  onClick={resetPasswordSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Alterar
                </button>
              </div>

              <div className="text-center space-y-3">
                <button
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm"
                  onClick={() => navigate("/profile")}
                >
                  Voltar ao Perfil
                </button>
                <div>
                  <button
                    className="text-gray-500 hover:text-gray-700 font-medium transition-colors text-sm flex items-center justify-center w-full py-2 px-4 rounded-lg border border-gray-200 hover:border-gray-300"
                    onClick={() => navigate("/")}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Voltar para Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword