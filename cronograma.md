# 📋 Status de Desenvolvimento: Front-end vs. Back-end Avalista

Este documento mapeia o progresso do desenvolvimento do **front-end** em relação às **Histórias de Usuário (HUs)** concluídas pelo **back-end**.

---

## 🧭 Legenda de Status (Front-end)

| Emoji | Significado |
| :--- | :--- |
| ✅ | **Concluído:** A funcionalidade principal está implementada. |
| 🟡 | **Em Andamento:** A interface foi iniciada, mas não está 100% completa ou integrada. |
| 🔵 | **A Fazer:** O back-end está pronto, e o front-end pode iniciar o desenvolvimento. |
| ⚫️ | **Pendente:** O front-end está bloqueado, aguardando a finalização da API. |

---

## 👤 Funcionalidades do Avaliador (Usuário Comum)

### 🔐 Autenticação e Perfil

| HU | Funcionalidade | Back-end | Front-end | Observações |
| :--- | :--- | :---: | :---: | :--- |
| HU001 | Criar conta | ✅ | ✅ | Implementado e conectado. |
| HU002 | Fazer login | ✅ | ✅ | Implementado e conectado, com lógica de roles. |
| HU003 | Visualizar meu perfil | ⚫️ | ⚫️ | Front-end pronto, aguardando API ser finalizada. |
| HU025 | Visualizar meus emblemas | ⚫️ | ⚫️ | UI de emblemas pronta, aguardando API. |
| HU044 | Visualizar minhas estatísticas| ⚫️ | ⚫️ | UI de métricas pronta, aguardando API. |

### 📁 Gerenciamento de Projetos
| HU | Funcionalidade | Back-end | Front-end | Observações |
| :--- | :--- | :---: | :---: | :--- |
| HU004 | Criar projeto | ✅ | ✅ | Implementado como modal. |
| HU005 | Visualizar meus projetos | ✅ | ✅ | Página dedicada `/projects` implementada e conectada. |
| HU006 | Detalhar meu projeto | ✅ | ✅ | Página de detalhes com layout e componentes pronta. |
| HU009 | Cadastrar uma tela | ✅ | ✅ | Modal implementado e pronto para integração final. |
| HU007 | Editar meu projeto | ⚫️ | ⚫️ | UI do modal de edição pronta, aguardando API. |
| HU008 | Adicionar avaliadores | ⚫️ | ⚫️ | UI do modal de adicionar membros pronta, aguardando API. |
| HU010 | Editar um fluxo (tela) | ⚫️ | ⚫️ | Pendente. |
| HU011 | Excluir um fluxo (tela) | ⚫️ | ⚫️ | Pendente. |

### 📊 Fluxo de Avaliação Heurística
| HU | Funcionalidade | Back-end | Front-end | Observações |
| :--- | :--- | :---: | :---: | :--- |
| HU012 | Iniciar avaliação individual | ⚫️ | ⚫️ | UI de avaliação (organograma) pronta, aguardando API. |
| HU013 | Adicionar problema à avaliação | ⚫️ | ⚫️ | Pendente. |
| HU014 | Visualizar progresso/avaliações | ⚫️ | ⚫️ | Pendente. |
| HU015 | Visualizar progresso por categoria| ⚫️ | ⚫️ | Pendente. |
| HU016 | Finalizar avaliação de categoria | ⚫️ | ⚫️ | Pendente. |
| HU017 | Finalizar avaliação individual | ⚫️ | ⚫️ | Pendente. |
| HU019 | Visualizar problemas individuais | ⚫️ | ⚫️ | Pendente. |
| HU020 | Editar problemas individuais | ⚫️ | ⚫️ | Pendente. |
| HU021 | Iniciar avaliação final | ⚫️ | ⚫️ | Pendente. |
| HU022 | Editar problemas para avaliação final| ⚫️ | ⚫️ | Pendente. |
| HU023 | Marcar problema final como resolvido| ⚫️ | ⚫️ | Pendente. |
| HU047 | Adicionar problema na avaliação final| ⚫️ | ⚫️ | Pendente. |

### ✍️ Sugestões
| HU | Funcionalidade | Back-end | Front-end | Observações |
| :--- | :--- | :---: | :---: | :--- |
| HU036 | Sugerir uma nova categoria | ⚫️ | ⚫️ | Pendente. |
| HU037 | Sugerir uma nova diretriz | ⚫️ | ⚫️ | Pendente. |

---

## 👑 Funcionalidades do Administrador

### 🧠 Gerenciamento de Heurísticas
| HU | Funcionalidade | Back-end | Front-end | Observações |
| :--- | :--- | :---: | :---: | :--- |
| HU026 | Cadastrar categoria | ✅ | 🟡 | UI do modal e página de admin iniciada. |
| HU027 | Editar categoria | ✅ | 🔵 | Back-end pronto. |
| HU029 | Detalhar categoria | ✅ | 🔵 | Back-end pronto. |
| HU030 | Deletar categoria | ✅ | 🔵 | Back-end pronto. |
| HU028 | Listar categorias | ⚫️ | ⚫️ | Aguardando API. |
| HU031 | Cadastrar diretriz | ⚫️ | ⚫️ | Pendente. |
| HU032 | Editar diretriz | ⚫️ | ⚫️ | Pendente. |
| HU033 | Listar diretriz | ⚫️ | ⚫️ | Pendente. |
| HU034 | Detalhar diretriz | ⚫️ | ⚫️ | Pendente. |
| HU035 | Deletar diretriz | ⚫️ | ⚫️ | Pendente. |
| HU042 | Visualizar listas | ⚫️ | ⚫️ | Pendente. |
| HU047 | Detalhar lista | ⚫️ | ⚫️ | Pendente. |

### 📨 Gestão Geral
| HU | Funcionalidade | Back-end | Front-end | Observações |
| :--- | :--- | :---: | :---: | :--- |
| HU038 | Listar sugestões de categorias | ⚫️ | ⚫️ | Pendente. |
| HU039 | Listar sugestões de diretrizes | ⚫️ | ⚫️ | Pendente. |
| HU040 | Analisar sugestão de categoria | ⚫️ | ⚫️ | Pendente. |
| HU041 | Analisar sugestão de diretriz | ⚫️ | ⚫️ | Pendente. |
| HU043 | Listagem de avalistas | ⚫️ | ⚫️ | Pendente. |
| HU045 | Visualizar estatísticas do projeto| ⚫️ | ⚫️ | Pendente. |
| HU046 | Visualizar todos os projetos | ⚫️ | ⚫️ | Pendente. |
| HU024 | Atribuir emblemas (Sistema) | ⚫️ | ⚫️ | Lógica do sistema. |
