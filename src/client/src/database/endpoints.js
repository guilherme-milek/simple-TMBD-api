const endpoints = {
  search: {
    multi: {
      type: "get",
      title: "/search",
      description:
        "Pesquise vários modelos em uma única solicitação. Atualmente, a pesquisa múltipla suporta a pesquisa de filmes, programas de TV e pessoas em uma única solicitação.",
      queryParameters: [
        {
          param: "language",
          type: "string",
          description: "Escolha o idioma do retorno",
          require: "Opcional",
        },
        {
          param: "query",
          type: "string",
          description: "Insira o texto a ser pesquisado",
          require: "Obrigatório",
        },
        {
          param: "page",
          type: "integer",
          description: "Escolha qual página deseja retornar",
          require: "Opcional",
        },
        {
          param: "include_adult",
          type: "boolean",
          description: "Escolha se deseja incluir conteúdo adulto",
          require: "Opcional",
        },
        {
          param: "region",
          type: "string",
          description: "Escolha em qual região deseja pesquisar",
          require: "Opcional",
        },
      ],
      pathParameters: [],

      examples: [
        {
          title: "Exemplo 1",
          link: "/search?query=Os incríveis&language=pt-BR",
          description:
            'Busca por "Os Incríveis" em todas as categorias, mostrando os resultados em português do Brasil',
        },
        {
          title: "Exemplo 2",

          link: "/search?query=adam sandler",
          description: 'Busca por "Adam Sandler" em todas as categorias',
        },
      ],
    },
    movie: {
      type: "get",

      title: "/search/movie",
      description: "Pesquise por filmes.",
      queryParameters: [
        {
          param: "language",
          type: "string",
          description: "Escolha o idioma do retorno",
          require: "Opcional",
        },
        {
          param: "query",
          type: "string",
          description: "Insira o texto a ser pesquisado",
          require: "Obrigatório",
        },
        {
          param: "page",
          type: "integer",
          description: "Escolha qual página deseja retornar",
          require: "Opcional",
        },
        {
          param: "include_adult",
          type: "boolean",
          description: "Escolha se deseja incluir conteúdo adulto",
          require: "Opcional",
        },
        {
          param: "region",
          type: "string",
          description: "Escolha em qual região deseja pesquisar",
          require: "Opcional",
        },
        {
          param: "year",
          type: "integer",
          description: "Escolha em qual ano foi lançado",
          require: "Opcional",
        },
        {
          param: "primary_release_year",
          type: "integer",
          description: "Escolha em qual ano foi lançado primariamente",
          require: "Opcional",
        },
      ],
      pathParameters: [],

      examples: [
        {
          title: "Exemplo 1",
          link: "/search/movie?query=Avengers",
          description: 'Busca por "Avengers" na categoria filmes',
        },
        {
          title: "Exemplo 2",

          link: "/search/movie?query=Todo mundo em pânico&language=pt-BR",
          description:
            'Busca por "Todo mundo em pânico" na categoria filmes, mostrando os resultados em português do Brasil',
        },
      ],
    },
    tv: {
      type: "get",
      title: "/search/tv",
      description: "Pesquise por um programa de TV.",
      queryParameters: [
        {
          param: "language",
          type: "string",
          description: "Escolha o idioma do retorno",
          require: "Opcional",
        },
        {
          param: "query",
          type: "string",
          description: "Insira o texto a ser pesquisado",
          require: "Obrigatório",
        },
        {
          param: "page",
          type: "integer",
          description: "Escolha qual página deseja retornar",
          require: "Opcional",
        },
        {
          param: "include_adult",
          type: "boolean",
          description: "Escolha se deseja incluir conteúdo adulto",
          require: "Opcional",
        },
        {
          param: "first_air_date_year",
          type: "integer",
          description: "Escolha em qual ano foi lançado primariamente",
          require: "Opcional",
        },
      ],
      pathParameters: [],

      examples: [
        {
          title: "Exemplo 1",
          link: "/search/tv?query=Friends",
          description: 'Busca por "Friends" na categoria programas de TV',
        },
        {
          title: "Exemplo 2",

          link: "/search/tv?query=Eu, a patroa e as crianças&language=pt-BR",
          description:
            'Busca por "Eu, a patroa e as crianças" na categoria programas de TV, mostrando os resultados em português do Brasil',
        },
      ],
    },
    person: {
      type: "get",
      title: "/search/person",
      description: "Pesquise por pessoas.",
      queryParameters: [
        {
          param: "language",
          type: "string",
          description: "Escolha o idioma do retorno",
          require: "Opcional",
        },
        {
          param: "query",
          type: "string",
          description: "Insira o texto a ser pesquisado",
          require: "Obrigatório",
        },
        {
          param: "page",
          type: "integer",
          description: "Escolha qual página deseja retornar",
          require: "Opcional",
        },
        {
          param: "include_adult",
          type: "boolean",
          description: "Escolha se deseja incluir conteúdo adulto",
          require: "Opcional",
        },
        {
          param: "region",
          type: "string",
          description: "Escolha em qual região deseja pesquisar",
          require: "Opcional",
        },
      ],
      pathParameters: [],

      examples: [
        {
          title: "Exemplo 1",
          link: "/search/person?query=Chris Evans",
          description: 'Busca por "Chris Evans" na categoria pessoas',
        },
        {
          title: "Exemplo 2",

          link: "/search/person?query=Robert Downey Jr&language=pt-BR",
          description:
            'Busca por "Robert Downey Jr" na categoria filmes, mostrando os resultados em português do Brasil',
        },
      ],
    },
  },
  trending: {
    standard: {
      type: "get",
      title: "/trending",
      description:
        "Obtenha os itens de tendências diárias ou semanais. A lista de tendências diárias rastreia os itens durante o período de um dia, enquanto os itens têm uma meia-vida de 24 horas. A lista semanal rastreia os itens durante um período de 7 dias, com meia-vida de 7 dias.",
      validValues: [
        {
          title: "Media Type Válidos",
          values: [
            {
              value: "all",
              description:
                "Inclui todos os filmes, programas de TV e pessoas nos resultados como uma lista de tendência global.",
            },
            {
              value: "movie",
              description:
                "Mostra os filmes que estão em tendência nos resultados.",
            },
            {
              value: "tv",
              description:
                "Mostra os programas de TV que estão em tendência nos resultados.",
            },
            {
              value: "person",
              description:
                "Mostra as pessoas que estão em tendência nos resultados.",
            },
          ],
        },
        {
          title: "Time Window Válidos",
          values: [
            {
              value: "day",
              description: "Visualize uma lista de tendências do dia.",
            },
            {
              value: "week",
              description: "Visualize uma lista de tendências da semana.",
            },
          ],
        },
      ],
      queryParameters: [],
      pathParameters: [
        {
          param: "/media_type",
          type: "string",
          description: "Escolha o tipo de mídia",
          require: "Opcional",
        },
        {
          param: "/time_window",
          type: "string",
          description: "Escolha o tempo que deseja obter",
          require: "Opcional",
        },
      ],
      examples: [
        {
          title: "Exemplo 1",
          link: "/trending",
          description:
            "Retorna uma lista de filmes e programas de TV que estão em tendência no mundo nessa semana",
        },
        {
          title: "Exemplo 2",
          link: "/trending/movie",
          description:
            "Retorna uma lista de filmes que estão em tendência no mundo nessa semana",
        },
        {
          title: "Exemplo 3",
          link: "/trending/tv/day",
          description:
            "Retorna uma lista de programas de TV que estão em tendência no mundo nesso dia de hoje",
        },
      ],
    },
  },
};

export default endpoints;
