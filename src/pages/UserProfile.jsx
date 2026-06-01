import { useNavigate } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"
import species from "../data/species"

import './UserProfile.css'
import GuideDownload from "../components/GuideDownload"

export default function UserProfile() {
    const navigate = useNavigate()

    const { favorites } = useFavorites();
    const favoriteSpecies = species.filter(s => favorites.includes(s.id));

    return (
        <div className="page-content profile-page">
            <h1>Perfil</h1>
            <section className="fav-species">
                <h2 className="profile-subtitle">Espécies favoritas ({favoriteSpecies.length})</h2>
                {favoriteSpecies.length === 0 ? (
                    <p>Você ainda não favoritou nenhuma espécie.</p>
                ) : (
                    <div className="fav-species-cards">
                        {favoriteSpecies.map(s => (
                            // <Card key={s.id} data={s} />
                            <div key={s.id} className="fav-card" onClick={() => navigate(`/especies/${s.id}`)}>
                                <img src={s.image} />
                                <p className="fav-name">{s.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <section className="guia-municipal">
                <h2 className="profile-subtitle">Guia</h2>
                <p>
                    Selecione abaixo sua cidade para visualizar e baixar o manual de arborização disponibilizado pela prefeitura
                </p>
                <GuideDownload />
            </section>
        </div>
    )
}