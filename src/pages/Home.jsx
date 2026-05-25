import { Link, useNavigate } from "react-router-dom"
import './Home.css'

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
            <h1>Passo Verde</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tempore veritatis qui debitis pariatur excepturi provident cum obcaecati? Veniam, earum?</p>
            <Link to="/sobre">
                Leia mais...
            </Link>
            <div>
                <h2>Vamos começar? :)</h2>
                <button
                    onClick={handleQuizNavigation}
                    className="home-btn"
                >
                    Descubra sua árvore</button>
                <p>ou</p>
                <Link to="/especies">
                    <button className="home-btn">Explore todas as espécies</button>
                </Link>
            </div>
        </div>
    )
}