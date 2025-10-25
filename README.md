# 🛠️ CellTech - Assistência Técnica

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como trabalho de conclusão do **Curso de Desenvolvimento de JavaScript** do **SENAI Barueri**. O CellTech é uma aplicação web moderna para assistência técnica de dispositivos móveis e eletrônicos, oferecendo uma interface intuitiva para clientes se cadastrarem, fazerem login e entrarem em contato com a empresa.

## 🎯 Objetivo

Criar uma plataforma web responsiva que simula o site de uma assistência técnica, demonstrando conhecimentos em desenvolvimento frontend moderno com React, TypeScript e Tailwind CSS.

## ✨ Funcionalidades

### 🏠 **Dashboard (Página Principal)**
- Apresentação da empresa CellTech
- Seção de produtos em destaque (iPhone, MacBook, Películas)
- Formulário de contato integrado
- Design responsivo com menu hamburger para mobile
- Navegação suave entre seções

### 🔐 **Sistema de Autenticação**
- **Login**: Formulário de acesso com validação
- **Registro**: Cadastro completo com campos obrigatórios
- **Navegação**: Integração entre páginas de login e registro
- **Design**: Interface moderna com gradientes e animações

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

### **Styling**
- **Tailwind CSS 4.1.15** - Framework CSS utility-first
- **CSS Gradients** - Efeitos visuais modernos
- **Responsive Design** - Layout adaptável para todos os dispositivos

### **Ferramentas de Desenvolvimento**
- **ESLint 9.36.0** - Linter para qualidade de código
- **TypeScript ESLint** - Regras específicas para TypeScript
- **Vite Plugin React** - Integração React com Vite

## 📁 Estrutura do Projeto

```
teccel-project/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx      # Página principal
│   │   ├── LoginForm.tsx      # Formulário de login
│   │   ├── RegisterForm.tsx   # Formulário de registro
│   │   └── Footer.tsx         # Rodapé
│   ├── assets/
│   │   └── react.svg
│   ├── App.tsx                # Componente principal
│   ├── main.tsx              # Ponto de entrada
│   ├── App.css               # Estilos globais
│   └── index.css             # Estilos base
├── img/                      # Imagens do projeto
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js (versão 18 ou superior)
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Navegue para o diretório do projeto
cd teccel-project

# Instale as dependências
npm install
```

### **Executar em Desenvolvimento**
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:5173`

### **Build para Produção**
```bash
npm run build
```

### **Preview da Build**
```bash
npm run preview
```

### **Linting**
```bash
npm run lint
```

## 🎨 Design e UX

### **Paleta de Cores**
- **Primária**: Azul (#3B82F6) e Roxo (#7C3AED)
- **Secundária**: Verde Esmeralda (#10B981) e Teal (#14B8A6)
- **Neutras**: Cinza (#6B7280) e Branco (#FFFFFF)

### **Componentes Principais**
- **Header**: Logo, navegação e menu mobile
- **Hero Section**: Apresentação da empresa com call-to-action
- **Produtos**: Cards responsivos com produtos em destaque
- **Contato**: Formulário integrado com validação
- **Formulários**: Login e registro com design moderno

### **Responsividade**
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Imagens**: Adaptáveis e otimizadas para diferentes telas

## 📚 Conceitos Aplicados

### **React**
- Componentes funcionais com hooks
- Gerenciamento de estado com useState
- Navegação com React Router
- Props e composição de componentes

### **TypeScript**
- Tipagem de props e estados
- Interfaces para estruturas de dados
- Type safety em todo o projeto

### **CSS/Tailwind**
- Utility-first CSS
- Responsive design
- Gradientes e animações
- Flexbox e Grid Layout

### **Responsive Design**
- Mobile-first approach
- Breakpoints responsivos
- Imagens adaptáveis
- Menu hamburger funcional

## 🎓 Aprendizados do Curso

Este projeto demonstra a aplicação prática dos conceitos aprendidos no **Curso de Desenvolvimento de JavaScript do SENAI**:

- **JavaScript Moderno**: ES6+, async/await, destructuring
- **React**: Hooks, componentes, estado, props
- **TypeScript**: Tipagem, interfaces, type safety
- **CSS Moderno**: Flexbox, Grid, responsividade
- **Ferramentas**: Vite, ESLint, Git
- **Boas Práticas**: Código limpo, estrutura de projeto, nomenclatura

*Curso de Desenvolvimento de JavaScript*

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso do SENAI.

---

**SENAI Barueri - Curso de Desenvolvimento de JavaScript**  
*Transformando conhecimento em soluções práticas* 🚀