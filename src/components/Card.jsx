import { useNavigate } from "react-router-dom"
import './Card.css'
import { getTag } from "../utils/helpers"
import { useFavorites } from '../context/FavoritesContext'

import heart from '../assets/img/icons/heart.png'
import heartFilled from '../assets/img/icons/heart-filled.png'

export default function Card({ data }) {
    const navigate = useNavigate()
    const { toggleFavorite, isFavorite } = useFavorites()

    return (
        <div className="card" onClick={() => navigate(`/especies/${data.id}`)}>
            <div className="img-container">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="species-info">
                <div className="name-container">
                    <h2>{data.name}</h2>
                    <p>{data.scientificName}</p>
                    <button className="fav-btn-card" onClick={(event) => {
                        event.stopPropagation()
                        toggleFavorite(data.id)
                    }
                    }>
                        {isFavorite(data.id) ? <img src={heartFilled} /> : <img src={heart} />}
                    </button>
                </div>
                <div className="tags-container">
                    {data.tags.map(tag => {
                        const t = getTag(tag)
                        return (
                            <span className="tag" key={tag}>
                                {t.icon} {t.label}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}