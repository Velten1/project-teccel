import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("")
  const [tel, setTel] = useState("")
  const navigate = useNavigate();

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
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm sm:w-[420px] border border-gray-200 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 rounded-tr-3xl"></div>
            <div className="absolute top-1/2 right-4 w-12 h-12 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Criar Conta</h1>
                <p className="text-gray-600 text-sm">Preencha os dados abaixo para começar</p>
              </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="123.456.789-00"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Telefone
              </label>
              <input
                type="tel"
                id="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="(11) 99999-9999"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="space-y-4">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Criar Minha Conta
                </span>
              </button>

              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">ou</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              <div className="text-center">
                <span className="text-gray-600 text-sm">Já tem uma conta? </span>
                <button
                  className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors text-sm"
                  onClick={() => navigate("/login")}
                >
                  Fazer Login
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

export default RegisterForm;
