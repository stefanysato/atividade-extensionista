import species from "../data/species";

export function calculateQuizResults(answers) {
    const scoredSpecies = species.map(species => {
        let score = 0;

        if (species.sidewalk === answers.sidewalk) {
            score += 2
        }

        if (species.hasWires === answers.wires) {
            score += 3
        }

        if (species.sunlight === answers.sunlight) {
            score + 2
        }

        if (species.tags === answers.preferences) {
            score += 1
        }

        return {
            ...species, score
        }
    })

    return scoredSpecies
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
}