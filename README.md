# Avalista - Frontend

Este repositório contém o código-fonte do front-end da aplicação **Avalista**, desenvolvido com **React**, **TypeScript** e **Vite**.

## 🏠 Arquitetura do Projeto

Para garantir organização, escalabilidade e manutenção facilitada, adotamos a **arquitetura baseada em funcionalidades** (*Feature-Based Architecture*). Em vez de agrupar arquivos por tipo (ex: componentes, serviços), eles são organizados por funcionalidade.

```
/src
|
|--- /api                # Camada de comunicação com o back-end
|     |--- apiClient.ts      # Cliente Axios configurado com baseURL, interceptadores etc.
|     |--- authApi.ts        # Funções da API relacionadas à autenticação
|
|--- /assets             # Arquivos estáticos (imagens, ícones, SVGs)
|
|--- /components         # Componentes reutilizáveis
|     |--- /ui               # Componentes visuais (Input, Button, Modal, etc.)
|
|--- /features           # Cada pasta representa uma funcionalidade
|     |--- /auth             # Exemplo: funcionalidades de autenticação
|           |--- Login.tsx       # Componente com lógica e UI da feature
|
|--- /mocks              # Dados falsos para simulação de respostas da API
|     |--- auth.mocks.ts
|
|--- /pages              # Páginas completas da aplicação
|     |--- LoginPage.tsx     # Monta a página com base nos componentes de features
|
|--- /routes             # Configuração das rotas com React Router
|
|--- /styles             # Estilos globais, reset.css, variáveis CSS, etc.
|
|--- /types              # Interfaces e tipos TypeScript compartilhados
|     |--- auth.types.ts
|
|--- App.tsx             # Configura o roteador e estrutura principal da aplicação
|--- main.tsx            # Ponto de entrada do React
```

---

## ⚒️ Configuração do Ambiente

### ⚡ Pré-requisitos

* [Node.js](https://nodejs.org/) (gerenciado via `nvm-windows`)
* [Git](https://git-scm.com/)

### ✅ Passos de Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/Avalista/frontend.git

# 2. Acesse a pasta
cd frontend

# 3. Ative a versão correta do Node.js
nvm use 20.16.0

# 4. Instale as dependências
npm install

# 5. Rode o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## 📈 Comandos Principais

| Comando                | Descrição                               |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento    |
| `npm install <pacote>` | Instala uma nova dependência do projeto |
| `npm run build`        | Gera a build de produção                |
| `npm run lint`         | Executa o linter (caso configurado)     |

Para rodar o **back-end** localmente, siga as instruções na página do repositório [Avalista/backend](https://github.com/Avalista/backend).

---

## 🧠 Conceitos Importantes & Boas Práticas

### 1. `nvm-windows`

Lembre-se de ativar o Node com:

```bash
nvm use 20.16.0
```

### 2. Variáveis de Ambiente (`.env`)

Informações sensíveis devem estar no `.env` (exemplo: `.env.example`). Nunca envie esse arquivo ao GitHub.

### 3. API & Mocks

Chamadas de API ficam isoladas na pasta `/api`. Durante o desenvolvimento, você pode simular respostas usando arquivos em `/mocks`, acelerando o desenvolvimento da interface.

### 4. Commits Semânticos

Use o padrão:

```bash
<tipo>(escopo): mensagem curta
```

**Exemplos:**

* `feat(auth): adiciona lógica de login`
* `fix(routes): corrige redirecionamento pós-login`
* `refactor(ui): melhora estrutura do Modal`

### 5. Fluxo de Branches

```bash
# Criar uma nova branch para uma feature
git switch -c feat/nome-da-feature

# Depois dos commits
git push -u origin feat/nome-da-feature
```

---

## 🔧 Suporte

Para dúvidas, sugestões ou problemas, abra uma [issue](https://github.com/Avalista/frontend/issues) ou entre em contato com os mantenedores do projeto.

---

## 🎓 Licença

Este projeto está licenciado sob os termos da licença MIT.
