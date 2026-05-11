import FilterChips from './FilterChips'
import './FilterPanel.css'
import { sizeOptions, typeOptions } from '../data/filterOptions'

export default function FilterPanel({ filters, toggleFilter, isOpen }) {
    return (
        <div className={`filter-container ${isOpen ? "open" : ""}`}>
            <FilterChips
                label="Tamanho"
                category="size"
                options={sizeOptions}
                selected={filters.size}
                toggleFilter={toggleFilter}
            />
            <FilterChips
                label="Tipo"
                category="type"
                options={typeOptions}
                selected={filters.type}
                toggleFilter={toggleFilter}
            />
        </div>
    )
}