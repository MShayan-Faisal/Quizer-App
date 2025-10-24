import React from "react";

export default function Result({ score, total }) {
  const percentage = ((score / total) * 100).toFixed(2);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Quiz Completed!</h2>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
      <p>Your score: {percentage}%</p>
    </div>
  );
}
