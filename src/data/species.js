const species = [
  // pequenas 
  {
    id: "guacatonga",
    name: "Guaçatonga",
    scientificName: "Casearia sylvestris",

    image: "/species/guacatonga.jpg",
    gallery: [],

    height: "medium",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["medicinal", "fauna", "resistant", "fast_growth"],

    description: "Flores pequenas esbranquiçadas ou amareladas, e pequenos frutos vermelhos. Atraem aves e polinizadores, por ser uma planta melífera. Muito usada na medicina popular devido às propriedades cicatrizantes e anti-inflamatórias.",

    care: "Prefere sol pleno, solo fértil e com boa umidade e é adaptável a diversos climas."
  },

  {
    id: "algodao_da_praia",
    name: "Algodão-da-praia",
    scientificName: "Hibiscus tiliaceus",

    image: "/species/algodao.jpg",
    gallery: [],

    height: "small",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: true,

    tags: ["coastal", "ornamental", "resistant", "fast_growth", "shade"],

    description: "Flores grandes que abrem pela manhã, com pétalas amarelas e folhas em formato de coração e coloração verde-escura.",

    care: "Ideal para solos úmidos e regiões litorâneas, por ser muito resistente ao vento e à salinidade. Alta tolerância a áreas encharcadas."
  },

  {
    id: "chupa_ferro",
    name: "Chupa-ferro",
    scientificName: "Metrodorea nigra",

    image: "/species/chupa_ferro.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "small",
    sunlight: "partial",
    sidewalk: "small",
    hasWires: true,

    tags: ["native", "slow_growth"],

    description: "Também muito conhecida como 'carrapateira', devido ao formato de seus frutos, que lembram um carrapato. Possui folhas brilhantes e flores avermelhadas que ficam quase negras quando secas.",

    care: "Cresce naturalmente em locais mais sombreados e úmidos. Prefere solos férteis e bem drenados."
  },

  {
    id: "manaca_da_serra",
    name: "Manacá-da-serra",
    scientificName: "Tibouchina mutabilis",

    image: "/species/manaca.jpg",
    gallery: [],

    height: "medium",
    root: "low",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["ornamental", "native", "fauna", "fast_growth"],

    description: "Flores que mudam de cor (branco, rosa e roxo) e folhas verdes, alongadas e aveludadas. Ideal para paisagismo urbano, não danifica estruturas com suas raízes.",

    care: "Se beneficia de regas frequentes (cerca de 2 a 3 vezes por semana) para manter a terra sempre úmida, mas sem encharcar. Nos dias mais quentes, pode ser necessário regar com maior frequência."
  },

  {
    id: "araca",
    name: "Araçá-do-mato",
    scientificName: "Psidium cattleianum",

    image: "/species/araca.jpg",
    gallery: [],

    height: "small",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "small",
    hasWires: true,

    tags: ["native", "fruit", "fauna", "slow_growth"],

    description: "Possui flores brancas, pequenas e melíferas, atraindo polinizadores. Frutos comestíveis amarelos ou vermelhos, muito apreciados pela fauna silvestre (aves e pequenos mamíferos).",

    care: "Fácil cultivo e boa adaptação urbana. A colheita ocorre entre dezembro e março, a principal safra é no verão, e seu fruto é comumente utilizado na produção de geleias e doces."
  },

  {
    id: "ipe_amarelo_cascudo",
    name: "Ipê-amarelo-cascudo",
    scientificName: "Tabebuia chrysotricha",

    image: "/species/ipe.jpg",
    gallery: [],

    height: "medium",
    root: "low",
    canopy: "large",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["ornamental", "native", "fauna", "shade"],

    description: "A espécie de ipê-amarelo mais cultivada em praças e ruas, devido ao seu pequeno porte. Flores amarelas intensas e perda total das folhas durante a floração, que ocorre no inverno (entre junho e setembro). Possui madeira muito dura e resistente.",

    care: "Prefere clima quente e precisa de sol pleno, sendo ideal para locais que recebem luz solar direta. Prefere solos profundos e com boa drenagem."
  },

  {
    id: "cambuci",
    name: "Cambuci",
    scientificName: "Campomanesia phaea",

    image: "/species/cambuci.jpg",
    gallery: [],

    height: "small",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["native", "fruit"],

    description: "Flores grandes e brancas, com frutos aromáticos pouco consumidos in natura. Muito utilizada em paisagismo por sua copa delicada e bela floração.",

    care: "Gosta de sol pleno ou meia sombra, clima ameno e solo fértil, úmido e bem drenado. A frutificação ocorre principalmente entre janeiro e fevereiro."
  },

  {
    id: "goiabeira",
    name: "Goiabeira",
    scientificName: "Psidium guajava",

    image: "/species/goiabeira.jpg",
    gallery: [],

    height: "small",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["fruit", "fauna", "fast_growth"],

    description: "Folhas e flores brancas aromáticas e frutos muito apreciados, consumidos in natura ou usados para produção de doces, sucos e geleias. Suas folhas são amplamente utilizadas na medicina popular por propriedades adstringentes.",

    care: "Fácil cultivo e boa produtividade em sol pleno, sendo sensível a geadas. Adapta-se a solos úmidos e férteis."
  },

  // médias
  {
    id: "quaresmeira",
    name: "Quaresmeira",
    scientificName: "Tibouchina granulosa",

    image: "/species/quaresmeira.jpg",
    gallery: [],

    height: "medium",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["ornamental", "native", "fauna", "fast_growth", "shade"],

    description: "Uso ornamental devido à floração (roxa ou rosa) vistosa duradoura, que ocorre durante o outono e a primavera, e folhas verde-escuras. Atrai abelhas e borboletas, contribuindo para a biodiversidade local.",

    care: "Árvore de fácil cultivo, exige sol pleno e prefere solos férteis e bem drenado. É uma espécie perene (não perde as folhas) e muito resistente após o primeiro ano de plantio"
  },

  {
    id: "aroeira_pimenteira",
    name: "Aroeira-pimenteira",
    scientificName: "Schinus terebinthifolius",

    image: "/species/aroeira.jpg",
    gallery: [],

    height: "medium",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["medicinal", "fruit", "fauna", "fast_growth"],

    description: "Flores esbranquiçadas e melíferas. Também é chamada de pimenta-rosa por conta dos seus frutos, muito apreciados por aves. A pimenta-rosa é um condimento usado na culinária, levemente adocicado e picante. Suas folhas e frutos também tem uso medicinal contra doenças respiratórias.",

    care: "Muito resistente e adaptável, ideal para sol pleno. Bastante utilizada na arborização urbana, raramente precisa de poda."
  },

  {
    id: "embauba",
    name: "Embaúba",
    scientificName: "Cecropia pachystachya",

    image: "/species/embauba.jpg",
    gallery: [],

    height: "large",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["native", "medicinal", "fauna", "fast_growth"],

    description: "Utilizada popularmente no alívio de tosse e asma, devido às suas propriedades expectorantes, dentre outras. Flores brancas, frutos e folhas atraem aves e morcegos.",

    care: "Crescimento rápido, atinge altura significativa em pouco tempo, proporcionando sombra rapidamente. Embora seja segura para calçadas, a copa pode precisar de manejo em locais com fiação elétrica muito baixa. Prefere áreas abertas e sol pleno."
  },

  {
    id: "caroba",
    name: "Caroba",
    scientificName: "Jacaranda micrantha",

    image: "/species/caroba.jpg",
    gallery: [],

    height: "medium",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: false,

    tags: ["ornamental", "native", "fauna", "fast_growth", "shade"],

    description: "Possui flores roxas exuberantes que atraem aves. São muito utilizadas em paisagismo e calçadas pelo seu valor ornamental.",

    care: "Precisa de espaço e se desenvolve melhor em sol pleno. Adapta-se bem a solos pobres, arenosos ou pedregosos, sendo rústica e de fácil cultivo."
  },

  {
    id: "pata_de_vaca",
    name: "Pata-de-vaca",
    scientificName: "Bauhinia forficata",

    image: "/species/pata_de_vaca.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "small",
    sunlight: "full",
    sidewalk: "small",
    hasWires: true,

    tags: ["ornamental", "medicinal", "shade"],

    description: "Apresenta flores brancas vistosas e folhas que lembram uma pegada de vaca. Muito usada no paisagismo e na medicina popular, suas folhas são usadas em chás para ajudar a controlar a glicemia.",

    care: "Boa para espaços pequenos e fácil de manter. Precisa de regas regulares quando jovem. Resistente após estabelecida, mas se beneficia de regas moderadas em períodos secos."
  },

  {
    id: "canafistula",
    name: "Canafístula",
    scientificName: "Senna multijuga",

    image: "/species/canafistula.jpg",
    gallery: [],

    height: "medium",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["ornamental", "native", "fast_growth", "shade"],

    description: "Cachos de flores amarelas e perfumadas, floração intensa e abundante no verão, tornando a copa densa.",

    care: "Deve ser cultivada em sol pleno e solo fértil e bem drenado. Tolera baixas temperaturas."
  },

  // grandes

  {
    id: "embirucu",
    name: "Embiruçu",
    scientificName: "Pseudobombax grandiflorum",

    image: "/species/embirucu.jpg",
    gallery: [],

    height: "large",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["ornamental", "native", "shade"],

    description: "Árvore ornamental, conhecida por suas grandes flores brancas, que surgem geralmente quando a árvore está sem folhas (inverno/seca).",

    care: "Precisa de espaço e se desenvolve melhor em sol pleno. Prefere terrenos úmidos e com boa drenagem; o solo não deve ficar encharcado para evitar a podridão das raízes."
  },

  {
    id: "sibipiruna",
    name: "Sibipiruna",
    scientificName: "Caesalpinia peltophoroides",

    image: "/species/sibipiruna.jpg",
    gallery: [],

    height: "large",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["ornamental", "native", "shade", "fast_growth"],

    description: "Árvore ornamental com flores amarelas intensas e sombra densa. Perde parcialmente suas folhas no inverno e a floração ocorre entre setembro e novembro.",

    care: "Requer bastante espaço devido ao seu porte e raízes. Precisa de rega frequente durante o primeiro ano, mas depois de adulta torna-se muito resistente e tolera períodos de seca."
  },

  {
    id: "angelim_doce",
    name: "Angelim-doce",
    scientificName: "Andira fraxinifolia",

    image: "/species/angelim.jpg",
    gallery: [],

    height: "medium",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["native", "fauna", "shade"],

    description: "Flores melíferas com tons de rosa e branco que surgem entre novembro e dezembro. Bastante recomendada para o paisagismo e arborização urbana",

    care: "Ideal para áreas amplas com boa incidência solar. Gosta de solos úmidos, mas não tolera encharcamento excessivo. Cresce rápido em condições ideais."
  },

  {
    id: "pitangueira",
    name: "Pitangueira",
    scientificName: "Eugenia uniflora",

    image: "/species/pitangueira.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "small",
    hasWires: true,

    tags: ["fruit", "native", "fauna", "medicinal"],

    description: "Produz frutos comestíveis muito apreciados. As flores são pequenas, brancas e atraem polinizadores e aves. O chá das folhas de pitanga possui ação antioxidante, anti-inflamatória e diurética e auxiliam no controle da pressão arterial e da glicemia.",

    care: "Espécie de fácil cultivo e ótima para áreas menores. Possui raízes que crescem para baixo, o que a torna segura para calçadas, pois não danifica estruturas. Recomenda-se que a poda seja feita anualmente, após a colheita, para controlar o tamanho e estimular a produção. Sua frutificação é potencializada pela limpeza de frutos caídos para evitar pragas."
  },
  {
    id: "ipe_amarelo_brejo",
    name: "Ipê-amarelo-do-brejo",
    scientificName: "Tabebuia umbellata",

    image: "/species/ipe_brejo.jpg",
    gallery: [],

    height: "large",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["ornamental", "native", "shade"],

    description: "Árvore extremamente ornamental, devido a sua floração amarela vibrante, que ocorre geralmente no verão (entre novembro e dezembro).",

    care: "Nativa de áreas úmidas, prefere solos encharcados e áreas amplas. Pode alcançar de 10 a 15 metros de altura, com tronco de 40 a 50 cm de diâmetro. Por ser de grande porte, recomenda-se evitar o plantio próximo a fiações ou construções."
  },

  {
    id: "camboata",
    name: "Camboatá",
    scientificName: "Cupania vernalis",

    image: "/species/camboata.jpg",
    gallery: [],

    height: "large",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: false,

    tags: ["native", "fauna"],

    description: "Árvore de porte médio a grande, nativa da mata atlântica, indicada para o paisagismo de lugares amplos, pela sua copa alta e densa. Floração na cor amarelo clara, que ocorre entre março e maio. Os frutos são marrons e pequenos e expõem as sementes quando se abrem, entre setembro e dezembro.",

    care: "Espécie de baixa manutenção e com boa adaptação. Logo após o plantio, recomenda-se regar uma vez por dia nas primeiras duas semanas e reduzir após o estabelecimento, necessitando apenas em períodos de seca prolongada. O melhor período é durante os meses mais chuvosos. Prefere solos profundos, úmidos e férteis."
  },

  {
    id: "inga",
    name: "Ingá",
    scientificName: "Inga spp.",

    image: "/species/inga.jpg",
    gallery: [],

    height: "large",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["fruit", "native", "fauna", "shade"],

    description: "Flores brancas em cacho, polinizadas principalmente por mariposas. Produz vagens grandes que contêm uma polpa branca, cremosa e adocicada. Fruto rico em vitaminas C e A, consumido in natura ou em sucos.",

    care: "Árvore de crescimento rápido e fácil cultivo, ideal para áreas úmidas e com bastante espaço, principalmente quintais. Prefere solo úmido, fértil e sol pleno, embora tolere sombra parcial."
  },

  {
    id: "grumixama",
    name: "Grumixama",
    scientificName: "Eugenia brasiliensis",

    image: "/species/grumixama.jpg",
    gallery: [],

    height: "medium",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["fruit", "native", "fauna"],

    description: "Produz entre agosto e dezembro. Seu fruto é preto com polpa branca ou amarelada e é bastante palatável, de sabor doce e levemente ácido. Possui flores pequenas, brancas e perfumadas.",

    care: "Ideal para pomares domésticos e calçadas. Pode ser cultivada em vasos grandes, com poda de formação. Cresce mais rápido e produz mais frutos quando recebe luz solar direta, embora tolere meia sombra. Recomenda-se regar diariamente no primeiro ano (sem encharcar). Leva de 2 a 4 anos para produzir."
  },

  {
    id: "guanandi",
    name: "Guanandi",
    scientificName: "Calophyllum brasiliense",

    image: "/species/guanandi.jpg",
    gallery: [],

    height: "large",
    root: "moderate",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["native", "fauna", "shade"],

    description: "Conhecida por sua madeira nobre de alta qualidade, similar ao mogno. Possui tronco com látex amarelo e pegajoso. Produz flores brancas perfumadas e frutos semelhantes a azeitonas grandes, que atraem fauna, em especial aves e morcegos.",

    care: "Desenvolve-se bem em áreas úmidas e espaços amplos. Tolera solos encharcados e até inundações temporárias. Prefere regiões quentes e é sensível a geadas."
  },
  {
    id: "calabura",
    name: "Calabura",
    scientificName: "Muntingia calabura",

    image: "/species/calabura.jpg",
    gallery: [],

    height: "medium",
    root: "aggressive",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["fast_growth", "fruit", "shade"],

    description: "Árvore tropical de rápido crescimento e frutificação contínua. Frutos pequenos, arredondados, vermelhos e muito doce. Suas flores são pequenas e brancas e florescem o ano todo.",
    care: "Espécie adaptável a diferentes solos e regiões do Brasil. Prospera em solos pores e tolera seca e calor. Pode ser cultivada diretamente no solo ou em vasos grandes."
  },
  {
    id: "candelabro",
    name: "Candelabro",
    scientificName: "Erythrina speciosa",

    image: "/species/candelabro.webp",
    gallery: [],

    height: "small",
    root: "moderate",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "large",
    hasWires: true,

    tags: ["native", "fauna", "ornamental"],

    description: "Possui forma de arbusto e atinge entre 3 e 5 metros de altura. Tem alto potencial paisagístico devido a sua floração em tonalidade vermelho-vivo, ou mais raramente branca, que crescem verticalmente e lembram a haste de um candelabro.",
    care: "Precisa de sol pleno e se desenvolve melhor em solos úmidos. Após estabelecida, tolera bem o frio e até mesmo secas. Regas regulares ajudam no desenvolvimento nos primeiros meses."
  },
  {
    id: "cerejeira",
    name: "Cerejeira-do-Japão",
    scientificName: "Prunus serrulata",

    image: "/species/cerejeira.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "large",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["ornamental"],

    description: "Famosa por sua floração, que ocorre entre o final do inverno e início da primavera, e varia do branco ao rosa intenso. Produz frutos minúsculos e pouco polposos, diferentes das cerejas consumidas na culinária.",
    care: "Preferem climas temperados ou subtropicais e com invernos bem definidos. O frio é essencial para uma floração abundante. Se desenvolvem melhor em solos férteis, ricos em matéria orgânica e bem drenados. Não tolera encharcamento, pois as raízes podem apodrecer."
  },
  {
    id: "reseda",
    name: "Resedá",
    scientificName: "Lagerstroemia indica",

    image: "/species/reseda.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "small",
    hasWires: true,

    tags: ["ornamental", "fast_growth"],

    description: "Muito popular na arborização urbana, devido à sua floração exuberante e raízes não agressivas, que não levantam calçadas. As flores crescem em cachos densos e podem ser brancas, rosas, roxas ou vermelhas. Desabrocham principalmente na primavera e no verão.",

    care: "Originária da Ásia, é uma espécie que se adaptou bem a diversas condições climáticas. Cresce rapidamente nos primeiros anos e requer pouca manutenção, mas recomenda-se podar no final do inverno para estimular uma floração mais abundante."
  },
  {
    id: "guatambu",
    name: "Guatambuzinho",
    scientificName: "Aspidosperma riedelii",

    image: "/species/guatambu.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "small",
    sunlight: "full",
    sidewalk: "small",
    hasWires: true,

    tags: ["native"],

    description: "Árvore nativa de porte pequeno, geralmente atinge de 4 a 6 metros de altura, sendo ideal para paisagismo urbano. Produz sementes características e seus frutos são fonte de alimento para periquitos, papagaios e maritacas.",
    care: "Se desenvolve melhor quando recebe sol pleno. Prefere solos profundos, ricos em matéria orgânica e com boa drenagem."
  },
  {
    id: "flamboyant",
    name: "Flamboyant mirim",
    scientificName: "Caesalpinia pulcherrima",

    image: "/species/flamboyant.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "large",
    sunlight: "full",
    sidewalk: "small",
    hasWires: true,

    tags: ["ornamental", "fast_growth", "shade"],

    description: "Espécie muito valorizada no paisagismo por suas flores vistosas, porte compacto, rápido crescimento e alta atratividade para polinizadores. Suas raízes não agressivas a tornam uma excelente opção para calçadas ou vasos grandes. Floresce nas cores vermelho, laranja ou amarelo e possuem um formato que lembra a cauda de um pavão, por isso também é conhecida como 'flor-de-pavão'.",
    care: "Prefere sol pleno e solos bem drenados. Suporta bem a seca e períodos quentes, florescendo intensamente durante a primavera e o verão."
  },
  {
    id: "oiti",
    name: "Oiti",
    scientificName: "Licania tomentosa",

    image: "/species/oiti.jpg",
    gallery: [],

    height: "medium",
    root: "low",
    canopy: "large",
    sunlight: "full",
    sidewalk: "large",
    hasWires: false,

    tags: ["shade", "resistant", "fruit", "native"],

    description: "Espécie nativa muito popular no paisagismo urbano em todo o país. Comum nas calçadas, ela oferece uma sombra generosa devido a sua folhagem densa, perfeita para bloquear a luz do sol e criar áreas de resfriamento, além de raízes que não danificam as estruturas. O oiti produz pequenos frutos amarelos comestíveis, mas que precisam ser consumidos bem maduros. São considerados uma PANC (Planta Alimentícia Não Convencional).",
    care: "Prefere regiões quentes e exige sol pleno para desenvolver sua copa densa. Adapta-se a solos pobres, mas prefere os arenosos e profundos. É recomendável regar de 3 a 4 vezes por semana nos primeiros meses após o plantio."
  },
  {
    id: "escova-de-garrafa",
    name: "Escova-de-garrafa",
    scientificName: "Callistemon spp",

    image: "/species/escova_de_garrafa.jpg",
    gallery: [],

    height: "small",
    root: "low",
    canopy: "medium",
    sunlight: "full",
    sidewalk: "medium",
    hasWires: true,

    tags: ["ornamental", "fauna", "resistant"],

    description: "Essa espécie nativa da Austrália é muito valorizada pelo seu visual exótico e adaptabilidade a áreas urbanas. suas flores lembram escovas para limpar garrafas, geralmente vermelhas, podendo apresentar variações em rosa, amarelo ou branco. Devido a grande quantidade de néctar que suas flores produzem, é altamente atrativa para beija-flores e abelhas.",
    care: "Prefere sol pleno e não são exigentes quando à fertilidade do solo, no entanto a rega deve ser regular, principalmente durante os períodos mais quentes. Muito resistentes a pragas e doenças, são geralmente saudáveis e requerem pouca intervenção."
  }

];

export default species;