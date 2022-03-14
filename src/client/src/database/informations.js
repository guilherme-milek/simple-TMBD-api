const informations = {
  images: {
    pageTitle: "Imagens",
    sections: [
      {
        title: undefined,
        content: [
          {
            type: "default",
            text: "Quando você fazer uma requesição, imagens podem ser disponibilizadas para usar em sua aplicação.",
          },
          {
            type: "default",
            text: "Porém, o link estará incompleto, então você precisará completá-lo utilizando esse link base abaixo:",
          },
          {
            type: "simpleExample",
            text: "https://image.tmdb.org/t/p/[TAMANHO]/[CÓDIGO DA IMAGEM]",
          },
          {
            type: "list",
            list: [
              {
                type: "keyValue",
                key: "https://image.tmdb.org/t/p/:",
                value: "É a URL base da imagem",
              },
              {
                type: "keyValue",
                key: "[TAMANHO]:",
                value: "Você escolhe o tamanho da imagem",
              },
              {
                type: "keyValue",
                key: "[CÓDIGO DA IMAGEM]:",
                value: "Aqui vai o nome da imagem trazido pela API",
              },
            ],
          },
        ],
      },
      {
        title: "Valores válidos",
        content: [
          {
            type: "validValues",
            validValues: [
              {
                title: "Tamanhos comuns de imagens",
                values: [
                  {
                    value: "original",
                    description: "Traz a imagem no seu tamanho original.",
                  },
                  {
                    value: "w500",
                    description:
                      "Traz a imagem no tamanho de 500px de largura.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Exemplos",
        content: [
          {
            type: "complexLink",

            text: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",
            link: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",
            description: "Pega a imagem no seu tamanho original",
          },
          {
            type: "complexLink",
            text: "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
            link: "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
            description: "Pega a imagem no tamanho com largura de 500px",
          },
        ],
      },
    ],
  },
};

export default informations;
