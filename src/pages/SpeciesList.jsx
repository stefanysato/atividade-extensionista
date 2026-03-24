import species from '../data/species'
import Card from '../components/Card'

export default function SpeciesList() {
    return (
        <div>
            <h1>Espécies</h1>
            {species.map(specie => (
                <Card key={specie.id} data={specie} />
            ))}
        </div>
    )
}