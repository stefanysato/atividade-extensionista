import './FilterChips.css'

export default function FilterChips({ label, category, options, selected = [], toggleFilter }) {
    return (
        <div className="filter-group">
            {label && <p className="filter-label">{label}</p>}

            <div className="chips-container">
                {options.map(option => {
                    const isActive = selected.includes(option.value);

                    return (
                        <button
                            key={option.value}
                            className={`chip ${isActive ? 'active' : ''}`}
                            onClick={() => toggleFilter(category, option.value)}
                            aria-pressed={isActive}
                        >
                            {option.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}