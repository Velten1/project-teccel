import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 contrast-105 z-0"
        style={{ backgroundImage: "url(img/loginform2.jpeg)" }}
      ></div>

      {/* Container principal com flexbox horizontal */}
      <div className="flex flex-row items-center justify-center mt-40">
        
        {/* Imagem à esquerda */}
        <div className="flex flex-col items-center justify-center mr-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-custom sm:w-[900px] h-[500px]"
          style={{ backgroundImage: "url(img/backgroundsection.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>

        {/* Formulário à direita */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-custom max-w-sm w-full sm:w-[290px]">
            <h1 className="text-2xl font-bold mb-6 ml-13 drop-shadow-lg">
              Bem Vindo!
            </h1>
            <div className="relative">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="peer w-full bg-white/10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 mb-1"
              />
              <label
                htmlFor="email"
                className="font-bold absolute left-4 transform -translate-y-1/2 scale-100 text-gray-400 transition-all duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:scale-60 peer-focus:text-blue-500 peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:scale-60"
              >
                E-mail
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full bg-white/10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 mb-1"
              />
              <label
                htmlFor="password"
                className="font-bold absolute left-4 transform -translate-y-1/2 scale-100 text-gray-400 transition-all duration-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:scale-60 peer-focus:text-blue-500 peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:scale-60"
              >
                Senha
              </label>
            </div>

            <div className="mb-14">
              <label
                htmlFor="forgetPassword"
                className="block text-white font-bold py-3 absolute left-7"
              >
                <p
                  className="text-white font-bold cursor-pointer hover:underline hover:text-blue-500"
                  onClick={() => navigate("/reset-password")}
                >
                  Esqueceu a Senha?
                </p>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg w-full max-w-xs transition-all duration-300 ease-in-out mb-2"
              >
                Login
              </button>
            </div>
            <div>
              <label htmlFor="register" className="">
                <a
                  className="text-white font-bold text-center ml-18 cursor-pointer hover:underline hover:text-blue-500"
                  onClick={() => navigate("/register")}
                >
                  Cadastrar-se!
                </a>
              </label>
              <div>
                <label
                  htmlFor="register"
                  className="block text-white"
                >
                  <p
                    className="text-white font-bold cursor-pointer flex flex-col items-center hover:underline hover:text-blue-500"
                    onClick={() => navigate("/")}
                  >
                    Continuar sem Login
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;