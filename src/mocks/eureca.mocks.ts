export const eurecaData = [
  {
    id: 'cat-AF',
    code: 'AF',
    name: 'Aspectos Funcionais',
    heuristics: [
      { id: 'AF1', code: 'AF1', name: 'Funcionalidade', description: 'As ações apresentadas na tela do usuário devem se comportar de acordo com o objetivo proposto.' },
      { id: 'AF2', code: 'AF2', name: 'Flexibilidade de ação', description: 'Oferecer distintas alternativas para uma mesma ação como o uso de atalhos.' },
      { id: 'AF3', code: 'AF3', name: 'Edição de ações', description: 'Permitir que ações realizadas sejam desfeitas e refeitas.' },
      { id: 'AF4', code: 'AF4', name: 'Recuperação de dados perdidos', description: 'Permitir que informações perdidas, em decorrência de interrupções, sejam recuperadas.' },
      { id: 'AF5', code: 'AF5', name: 'Autopreenchimento', description: 'Preencher campos de digitação com informações armazenadas a priori.' },
      { id: 'AF6', code: 'AF6', name: 'Sugestão de preenchimento', description: 'Sugerir informações, a partir da incidência das buscas ou intenção de anúncios.' },
      { id: 'AF7', code: 'AF7', name: 'Escrita Inteligente', description: 'Oferecer sugestões de escritas preditivas, a partir de padrões.' },
      { id: 'AF8', code: 'AF8', name: 'Cancelamento de ações', description: 'Permitir o cancelamento de ações realizadas, em qualquer momento da interação.' },
      { id: 'AF9', code: 'AF9', name: 'Prevenção de erros', description: 'Prevenir a ocorrência de erros, solicitando confirmações antes da realização definitiva de ações.' },
      { id: 'AF10', code: 'AF10', name: 'Restrições', description: 'Restringir o preenchimento de informações, para evitar erros e minimizar esforços.' },
      { id: 'AF11', code: 'AF11', name: 'Digitação otimizada', description: 'Facilitar a entrada de textos, utilizando listas e caixas de seleção (checkbox).' },
    ],
  },
  {
    id: 'cat-CO',
    code: 'CO',
    name: 'Comunicação',
    heuristics: [
      { id: 'CO1', code: 'CO1', name: 'Linguagem apropriada', description: 'Promover uma comunicação próxima ao conceito do projeto.' },
      { id: 'CO2', code: 'CO2', name: 'Feedback adequado', description: 'Responder à toda ação do usuário, de forma imediata.' },
      { id: 'CO3', code: 'CO3', name: 'Affordance - dicas', description: 'Oferecer dicas para ajudar a compreensão do uso do ambiente.' },
      { id: 'CO4', code: 'CO4', name: 'Metáfora', description: 'Utilizar signos gráficos que representam o mundo real.' },
      { id: 'CO5', code: 'CO5', name: 'Confiabilidade', description: 'Mostrar com linguagem verbal e visual que o ambiente é seguro.' },
      { id: 'CO6', code: 'CO6', name: 'Adequação ao contexto', description: 'Utilizar linguagem visual apropriada ao contexto funcional, estético, histórico e cultural.' },
      { id: 'CO7', code: 'CO7', name: 'Adequação na coleta de dados', description: 'Em formulários de pesquisa e cadastro, coletar somente informações necessárias ao projeto.' },
      { id: 'CO8', code: 'CO8', name: 'Ajuda', description: 'Disponibilizar em destaque tópicos de ajuda com linguagem fácil e contextualizadas.' },
      { id: 'CO9', code: 'CO9', name: 'Avaliação do usuário', description: 'Possibilitar coleta de avaliações do usuário sobre sua experiência.' },
    ],
  },
  {
    id: 'cat-FM',
    code: 'FM',
    name: 'Formatação',
    heuristics: [
      { id: 'FM1', code: 'FM1', name: 'Visibilidade', description: 'Manter visíveis as informações principais para minimizar esforço cognitivo.' },
      { id: 'FM2', code: 'FM2', name: 'Hierarquia da informação', description: 'Distribuir a informação criando hierarquia visual.' },
      { id: 'FM3', code: 'FM3', name: 'Filtragem da informação', description: 'Possibilitar a apresentação da informação selecionada, obedecendo critérios por filtro.' },
      { id: 'FM4', code: 'FM4', name: 'Ordenação da informação', description: 'Possibilitar a apresentação da informação, organizando os resultados por critérios de ordenação.' },
      { id: 'FM5', code: 'FM5', name: 'Consistência externa', description: 'Manter convenções e padrões de interações de outros aplicativos.' },
      { id: 'FM6', code: 'FM6', name: 'Consistência interna', description: 'Manter consistência de padrões visuais e de comando dentro do mesmo aplicativo.' },
      { id: 'FM7', code: 'FM7', name: 'Tipografia adequada', description: 'Escolher uma tipografia adequada ao ambiente digital, com boa legibilidade e leiturabilidade.' },
      { id: 'FM8', code: 'FM8', name: 'Proximidade', description: 'Manter próximas informações que pertencem a um mesmo grupo de significado.' },
      { id: 'FM9', code: 'FM9', name: 'Alinhamento', description: 'Manter os elementos da página alinhados, para dar ordem de leitura.' },
      { id: 'FM10', code: 'FM10', name: 'Repetição', description: 'Repetir elementos visuais para gerar conforto visual e de interação.' },
      { id: 'FM11', code: 'FM11', name: 'Contraste', description: 'Inserir elementos de contraste para evidenciar ações ou informações destacáveis.' },
      { id: 'FM12', code: 'FM12', name: 'Paletas de cor', description: 'Definir paletas de cor com harmonias cromáticas para classificar as informações.' },
      { id: 'FM13', code: 'FM13', name: 'Leiturabilidade', description: 'Facilitar a leitura das informações textuais (caixa alta e baixa, blocos, colunas).' },
      { id: 'FM14', code: 'FM14', name: 'Formatação de imagens', description: 'Atentar para proporção, tamanho e resolução adequados ao dispositivo.' },
      { id: 'FM15', code: 'FM15', name: 'Identidade visual', description: 'O aplicativo deve conter uma identidade visual consistente com seu conceito e estratégia.' },
      { id: 'FM16', code: 'FM16', name: 'Tela de carregamento', description: 'Criar telas de carregamento como recurso de gestão da marca e identidade do aplicativo.' },
      { id: 'FM17', code: 'FM17', name: 'Hiperlinks encurtados', description: 'Apresentar hiperlinks encurtados dentro dos textos para otimizar espaço.' },
    ],
  },
  {
    id: 'cat-NA',
    code: 'NA',
    name: 'Navegação',
    heuristics: [
      { id: 'NA1', code: 'NA1', name: 'Convite guia condutor', description: 'Apresentar um convite para conduzir a utilização do aplicativo na primeira vez.' },
      { id: 'NA2', code: 'NA2', name: 'Caminhos de Navegação', description: 'Apresentar múltiplas formas de navegação (menus, busca, filtros, etc.).' },
      { id: 'NA3', code: 'NA3', name: 'Continuidade', description: 'Organizar grupos de sequências de ações com começo, meio e fim.' },
      { id: 'NA4', code: 'NA4', name: 'Migalhas de pão (Breadcrumbs)', description: 'Oferecer ao usuário a orientação sobre onde ele se encontra no sistema.' },
      { id: 'NA5', code: 'NA5', name: 'Mínimo de cliques e toques', description: 'Reduzir o número de etapas ou cliques/toques para completar uma tarefa.' },
    ],
  },
  {
    id: 'cat-PU',
    code: 'PU',
    name: 'Particularidades do Usuário',
    heuristics: [
      { id: 'PU1', code: 'PU1', name: 'Controle do usuário', description: 'Permitir ao usuário o controle das ações de interação.' },
      { id: 'PU2', code: 'PU2', name: 'Personalização', description: 'Possibilitar opções de personalização, de acordo com preferências individuais.' },
      { id: 'PU3', code: 'PU3', name: 'Autorização', description: 'Pedir autorização do usuário para ações invasivas.' },
      { id: 'PU4', code: 'PU4', name: 'Redução do esforço cognitivo', description: 'Poupar esforços cognitivos do usuário, evitando pedir informações repetidas ou que podem ser deduzidas.' },
      { id: 'PU5', code: 'PU5', name: 'Identificação de perfil', description: 'Oferecer perguntas ao usuário para identificar seus gostos e preferências.' },
    ],
  },
  {
    id: 'cat-PD',
    code: 'PD',
    name: 'Particularidades do Dispositivo',
    heuristics: [
      { id: 'PD1', code: 'PD1', name: 'Recursos do dispositivo', description: 'Explorar a mobilidade e a multifuncionalidade do ambiente móvel.' },
      { id: 'PD2', code: 'PD2', name: 'Adequação a padrões', description: 'Rever a formatação da informação para o ambiente móvel.' },
      { id: 'PD3', code: 'PD3', name: 'Responsividade', description: 'Responder ao tamanho da tela e adequar a quantidade de informação.' },
      { id: 'PD4', code: 'PD4', name: 'Densidade Informacional', description: 'Dimensionar a quantidade de informação na tela, evitando irrelevâncias.' },
      { id: 'PD5', code: 'PD5', name: 'Áreas clicáveis maiores', description: 'Ampliar, em ambiente móvel, os elementos da interface para facilitar a interação.' },
      { id: 'PD6', code: 'PD6', name: 'Mudança na orientação da tela', description: 'Permitir a mudança na orientação da tela para facilitar a visualização.' },
    ],
  },
  {
    id: 'cat-AC',
    code: 'AC',
    name: 'Acessibilidade',
    heuristics: [
      { id: 'AC1', code: 'AC1', name: 'Texto alternativo', description: 'Desenvolver códigos que mantenham textos alternativos para imagens e ícones.' },
      { id: 'AC2', code: 'AC2', name: 'Navegação acessível', description: 'Tornar a navegação acessível por meio da utilização do teclado.' },
      { id: 'AC3', code: 'AC3', name: 'Destaque para funções essenciais', description: 'Manter os ícones de perfil, ajuda e campo de busca visíveis e no topo.' },
      { id: 'AC4', code: 'AC4', name: 'Contraste de cor', description: 'Possibilitar a mudança para alto contraste.' },
      { id: 'AC5', code: 'AC5', name: 'Possibilidade de ampliação', description: 'Configurar um recurso próprio de ampliação da tela.' },
      { id: 'AC6', code: 'AC6', name: 'Destaque das configurações', description: 'Permitir que as configurações de acessibilidade estejam presentes de forma destacada.' },
      { id: 'AC7', code: 'AC7', name: 'Contextualização de página', description: 'Deixar evidentes informações contextuais sobre a página atual.' },
      { id: 'AC8', code: 'AC8', name: 'Possibilidade de formatar fontes', description: 'Permitir aos usuários ajustar o tipo, tamanho e estilo da fonte.' },
      { id: 'AC9', code: 'AC9', name: 'Destaque de links', description: 'Assegurar que todos os links sejam claramente identificáveis.' },
      { id: 'AC10', code: 'AC10', name: 'Formatação da saturação', description: 'Oferecer opções de ajuste de saturação de cores.' },
      { id: 'AC11', code: 'AC11', name: 'Configuração de animações', description: 'Permitir que os usuários ativem e desativem animações.' },
      { id: 'AC12', code: 'AC12', name: 'Configuração de sons', description: 'Possibilitar a ativação e desativação de sons no site ou aplicativo.' },
      { id: 'AC13', code: 'AC13', name: 'Configuração para leitura', description: 'Acompanhar a leitura do usuário, destacando linhas (máscara de leitura).' },
      { id: 'AC14', code: 'AC14', name: 'Ativação de libras', description: 'Integrar e tornar visível um recurso que ofereça tradução para LIBRAS.' },
      { id: 'AC15', code: 'AC15', name: 'Mensagens de erro no centro da página', description: 'Ao apresentar mensagens de erro, formatar tais avisos no centro da página.' },
      { id: 'AC16', code: 'AC16', name: 'Possibilidade de mudança de idioma', description: 'Em caso de internacionalização, possibilitar a troca de idiomas no aplicativo.' },
    ],
  },
  {
    id: 'cat-PS',
    code: 'PS',
    name: 'Privacidade e Segurança de Dados (LGPD)',
    heuristics: [
      { id: 'PS1', code: 'PS1', name: 'Privacidade de dados pessoais', description: 'Permitir aos usuários a configuração do estado de privacidade de seus dados.' },
      { id: 'PS2', code: 'PS2', name: 'Responsabilidade com dados pessoais', description: 'Informar que a aplicação se compromete com o uso responsável dos dados.' },
      { id: 'PS3', code: 'PS3', name: 'Segurança de dados pessoais', description: 'Informar que o aplicativo adota medidas de segurança para prevenir danos.' },
    ],
  },
];