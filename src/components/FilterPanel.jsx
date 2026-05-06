import FilterChips from './FilterChips'
import './FilterPanel.css'
import { sizeOptions, typeOptions } from '../data/filterOptions'

export default function FilterPanel({ filters, toggleFilter }) {
    return (
        <div>
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

        // <div>
        //     <select id="type-select" value={filters.type} onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}>
        //         <option value="">Todos os tipos</option>
        //         <option value="ornamental">Ornamental</option>
        //         <option value="fruit">Frutífera</option>
        //         <option value="shade">Sombra</option>
        //     </select>
        // </div>
    )
}