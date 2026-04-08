import species from '../data/species'
import Card from '../components/Card'
import SearchBox from '../components/SearchBox'

import './SpeciesList.css'

export default function SpeciesList() {
    // species.sort((a, b) => a.name.localeCompare(b.name))
    console.log(species.name);

    return (
        <div className="page-content">
            <h1>Espécies</h1>
            {/* <SearchBox /> */}
            <div className='species-cards'>
                {species.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}