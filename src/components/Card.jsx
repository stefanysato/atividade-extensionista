import { useNavigate } from "react-router-dom"
import './Card.css'
import { getTag } from "../utils/helpers"

export default function Card({ data }) {
    const navigate = useNavigate()

    return (
        <div className="card" onClick={() => navigate(`/especies/${data.id}`)}>
            <div className="img-container">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="species-info">
                <h2>{data.name}</h2>
                <p>{data.scientificName}</p>
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