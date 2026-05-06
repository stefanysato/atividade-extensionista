export default function SearchBox({value, onChange}) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Buscar espécie..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}