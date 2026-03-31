import { useNavigate } from "react-router-dom"
import './Card.css'

export default function Card({ data }) {
    const navigate = useNavigate()

    return (
        <div className="card" onClick={() => navigate(`/especies/${data.id}`)}>
            <div className="img-container">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="species-info">
                <h3>{data.name}</h3>
                <p>{data.scientificName}</p>
                <div className="tags-container">
                    {data.tags.map(tag => (
                        <span className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}