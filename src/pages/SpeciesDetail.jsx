import { useNavigate, useParams } from "react-router-dom"
import speciesList from "../data/species"
import { getLabel } from "../utils/helpers"
import { LABELS } from "../data/labels"

import './SpeciesDetail.css'

export default function SpeciesDetail() {
    const navigate = useNavigate()
    const { id } = useParams()

    const species = speciesList.find(s => s.id === id)

    if (!species) {
        return <p>Espécie não encontrada</p>
    }

    return (
        <div className="page-content species-detail">
            <button onClick={() => navigate(-1)}>
                ⬅️
            </button>
            <img src={species.image} alt={species.name} />
            <h1>{species.name}</h1>
            <h2>{species.scientificName}</h2>
            <p>{species.description}</p>
            <h3>Informações</h3>
            <div className="info-container">
                <p><b>Altura:</b> {getLabel(LABELS.height, species.height)}</p>
                <p><b>Raíz:</b> {getLabel(LABELS.root, species.root)}</p>
                <p><b>Copa:</b> {getLabel(LABELS.canopy, species.canopy)}</p>
                <p><b>Luz solar:</b> {getLabel(LABELS.sunlight, species.sunlight)}</p>
                <p><b>Largura da calçada:</b> {getLabel(LABELS.sidewalk, species.sidewalk)}</p>
            </div>
            <h3>Dicas de cultivo</h3>
            <p>{species.care}</p>
            <div className="wire-info-container">
                <p>{getLabel(LABELS.hasWires, species.hasWires)}</p>
            </div>
            {/* <p><a href={`http://www.google.com/search?q="${species.name}%20dicas%20de%20cultivo"`}>🔍</a></p> */}
        </div >
    )
}