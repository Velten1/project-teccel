# 🛠️ CellTech - Assistência Técnica

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para uma aplicação web de estudos do **Curso de Desenvolvimento de JavaScript** do **SENAI Barueri**. O CellTech é uma aplicação web full-stack moderna para assistência técnica de dispositivos móveis e eletrônicos, oferecendo uma plataforma completa com sistema de autenticação, gerenciamento de usuários e sistema de contato integrado.

## 🎯 Objetivo

Criar uma plataforma web full-stack responsiva que simula o site de uma assistência técnica, demonstrando conhecimentos em desenvolvimento frontend e backend moderno com React, TypeScript, Node.js, Express e MySQL.

## ✨ Funcionalidades

### 🏠 **Dashboard (Página Principal)**
- Apresentação da empresa CellTech
- Seção de produtos em destaque (iPhone, MacBook, Películas)
- Formulário de contato integrado com backend
- Navegação suave entre seções
- Sistema de autenticação integrado
- Controle de acesso baseado em roles (admin/user)
- Design responsivo com menu hamburger para mobile

### 🔐 **Sistema de Autenticação Completo**
- **Registro**: Cadastro completo com validação de CPF único, email único e senha mínima
- **Login**: Autenticação com JWT e cookies httpOnly seguros
- **Perfil**: Visualização e gerenciamento de dados do usuário
- **Logout**: Encerramento seguro de sessão
- **Middleware**: Proteção de rotas e verificação de tokens
- **Roles**: Sistema de permissões (admin/user)

### 📊 **Sistema de Contato e Administração**
- **Formulário de Contato**: Integrado com backend e banco de dados
- **Dashboard para Admin**: Visualização de todas as requisições de contato
- **Controle de Acesso**: Painel administrativo restrito a usuários admin
- **Gerenciamento**: Listagem completa de mensagens recebidas

### 📱 **Responsividade**
- Layout adaptável para desktop, tablet e mobile
- Menu hamburger funcional em dispositivos móveis
- Imagens responsivas que se adaptam ao tamanho da tela
- Formulários otimizados para diferentes dispositivos

## 🛠️ Stack Tecnológica

### **Frontend**
- **React 19.1.1** - Biblioteca principal para interface de usuário
- **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática
- **Vite 7.1.7** - Build tool moderno e rápido
- **React Router DOM 6.8.1** - Roteamento client-side
- **Axios 1.12.2** - Cliente HTTP para comunicação com API
- **Tailwind CSS 4.1.15** - Framework CSS utility-first

### **Backend**
- **Node.js** - Runtime JavaScript
- **Express 5.1.0** - Framework web para Node.js
- **TypeScript 5.9.3** - Tipagem estática no backend
- **Prisma 6.18.0** - ORM moderno para banco de dados
- **MySQL2 3.15.3** - Driver MySQL para Node.js
- **JWT (jsonwebtoken)** - Autenticação baseada em tokens
- **bcryptjs** - Criptografia de senhas
- **cookie-parser** - Gerenciamento de cookies
- **CORS** - Cross-Origin Resource Sharing

### **Banco de Dados**
- **MySQL** - Sistema de gerenciamento de banco de dados relacional
- **Prisma ORM** - Mapeamento objeto-relacional

### **Ferramentas de Desenvolvimento**
- **ESLint 9.36.0** - Linter para qualidade de código
- **Nodemon** - Auto-reload para desenvolvimento
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
teccel-project/
├── backend/                    # API Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── prisma.ts      # Configuração do Prisma
│   │   ├── controllers/
│   │   │   ├── auth.ts        # Controladores de autenticação
│   │   │   └── contact.ts     # Controladores de contato
│   │   ├── middleware/
│   │   │   ├── auth.ts        # Middleware de autenticação
│   │   │   └── admin.ts       # Middleware de admin
│   │   ├── repository/
│   │   │   ├── auth.ts        # Repositório de usuários
│   │   │   └── contact.ts    # Repositório de contatos
│   │   ├── routes/
│   │   │   ├── auth.ts        # Rotas de autenticação
│   │   │   └── contact.ts     # Rotas de contato
│   │   ├── services/
│   │   │   ├── auth.ts        # Serviços de autenticação
│   │   │   └── contact.ts     # Serviços de contato
│   │   └── index.ts           # Servidor principal
│   ├── prisma/
│   │   ├── schema.prisma      # Schema do banco de dados
│   │   └── migrations/       # Migrações do banco
│   └── package.json
├── src/                       # Frontend React
│   ├── api/
│   │   └── api.ts            # Configuração do Axios
│   ├── components/
│   │   ├── Dashboard.tsx     # Página principal
│   │   ├── LoginForm.tsx     # Formulário de login
│   │   ├── RegisterForm.tsx  # Formulário de registro
│   │   ├── Profile.tsx       # Página de perfil
│   │   ├── DashboardReq.tsx  # Dashboard administrativo
│   │   └── Footer.tsx        # Rodapé
│   ├── service/
│   │   ├── authService.ts    # Serviços de autenticação
│   │   └── contactService.ts # Serviços de contato
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Ponto de entrada
│   └── index.css             # Estilos globais
├── img/                      # Imagens do projeto
├── package.json
└── README.md
```

## 🗄️ Modelos de Dados

### **User (Usuário)**
```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  cpf       String   @unique
  tel       String
  role      String   @default("user")  // "user" ou "admin"
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### **Contact (Contato)**
```prisma
model Contact {
  id        Int        @id @default(autoincrement())
  name      String
  email     String
  tel       String
  message   String
  userId    Int?       // nullable - caso esteja logado
  createdAt DateTime   @default(now())
}
```

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js (versão 18 ou superior)
- MySQL (versão 8.0 ou superior)
- npm ou yarn

