import { useState } from "react";
import './GuideDownload.css'

export default function GuideDownload() {
    const [city, setCity] = useState('');

    const cityGuides = {
        praia_grande: '/pdfs/guia-pg.pdf',
        sao_paulo: '/pdfs/guia-sp.pdf'
    }

    return (
        <div className="city-select">
            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option value="">-- Selecione uma cidade --</option>
                <option value="praia_grande">Praia Grande/SP</option>
                <option value="sao_paulo">São Paulo/SP</option>
            </select>
            <p>
                {city && (
                    <a className="guide-link" href={cityGuides[city]} target="_blank" rel="noopener noreferrer">[ Visualizar guia ]</a>
                )}
            </p>
        </div>
    )
}