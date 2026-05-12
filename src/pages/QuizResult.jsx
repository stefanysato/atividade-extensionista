import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card'

export default function QuizResult() {
    const navigate = useNavigate();

    const [results] = useState(() => {
        const storedResults = localStorage.getItem('quizResults');

        return storedResults ? JSON.parse(storedResults) : [];
    })

    function resetQuiz() {
        localStorage.removeItem('quizResults')
        localStorage.removeItem('quizAnswers')
        navigate('/quiz');
    }

    return (
        <div className="page-content">
            <h1>Espécies Recomendadas</h1>
            <button className="retake-quiz-btn" onClick={resetQuiz}>Refazer quiz</button>
            <div className="species-cards">
                {results.map(species => (
                    <Card
                        key={species.id}
                        data={species}
                    />
                ))}</div>
        </div>
    )
}