### **Configuração do Banco de Dados**
1. Crie um banco MySQL
2. Configure a variável `DATABASE_URL` no arquivo `.env` do backend:
```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET="seu_jwt_secret_aqui"
```

### **Instalação**

#### **Backend**
```bash
# Navegue para o diretório do backend
cd teccel-project/backend

# Instale as dependências
npm install

# Execute as migrações do Prisma
npx prisma migrate dev

# Execute o servidor
npm run dev
```

#### **Frontend**
```bash
# Navegue para o diretório do projeto
cd teccel-project

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### **Acesso**
- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:5000`
- **API Docs**: `http://localhost:5000/api`

## 🔌 API Endpoints

### **Autenticação**
- `POST /api/auth/register` - Registro de usuário
- `POST /api/auth/login` - Login de usuário
- `POST /api/auth/logout` - Logout de usuário
- `GET /api/auth/me` - Informações do usuário logado

### **Contato**
- `POST /api/contact` - Enviar mensagem de contato
- `GET /api/contacts` - Listar todas as mensagens (admin)

## 🔒 Sistema de Autenticação

### **Fluxo de Autenticação**
1. **Registro**: Usuário se cadastra com dados únicos (CPF, email)
2. **Login**: Credenciais são validadas e JWT é gerado
3. **Cookie**: Token é armazenado em cookie httpOnly seguro
4. **Middleware**: Todas as rotas protegidas verificam o token
5. **Logout**: Cookie é limpo e sessão encerrada

### **Sistema de Roles**
- **User**: Usuário comum com acesso básico
- **Admin**: Administrador com acesso ao painel de requisições

## 🎨 Design e UX

### **Paleta de Cores**
- **Primária**: Azul (#3B82F6) e Roxo (#7C3AED)
- **Secundária**: Verde Esmeralda (#10B981) e Teal (#14B8A6)
- **Neutras**: Cinza (#6B7280) e Branco (#FFFFFF)

### **Componentes Principais**
- **Header**: Logo, navegação e menu mobile responsivo
- **Hero Section**: Apresentação da empresa com call-to-action
- **Produtos**: Cards responsivos com produtos em destaque
- **Contato**: Formulário integrado com validação e envio
- **Formulários**: Login e registro com design moderno
- **Dashboard Admin**: Tabela de requisições para administradores

### **Responsividade**
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Imagens**: Adaptáveis e otimizadas para diferentes telas

## 📚 Conceitos Aplicados

### **Frontend (React)**
- Componentes funcionais com hooks (useState, useEffect)
- Gerenciamento de estado local e global
- Navegação com React Router DOM
- Props e composição de componentes
- Integração com APIs REST
- Tratamento de erros e loading states

### **Backend (Node.js/Express)**
- Arquitetura MVC (Model-View-Controller)
- Middleware para autenticação e autorização
- Validação de dados e tratamento de erros
- Criptografia de senhas com bcrypt
- Autenticação JWT com cookies seguros
- ORM Prisma para interação com banco de dados

### **Banco de Dados**
- Relacionamentos entre tabelas
- Migrações e versionamento de schema
- Índices únicos para performance
- Campos nullable e timestamps automáticos

### **Segurança**
- Senhas criptografadas com bcrypt
- Tokens JWT para autenticação
- Cookies httpOnly para segurança
- Validação de entrada de dados
- CORS configurado adequadamente

## 🔧 Funcionalidades Técnicas

### **Validações**
- CPF único por usuário
- Email único por usuário
- Senha mínima de 6 caracteres
- Campos obrigatórios em formulários
- Validação de tokens JWT

### **Tratamento de Erros**
- Mensagens de erro específicas
- Fallbacks para estados de loading
- Redirecionamento automático em caso de erro
- Logs detalhados no backend

### **Performance**
- Lazy loading de componentes
- Otimização de imagens
- Caching de dados do usuário
- Queries otimizadas no banco

## 🎓 Aprendizados do Curso

Este projeto demonstra a aplicação prática dos conceitos aprendidos no **Curso de Desenvolvimento de JavaScript do SENAI**:

### **Frontend**
- **JavaScript Moderno**: ES6+, async/await, destructuring, modules
- **React**: Hooks, componentes funcionais, estado, props, roteamento
- **TypeScript**: Tipagem estática, interfaces, type safety
- **CSS Moderno**: Tailwind CSS, Flexbox, Grid, responsividade
- **Integração**: Comunicação com APIs REST, tratamento de dados

### **Backend**
- **Node.js**: Runtime JavaScript, módulos CommonJS/ES6
- **Express**: Framework web, middleware, roteamento
- **Banco de Dados**: MySQL, ORM Prisma, migrações
- **Autenticação**: JWT, bcrypt, cookies seguros
- **Arquitetura**: MVC, separação de responsabilidades

### **Ferramentas e Boas Práticas**
- **Desenvolvimento**: Vite, ESLint, Nodemon, Git
- **Banco de Dados**: Prisma Studio, migrações
- **Segurança**: Validação, criptografia, tokens seguros
- **Deploy**: Build otimizado, variáveis de ambiente

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso do SENAI.
Este projeto está sob a licença MIT.


Fique a vontade para mexer e aprender com o que for! Bons estudos!

## 👨‍💻 Autor

**Caio Velten**
- GitHub: [@Velten1](https://github.com/Velten1)
- LinkedIn: [Caio Velten](https://www.linkedin.com/in/caio-velten-1351b22b7/)
---

**SENAI Barueri - Curso de Desenvolvimento de JavaScript**  
*Transformando conhecimento em soluções práticas* 🚀