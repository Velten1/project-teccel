import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HOME</a>
              <a href="/#sobre" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">SOBRE</a>
              <a href="/#produtos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">PRODUTOS</a>
              <a href="/#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">CONTATO</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Container principal com flexbox horizontal */}
      <div className="flex flex-row items-center justify-center py-16">
        
        {/* Imagem à esquerda */}
        <div className="flex flex-col items-center justify-center mr-8">
          <div className="bg-gradient-to-br from-blue-600/50 via-purple-700/40 to-blue-800/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl sm:w-[900px] h-[500px] shadow-blue-500/40 hover:shadow-purple-500/60 transition-all duration-500"
          style={{ backgroundImage: "url(img/celltechform1.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>

        {/* Formulário à direita */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full sm:w-[380px] border border-gray-200 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-tr-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Fazer Login</h1>
                <p className="text-gray-600 text-sm">Entre na sua conta para continuar</p>
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
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="mb-6 text-right">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                onClick={() => navigate("/reset-password")}
              >
                Esqueceu a Senha?
              </button>
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Entrar na Conta
                </span>
              </button>
            </div>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">ou</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600 text-sm">Novo por aqui? </span>
                  <button
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm"
                    onClick={() => navigate("/register")}
                  >
                    Criar conta gratuita
                  </button>
                </div>
                <div>
                  <button
                    className="text-gray-500 hover:text-gray-700 font-medium transition-colors text-sm flex items-center justify-center w-full py-2 px-4 rounded-lg border border-gray-200 hover:border-gray-300"
                    onClick={() => navigate("/")}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Continuar sem Login
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;