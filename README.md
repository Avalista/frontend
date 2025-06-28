# Guia Basico do Avalista - Frontend

Este repositório contém o código-fonte do front-end para a aplicação Avalista, desenvolvido com React, TypeScript e Vite.

## 🏗️ Arquitetura do Projeto

Para garantir que o projeto seja organizado, escalável e fácil de manter, adotamos uma arquitetura baseada em funcionalidades (Feature-Based Architecture). A ideia principal é agrupar os arquivos pela funcionalidade a que eles pertencem, em vez de pelo tipo de arquivo.
<!-- arrumar essa estrutura -->
A estrutura principal de pastas dentro de `src/` é a seguinte:

/src
|
|--- /api           # Camada de comunicação com o back-end.
|    |--- apiClient.ts   # Cliente Axios pré-configurado (com baseURL, etc).
|    |--- authApi.ts     # Funções específicas da API de autenticação.
|
|--- /assets        # Imagens, SVGs, e outros arquivos estáticos.
|
|--- /components
|    |--- /ui        # Componentes de UI genéricos e reutilizáveis (Button, Input, Modal).
|
|--- /features      # O coração da arquitetura: cada pasta é uma funcionalidade.
|    |--- /auth      # Ex: Funcionalidade de autenticação.
|         |--- Login.tsx # O componente "inteligente" com a lógica e UI da feature.
|
|--- /mocks         # Dados falsos para simular a API durante o desenvolvimento.
|    |--- auth.mocks.ts
|
|--- /pages         # Componentes "montadores" que representam uma página completa.
|    |--- LoginPage.tsx # Importa componentes de 'features' para construir a tela.
|
|--- /routes        # Configuração das rotas da aplicação com React Router.
|
|--- /styles        # Estilos globais, reset, variáveis CSS, etc.
|
|--- /types         # Definições de interfaces e tipos do TypeScript.
|    |--- auth.types.ts
|
|--- App.tsx        # Configuração do roteador.
|--- main.tsx       # Ponto de entrada da aplicação, renderiza o React na DOM.


## 🛠️ Configuração do Ambiente

Para rodar este projeto localmente, siga os passos abaixo.

**Pré-requisitos:**
* **Node.js**: Gerenciado através do **`nvm-windows`**. É essencial ativá-lo a cada nova sessão de terminal.
* **Git**: Para controle de versão.

**Passos de Instalação:**
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Avalista/frontend.git](https://github.com/Avalista/frontend.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd frontend
    ```
3.  **Ative a versão do Node.js:** (Exemplo abaixo, use a versão que você instalou)
    ```bash
    nvm use 20.16.0
    ```
4.  **Instale as dependências:**
    ```bash
    npm install
    ```

## ✨ Comandos Principais

Aqui estão os comandos que você mais usará no dia a dia.

* **Iniciar o servidor de desenvolvimento do Front-end:**
    ```bash
    npm run dev
    ```
    Isso iniciará a aplicação, geralmente em `http://localhost:5173`.

* **Instalar uma nova dependência:**
    ```bash
    npm install nome-do-pacote
    ```

* **Para rodar o Back-end localmente (necessário para dados reais):**
    1.  Navegue até a pasta do back-end.
    2.  Ative o NVM: `nvm use <versao>`
    3.  Instale as dependências: `npm install`
    4.  Gere o cliente Prisma: `npx prisma generate`
    5.  Inicie o servidor: `npm run start:dev`

## 🧠 Conceitos e Boas Práticas para Rever

Esta seção resume os pontos-chave que passamos e que são importantes para o desenvolvimento do projeto.

#### 1. **Gerenciamento de Ambiente com `nvm-windows`**
Lembre-se que cada terminal novo é uma sessão nova. O primeiro passo é sempre ativar a versão correta do Node com `nvm use <versao>` para que os comandos `node` e `npm` funcionem.

#### 2. **Variáveis de Ambiente (`.env`)**
Informações sensíveis (chaves de API, segredos de JWT, URLs de banco de dados) NUNCA são salvas no código. Elas devem ser colocadas em um arquivo `.env` na raiz do projeto. Este arquivo é ignorado pelo Git (`.gitignore`) por segurança. Sempre procure por um `.env.example` como modelo.

#### 3. **Camada de API e Mocking**
Manter a lógica de chamadas (`axios`, `fetch`) em uma pasta `/api` separada (abstração) é uma ótima prática. Isso permitiu que a gente "enganasse" o front-end facilmente, trocando a chamada real por dados falsos (`mocks`). Essa técnica te dá autonomia para desenvolver a UI sem depender do back-end.

#### 4. **Commits Semânticos**
Usar um padrão para as mensagens de commit, como `tipo(escopo): mensagem`, torna o histórico do projeto muito mais legível.
* **`feat`**: Para novas funcionalidades.
* **`fix`**: Para correção de bugs.
* **`refactor`**: Para melhorias na estrutura do código sem mudar o comportamento.
* **`style`**: Para mudanças de formatação.
* **`chore`**: Para tarefas de manutenção (atualizar pacotes, etc).

#### 5. **Fluxo de Trabalho com Git (Branches)**
Sempre crie uma nova branch para cada funcionalidade ou correção.
```bash
# Sincroniza com o repositório remoto
git fetch origin

# Cria uma nova branch e já entra nela
git switch -c feat/nome-da-feature

# Depois de fazer os commits...
# Envia a sua branch para o GitHub
git push -u origin feat/nome-da-feature
