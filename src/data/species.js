// Exemplo DB Espécies

const species = [
  {
    id: "ipe_amarelo",
    name: "Ipê-amarelo",
    scientificName: "Handroanthus albus",

    // características visuais
    image: "ipe.jpg",

    // dados técnicos
    height: "medium", // small | medium | large
    root: "moderate", // low | moderate | aggressive
    canopy: "medium", // cobertura
    sunlight: "full",

    // contexto urbano
    sidewalk: ["medium", "large"],
    hasWires: false,

    // tags
    tags: ["ornamental", "native", "low_maintenance"],

    // descrição
    description: "Árvore nativa com flores amarelas vibrantes.",

    // dicas
    care: "Prefere sol pleno e solo bem drenado."
  }
]

export default species