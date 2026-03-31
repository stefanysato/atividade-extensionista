import { useNavigate, useParams } from "react-router-dom"
import speciesList from "../data/species"

export default function SpeciesDetail() {
    const navigate = useNavigate()
    const { id } = useParams()

    const species = speciesList.find(s => s.id === id)

    if (!species) {
        return <p>Espécie não encontrada</p>
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>
                ⬅️
            </button>
            <h1>{species.name}</h1>
            <p>{species.description}</p>
        </div>
    )
}