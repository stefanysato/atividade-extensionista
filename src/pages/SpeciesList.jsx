import species from '../data/species'
import Card from '../components/Card'
import SearchBox from '../components/SearchBox'

import './SpeciesList.css'
import { useState } from 'react'
import FilterPanel from '../components/FilterPanel'
import { normalizeText } from '../utils/helpers'
import settingsIcon from '../assets/img/icons/settings-sliders.png'

export default function SpeciesList() {
    // Coloca em ordem alfabética
    species.sort((a, b) => a.name.localeCompare(b.name))

    const [filters, setFilters] = useState({
        query: '',
        size: '',
        type: []
    });

    const [showFilters, setShowFilters] = useState(false);

    function toggleFilter(category, value) {
        setFilters(prev => {
            const selected = prev[category].includes(value);

            return {
                ...prev,
                [category]: selected ? prev[category].filter(v => v !== value) : [...prev[category], value]
            }
        })
    }

    // resultado final
    const filteredSpecies = species.filter(s => {
        return (
            (filters.size.length === 0 || filters.size.includes(s.height)) &&
            (filters.type.length === 0 || s.tags.some(t => filters.type.includes(t))) &&
            (filters.query === '' || normalizeText(s.name).includes(normalizeText(filters.query)))
        )
    })

    return (
        <div className="page-content">
            <h1>Espécies</h1>
            <div className='search-container'>
                <SearchBox
                    value={filters.query}
                    onChange={(value) =>
                        setFilters(prev => ({ ...prev, query: value }))
                    }
                />
                <button className='filters-btn' onClick={() => setShowFilters(!showFilters)}>
                    <img src={settingsIcon} />
                </button>
            </div>
            <FilterPanel
                filters={filters}
                toggleFilter={toggleFilter}
                isOpen={showFilters}
            />
            <div className='species-cards'>
                {filteredSpecies.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}