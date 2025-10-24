import React, { useState } from "react";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          current={currentQuestion + 1}
          total={questions.length}
        />
      )}
    </div>
  );
}
    