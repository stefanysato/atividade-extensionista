import species from "../data/species";

export function calculateQuizResults(answers) {
    const scoredSpecies = species.map(species => {
        let score = 0;

        score += calculateSidewalkScore(species.sidewalk, answers.sidewalk)

        if (species.hasWires === answers.wires) {
            score += 3
        }

        if (species.sunlight === answers.sunlight) {
            score += 2
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
        .slice(0, 6)
}

function calculateSidewalkScore(speciesSize, selectedSize) {
    if (selectedSize === 'small') {
        if (speciesSize === 'small') {
            return 3;
        }
        return -999;
    }
    if (selectedSize === 'medium') {
        if (speciesSize === 'medium') {
            return 3;
        }
        if (speciesSize === 'small') {
            return 2;
        }
        return -2;
    }
    if (selectedSize === 'large') {
        if (speciesSize === 'large') {
            return 3;
        }
        if (speciesSize === 'medium' || speciesSize === 'small') {
            return 2;
        }
    }
    return 0;
}