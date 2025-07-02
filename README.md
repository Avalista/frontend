<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="40" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="40" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="40" />
</p>


# Avalista - Frontend

Este repositório contém o código-fonte do front-end da aplicação **Avalista**. Desenvolvido com um ecossistema moderno de **React**, **TypeScript** e **Vite**, o projeto visa criar uma plataforma rica e intuitiva para a realização de avaliações heurísticas.

## 💡 A Filosofia do Projeto

**Avalista** é uma palavra que nasce da fusão de **avaliação** com **lista**, fazendo referência direta à **Lista Eureca 2024**, que serve de base para o nosso projeto.

Nossa missão é criar uma ferramenta que transforme a avaliação de interfaces em um **processo acessível, educativo e motivador**, propondo um novo papel: o de **analista**, alguém que avalia com método, interpreta dados e propõe melhorias conscientes.

---

## 🛠️ Tecnologias e Ferramentas

O front-end é construído com as seguintes tecnologias e bibliotecas principais:

| Categoria       | Ferramenta           | Propósito                                                 |
| :-------------- | :------------------- | :-------------------------------------------------------- |
| **Base**        | React & TypeScript   | Construção da interface e tipagem estática.               |
| **Build Tool**  | Vite                 | Servidor de desenvolvimento rápido e otimização da build. |
| **Roteamento**  | React Router DOM     | Para navegação entre páginas (Single-Page Application).   |
| **Requisições** | Axios                | Cliente HTTP para comunicação com a API do back-end.      |
| **Ícones**      | Lucide React         | Biblioteca de ícones SVG, leve e customizável.            |
| **Organograma** | React Flow           | Para a visualização de hierarquias (Lista Eureca).        |
| **Estilização** | CSS Puro + Variáveis | Sistema de design customizado e de fácil manutenção.      |

---

## 🏗️ Arquitetura do Projeto

Para garantir organização e escalabilidade, adotamos a **arquitetura baseada em funcionalidades** (*Feature-Based Architecture*).

```
/src
|
|-- /api           # Camada de abstração para a comunicação com o back-end.
|   |-- apiClient.ts   # Instância central do Axios com interceptadores.
|   |-- authApi.ts     # Funções específicas da API de autenticação.
|
|-- /assets        # Arquivos estáticos como imagens e SVGs.
|
|-- /components
|   |-- /ui          # Componentes "burros", puros e reutilizáveis (Modal, DropdownMenu).
|
|-- /features      # O coração da arquitetura. Cada pasta é uma funcionalidade completa.
|   |-- /auth        # Contém os componentes e lógica de Login e Cadastro.
|   |-- /dashboard   # Contém todos os sub-componentes do Dashboard (Sidebar, Cards, etc).
|
|-- /hooks         # Hooks customizados para encapsular lógicas reutilizáveis.
|   |-- useDropdown.ts # Lógica para abrir/fechar menus dropdown.
|
|-- /mocks         # Dados falsos para desenvolvimento offline.
|
|-- /pages         # Componentes "montadores", que representam as páginas da aplicação.
|
|-- /routes        # Configuração das rotas e componentes de proteção.
|
|-- /styles        # Arquivos de estilo globais.
|   |-- index.css        # Variáveis CSS globais, fontes e reset.
|   |-- design-system.css # Classes de componentes reutilizáveis.
|
|-- /types         # Interfaces e tipos TypeScript compartilhados.
|
|--- App.tsx        # Definição das rotas da aplicação com createBrowserRouter.
|--- main.tsx       # Ponto de entrada que renderiza a aplicação na DOM.
```

---

## 🎨 Sistema de Design (Design System)

Construímos um sistema de design coeso para garantir consistência visual. Ele é baseado em variáveis CSS globais e classes de componentes reutilizáveis.

### Paleta de Cores Mutante

A identidade do Avalista é flexível. Cada tema de cor representa uma categoria de avaliação, com uma cor **primária** (vibrante) e uma **pastel** (suporte).

| 🎭 Nome do Tema         | 🎯 Cor Primária | 🌸 Cor Pastel |
| :---------------------- | :-------------- | :------------ |
| **Funcional (AF)**      | `#070248`       | `#CECDFF`     |
| **Comunicação (CO)**    | `#36A08E`       | `#D5FFF9`     |
| **Formação (FM)**       | `#4DAA00`       | `#E1FCCF`     |
| **Navegação (NA)**      | `#D57C19`       | `#FFE6C5`     |
| **Usuário (PU)**        | `#C61819`       | `#FFD4D4`     |
| **Dispositivo (PD)**    | `#782A53`       | `#FBDAEC`     |
| **Acessibilidade (AC)** | `#4C85C7`       | `#C7E2FF`     |
| **LGPD**                | `#9C1DFF`       | `#D9D2E9`     |

### Tipografia

* **Títulos e Cabeçalhos:** `Manrope`
* **Corpo de Texto e Inputs:** `DM Mono`

### Componentes de Base (Classes Globais)

Definimos classes reutilizáveis em `design-system.css` para os elementos mais comuns:

* **`.card`**: Estilo base para todos os painéis e contêineres.
* **`.btn`**: Classe base para botões, com reset e transições.
* **`.btn-primary`**: Botão principal (`brand-primary`).
* **`.btn-secondary`**: Botão secundário com borda.
* **`.form-group`, `.form-label`, `.form-input`, `.form-textarea`**: Classes para formulários.

---

## ⚙️ Guia para Desenvolvedores

### Configuração do Ambiente

1. Clone o repositório: `git clone https://github.com/Avalista/frontend.git`
2. Acesse a pasta: `cd frontend`
3. Ative a versão correta do Node.js: `nvm use`
4. Instale as dependências: `npm install`

### Comandos Principais

* **Iniciar o servidor de desenvolvimento:**

  ```bash
  npm run dev
  ```
* **Instalar uma nova dependência:**

  ```bash
  npm install nome-do-pacote
  ```

### Conceitos Importantes do Projeto

* **O Interruptor de API (Real vs. Mock):** Use o `.env`:

  * `VITE_API_MODE=mock`: Usa dados da pasta `/mocks`
  * `VITE_API_MODE=real` ou ausente: Usa a API real

* **Padrão "Visualizar e Editar":** Em telas como Perfil, usamos um estado `isEditing` para alternar entre visualização e edição dos dados.

---

Se você chegou até aqui: parabéns, você já é meio Avalista. 🚀
