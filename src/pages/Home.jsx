import { Link, useNavigate } from "react-router-dom"
import './Home.css'

import logo from '../assets/img/logo.png'

export default function Home() {
    const navigate = useNavigate();

    function handleQuizNavigation() {
        const storedResults = localStorage.getItem('quizResults');
        if (storedResults) {
            navigate('/recomendacoes');
            return
        }

        navigate('/quiz')
    }

    return (
        <div className="page-content home">
            <div className="logo-container">
                <img src={logo} alt="PV Logo" className="logo" />
                <span>Passo Verde</span>
            </div>
            <div className="app-desc">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tempore veritatis qui debitis pariatur excepturi provident cum obcaecati? Veniam, earum?</p>
                <Link to="/sobre">
                    Leia mais...
                </Link>
            </div>
            <div className="app-main-nav">
                <h2>Vamos começar? :)</h2>
                <div className="buttons-container">
                    <button
                        onClick={handleQuizNavigation}
                        className="home-btn"
                    >
                        Descubra sua árvore</button>
                    <Link to="/especies">
                        <button className="home-btn">Explore todas as espécies</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}