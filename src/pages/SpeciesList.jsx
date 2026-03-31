import species from '../data/species'
import Card from '../components/Card'
import SearchBox from '../components/SearchBox'

export default function SpeciesList() {
    return (
        <div className="page-content">
            <h1>Espécies</h1>
            <SearchBox />
            <div className='species-cards'>
                {species.map((species, id) => (
                    <Card key={id} data={species} />
                ))}
            </div>
        </div>
    )
}