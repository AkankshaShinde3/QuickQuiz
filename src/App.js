import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get('http://localhost:5000/api/questions');
            setQuestions(response.data);
        };

        fetchQuestions();
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return <h1>Your score: {score}/{questions.length}</h1>;
    }

    if (!questions.length) {
        return <h1>Loading questions...</h1>;
    }

    return (
        <div>
            <h2>{questions[currentQuestion].question}</h2>
            <ul>
                {questions[currentQuestion].answers.map((answer, index) => (
                    <li key={index}>
                        <button onClick={() => handleAnswer(answer.isCorrect)}>
                            {answer.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
