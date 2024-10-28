const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', isCorrect: false },
            { text: 'Madrid', isCorrect: false },
            { text: 'Paris', isCorrect: true },
            { text: 'Rome', isCorrect: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', isCorrect: false },
            { text: 'Mars', isCorrect: true },
            { text: 'Jupiter', isCorrect: false },
            { text: 'Saturn', isCorrect: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', isCorrect: false },
            { text: 'Indian Ocean', isCorrect: false },
            { text: 'Arctic Ocean', isCorrect: false },
            { text: 'Pacific Ocean', isCorrect: true }
        ]
    },
    {
        question: 'What is the freezing point of water?',
        answers: [
            { text: '0°C', isCorrect: true },
            { text: '100°C', isCorrect: false },
            { text: '50°C', isCorrect: false },
            { text: '25°C', isCorrect: false }
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            { text: 'Mark Twain', isCorrect: false },
            { text: 'Jane Austen', isCorrect: false },
            { text: 'William Shakespeare', isCorrect: true },
            { text: 'Charles Dickens', isCorrect: false }
        ]
    }
];

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
