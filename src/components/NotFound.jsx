import { Link } from 'react-router-dom';
import './NotFound.css'
import nftree from '../assets/img/404.png'

export default function NotFound() {
    return (
        <div className="not-found">
            <img src={nftree} className='nf-img'/>
            <h1 className='nf-heading'>404</h1>
            <p>A página que você está tentando acessar não existe!</p>
            <Link to="/"><button className='back-home-btn'>Voltar para a home</button></Link>
        </div>
    )
}