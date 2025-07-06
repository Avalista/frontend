# 📊 Status de Desenvolvimento por Funcionalidade

Este documento mapeia o progresso do front-end com base nos módulos da aplicação e no status de desenvolvimento do back-end do projeto **Avalista**.

---

| Emoji  | Significado                                                   |
|--------|---------------------------------------------------------------|
| ✅     | **Concluído**: A funcionalidade principal está implementada.   |
| 🟡     | **Em Andamento**: Interface iniciada, pendente de finalização. |
| 🔵     | **A Fazer**: Back-end está pronto, front-end pode começar.     |
| ⚫️     | **Pendente**: Bloqueado, aguardando finalização da API.        |

---

## 👤 Funcionalidades do Avaliador (Usuário Comum)

### 🔐 Autenticação e Perfil

| HU     | Funcionalidade                 | Back-end | Front-end | Observações                                              |
|--------|--------------------------------|----------|-----------|----------------------------------------------------------|
| HU001  | Criar conta                    | ✅       | ✅        | Implementado e conectado.                                |
| HU002  | Fazer login                    | ✅       | ✅        | Implementado e conectado.                                |
| HU003  | Visualizar meu perfil          | ⚫️       | ⚫️        | Front-end pronto, aguardando API ser finalizada.         |
| HU025  | Visualizar meus emblemas       | ⚫️       | ⚫️        | UI de emblemas pronta no perfil, aguardando API.         |
| HU044  | Visualizar minhas estatísticas | ⚫️       | ⚫️        | UI de métricas pronta no perfil, aguardando API.         |

---

### 📁 Gerenciamento de Projetos

| HU     | Funcionalidade                  | Back-end | Front-end | Observações                                                      |
|--------|----------------------------------|----------|-----------|------------------------------------------------------------------|
| HU004  | Criar projeto                    | ✅       | ✅        | Implementado como modal.                                         |
| HU005  | Visualizar meus projetos         | ✅       | ✅        | Página dedicada `/projects` implementada.                        |
| HU006  | Detalhar meu projeto             | ✅       | ✅        | Página de detalhes com layout e componentes pronta.              |
| HU009  | Cadastrar uma tela               | ✅       | ✅        | Modal implementado e pronto para integração.                     |
| HU007  | Editar meu projeto               | ⚫️       | ⚫️        | UI do modal de edição pronta, aguardando API.                    |
| HU008  | Adicionar avaliadores ao projeto| ⚫️       | ⚫️        | UI do modal de adicionar membros pronta, aguardando API.         |
| HU010  | Editar um fluxo (tela)           | ⚫️       | ⚫️        | Pendente.                                                        |
| HU011  | Excluir um fluxo (tela)          | ⚫️       | ⚫️        | Pendente.                                                        |

---

### 📊 Fluxo de Avaliação Heurística

| HU     | Funcionalidade                         | Back-end | Front-end | Observações                                                   |
|--------|-----------------------------------------|----------|-----------|---------------------------------------------------------------|
| HU012  | Iniciar avaliação individual            | ⚫️       | ⚫️        | UI de avaliação com organograma pronta, aguardando API.       |
| HU013  | Adicionar problema à avaliação          | ⚫️       | ⚫️        | Pendente.                                                     |
| HU014  | Visualizar progresso por tela           | ⚫️       | ⚫️        | Pendente.                                                     |
| HU015  | Visualizar progresso por categoria      | ⚫️       | ⚫️        | Pendente.                                                     |
| HU016  | Finalizar avaliação de categoria        | ⚫️       | ⚫️        | Pendente.                                                     |
| HU017  | Finalizar avaliação individual          | ⚫️       | ⚫️        | Pendente.                                                     |
| HU018  | Visualizar avaliações individuais       | ⚫️       | ⚫️        | Pendente.                                                     |
| HU019  | Visualizar problemas individuais        | ⚫️       | ⚫️        | Pendente.                                                     |
| HU020  | Editar problemas individuais            | ⚫️       | ⚫️        | Pendente.                                                     |
| HU021  | Iniciar avaliação final                 | ⚫️       | ⚫️        | Pendente.                                                     |
| HU022  | Editar problemas para avaliação final   | ⚫️       | ⚫️        | Pendente.                                                     |
| HU023  | Marcar problema final como resolvido    | ⚫️       | ⚫️        | Pendente.                                                     |
| HU047  | Adicionar problema na avaliação final   | ⚫️       | ⚫️        | Pendente.                                                     |

---

## 👑 Funcionalidades do Administrador

### 🧠 Gerenciamento de Heurísticas

| HU     | Funcionalidade             | Back-end | Front-end | Observações                                       |
|--------|-----------------------------|----------|-----------|--------------------------------------------------|
| HU026  | Cadastrar categoria         | ✅       | 🔵        | Back-end pronto.                                 |
| HU027  | Editar categoria            | ✅       | 🔵        | Back-end pronto.                                 |
| HU029  | Detalhar categoria          | ✅       | 🔵        | Back-end pronto.                                 |
| HU030  | Deletar categoria           | ✅       | 🔵        | Back-end pronto.                                 |
| HU028  | Listar categorias           | ⚫️       | ⚫️        | UI existe no dashboard, mas funcionalidade admin a fazer. |
| HU031  | Cadastrar diretriz         | ⚫️       | ⚫️        | Pendente.                                        |
| HU032  | Editar diretriz            | ⚫️       | ⚫️        | Pendente.                                        |
| HU033  | Listar diretriz            | ⚫️       | ⚫️        | Pendente.                                        |
| HU034  | Detalhar diretriz          | ⚫️       | ⚫️        | Pendente.                                        |
| HU035  | Deletar diretriz           | ⚫️       | ⚫️        | Pendente.                                        |
| HU042  | Visualizar listas           | ⚫️       | ⚫️        | Pendente.                                        |
| HU047  | Detalhar lista              | ⚫️       | ⚫️        | Pendente.                                        |

---

### 📨 Gestão de Sugestões e Usuários

| HU     | Funcionalidade                    | Back-end | Front-end | Observações             |
|--------|------------------------------------|----------|-----------|--------------------------|
| HU036  | Sugerir uma nova categoria         | ⚫️       | ⚫️        | Pendente.               |
| HU037  | Sugerir uma nova diretriz          | ⚫️       | ⚫️        | Pendente.               |
| HU038  | Listar sugestões de categorias     | ⚫️       | ⚫️        | Pendente.               |
| HU039  | Listar sugestões de diretrizes     | ⚫️       | ⚫️        | Pendente.               |
| HU040  | Analisar sugestão de categoria     | ⚫️       | ⚫️        | Pendente.               |
| HU041  | Analisar sugestão de diretriz      | ⚫️       | ⚫️        | Pendente.               |
| HU043  | Listagem de avalistas              | ⚫️       | ⚫️        | Pendente.               |

---

### 🏅 Sistema e Gamificação

| HU     | Funcionalidade                    | Back-end | Front-end | Observações                                                |
|--------|------------------------------------|----------|-----------|-------------------------------------------------------------|
| HU024  | Atribuir emblemas ao avaliador     | ⚫️       | ⚫️        | Lógica do sistema.                                          |
| HU045  | Visualizar estatísticas do projeto | ⚫️       | ⚫️        | UI existe no detalhe do projeto, aguardando API.            |
| HU046  | Visualizar todos os projetos       | ⚫️       | ⚫️        | Pendente.                                                   |
