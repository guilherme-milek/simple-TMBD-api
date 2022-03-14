const sidebar = {
  comecando: [
    {
      to: "/comecando/images",
      text: "Imagens",
    },
  ],
  search: [
    {
      to: "/search/",
      type: "get",
      text: "Pesquisar diversos",
    },
    {
      to: "/search/movie",
      type: "get",
      text: "Pesquisar filmes",
    },
    {
      to: "/search/tv",
      type: "get",
      text: "Pesquisar programas de TV",
    },
    {
      to: "/search/person",
      type: "get",
      text: "Pesquisar pessoas",
    },
  ],
  trending: [
    {
      to: "/trending/",
      type: "get",
      text: "Obter tendências",
    },
  ],
};

export default sidebar;
