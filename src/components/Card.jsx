export default function Card({data}) {
    console.log(data);
    
    return (
        <div>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
        </div>
    )
}