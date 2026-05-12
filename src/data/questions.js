export const questions = [
    {
        id: "sidewalk",
        question: "Como é o espaço disponível da calçada?",
        multiple: false,

        options: [
            {
                label: "Pequeno (1,5m até 2m)",
                value: "small"
            },
            {
                label: "Médio (2m até 2,4m)",
                value: "medium"
            },
            {
                label: "Grande (acima de 2,4m)",
                value: "large"
            }
        ]
    },
    {
        id: "wires",
        question: "Existe fiação elétrica próxima?",
        multiple: false,

        options: [
            {
                label: "Sim",
                value: true
            },
            {
                label: "Não",
                value: false
            }
        ]
    },
    {
        id: "sunlight",
        question: "O local recebe bastante luz solar?",
        multiple: false,

        options: [
            {
                label: "Sim, sol pleno",
                value: "full"
            },
            {
                label: "Meia sombra",
                value: "partial"
            }
        ]
    },
    {
        id: "preferences",
        question: "O que você mais procura na árvore?",
        multiple: true,

        options: [
            {
                label: "Flores ornamentais",
                value: "ornamental"
            },
            {
                label: "Frutos comestíveis",
                value: "fruit"
            },
            {
                label: "Atrair aves",
                value: "fauna"
            },
            {
                label: "Uso medicinal",
                value: "medicinal"
            },
            {
                label: "Boa sombra",
                value: "shade"
            }
        ]
    }
]