import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../index.css'

import Header from "./Header";
import Question from "./Question";
import PrevIcon from "../layout/PrevIcon";
import NextIcon from "../layout/NextIcon";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2, // "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1, // "Mars"
    },
    {
      id: 3,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "George Orwell",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: 2, // "William Shakespeare"
    },
    {
      id: 4,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Pb"],
      answer: 0, // "Au"
    },
    {
      id: 5,
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1918", "1923"],
      answer: 1, // "1912"
    },
    {
      id: 6,
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue whale", "Giraffe", "Polar bear"],
      answer: 1, // "Blue whale"
    },
    {
      id: 7,
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: 2, // "Diamond"
    },
    {
      id: 8,
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
      answer: 2, // "Hydrogen"
    },
    {
      id: 9,
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Peso", "Rupee"],
      answer: 0, // "Yen"
    },
    {
      id: 10,
      question: "Who is known as the 'Father of Computers'?",
      options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
      answer: 1, // "Charles Babbage"
    },
  ]);
  const [answer, setAnswer] = useState(questions.map((a) => null));
  const navigate = useNavigate();

  const handleAnswer = (selectedAnswer, questionId) => {
    const questionIndex = questions.findIndex((q) => q.id === questionId);
    setAnswer((prev) =>
      prev.map((answer, index) => {
        if (index === questionIndex) {
          return selectedAnswer;
        }
        return answer;
      })
    );
  };

  const goNext = () => {
    setCurrentQuestion((prev) => {
      if (prev < questions.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const goBack = () => {
    setCurrentQuestion((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const submitTest = () => {
    navigate("/result", {
      state: {
        answers: answer,
        questions: questions,
      },
    });
  };

  const attempted = answer.filter((a) => a !== null).length;
  return (
    <div className="quiz-container">
      <Header answers = {answer} />
      <div className="quiz">
        <div style={{ display: "flex", alignItems: "center" }}>
          {currentQuestion > 0 && <PrevIcon goBack={goBack} />}
          <Question
            data={questions[currentQuestion]}
            handleAnswer={handleAnswer}
            selectedAnswer={answer[currentQuestion]}
          />
          {currentQuestion < questions.length - 1 && (
            <NextIcon goNext={goNext} />
          )}
        </div>
        <div className="submit">
          <button onClick={submitTest} className="custom-btn btn-7">
            <span>
              {attempted === questions.length ? "Submit" : "End Test"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
