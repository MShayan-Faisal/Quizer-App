import React from "react";

export default function QuestionCard({ question, onAnswer, current, total }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "2rem", borderRadius: "1rem" }}>
      <h2>
        Question {current} of {total}
      </h2>
      <p>{question.question}</p>
      <div style={{ marginTop: "1rem" }}>
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option)}
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              margin: "0.5rem 0",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem"
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
