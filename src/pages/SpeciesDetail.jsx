import { useNavigate, useParams } from "react-router-dom"
import speciesList from "../data/species"
import { getLabel } from "../utils/helpers"
import { LABELS } from "../data/labels"
import { useFavorites } from '../context/FavoritesContext'

import heart from '../assets/img/icons/heart.png'
import heartFilled from '../assets/img/icons/heart-filled.png'

import './SpeciesDetail.css'

export default function SpeciesDetail() {
    const navigate = useNavigate()
    const { id } = useParams()

    const species = speciesList.find(s => s.id === id)

    const { toggleFavorite, isFavorite } = useFavorites()

    if (!species) {
        return <p>Espécie não encontrada</p>
    }

    return (
        <div className="page-content species-detail">
            <button className="btn back" onClick={() => navigate(-1)}>
                «
            </button>
            <button className="btn fav" onClick={() => toggleFavorite(species.id)}>
                {isFavorite(species.id) ? <img src={heartFilled} /> : <img src={heart} />}
            </button>
            <img className="species-img" src={species.image} alt={species.name} />
            <h1>{species.name}</h1>
            <h2>{species.scientificName}</h2>
            <p className="description">{species.description}</p>
            <div className="info-container">
                <h3>Informações</h3>
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