# CodeLeap Network - Desafio Técnico

## 📋 Sobre o Projeto

Este projeto é uma rede social desenvolvida como parte do desafio técnico para a CodeLeap, construída com , TypeScript e Vite. A aplicação permite que usuários criem uma conta e compartilhem posts em um feed comum.

## 🚀 Funcionalidades

- ✅ Autenticação simplificada com username
- 📝 Criação de posts
- 📎 Feed de posts em tempo real
- ✏️ Edição de posts próprios
- 🗑️ Exclusão de posts próprios
- 🔒 Rotas protegidas
- 📱 Design responsivo

## 🛠️ Tecnologias Utilizadas

- 19
- TypeScript
- Vite
- Router DOM
- CSS Modules
- Context API
- ESLint

## 📦 Como Instalar e Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/codeleap-network.git
cd codeleap-network
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

## 🗂️ Estrutura do Projeto

```
src/
├── components/    # Componentes reutilizáveis
├── context/      # Context API
├── hooks/        # Hooks customizados
├── pages/        # Páginas da aplicação
└── styles/       # Estilos CSS
```

## 🔌 Endpoints da API

- GET /careers/ - Lista todos os posts
- POST /careers/ - Cria novo post
- PATCH /careers/:id/ - Atualiza post existente
- DELETE /careers/:id/ - Remove post

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa verificação de código
- `npm run preview` - Visualiza versão de produção

## ⚙️ Requisitos do Sistema

- Node.js 16+
- NPM ou Yarn
- Navegador moderno

## 📄 Licença

Este projeto é parte de um desafio técnico e não deve ser utilizado para fins comerciais.

---

Desenvolvido com 💙 como parte do processo seletivo da CodeLeap
