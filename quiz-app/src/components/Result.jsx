import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Result(){
    const { state } = useLocation();
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    if (!state) navigate("/");
    const calculateScore = () => {
        const {answers, questions} = state;
        console.log(answers);
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].answer){
                score += 1;
            }
        })
        console.log(score);
        setScore(score);
    }

    useEffect(() => {
        calculateScore();
    }, []);
    return (
        <h1>Result: {score}</h1>
    )
}