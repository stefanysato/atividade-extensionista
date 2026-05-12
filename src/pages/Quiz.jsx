import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions"
import { calculateQuizResults } from '../utils/calculateQuizResults';
import './Quiz.css'

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();
    const question = questions[currentQuestion];

    function handleAnswer(questionId, value) {
        const updatedAnswers = {
            ...answers,
            [questionId]: value
        };

        setAnswers(updatedAnswers);

        const isLastQuestion = currentQuestion === questions.length - 1;

        if (!isLastQuestion) {
            setCurrentQuestion(prev => prev + 1);
            return;
        }

        // Resultado
        const results = calculateQuizResults(updatedAnswers)

        localStorage.setItem('quizResults', JSON.stringify(results))
        localStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers))

        navigate('/recomendacoes')
    }

    if (!question) {
        return <p>Carregando...</p>
    }

    return (
        <div className="page-content">
            <h1>Quiz</h1>
            <h2>{question.question}</h2>
            <div className="option-buttons-container">
                {question.options.map(option => (
                    <button
                        className="option-btn"
                        key={option.value}
                        onClick={() => handleAnswer(question.id, option.value)
                        }
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}