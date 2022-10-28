import React from "react";

function QuestionItem({ onDelete, question, onUpdatedQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(q) {
    fetch(`http://localhost:4000/questions/${q.id}`, {
    method: "DELETE",
  })
      .then((r) => r.json())
      .then(() => onDelete(q))
  }

  function updateCorrectIndex(q, index) {
    fetch(`http://localhost:4000/questions/${q.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({correctIndex: index}),
    })
      .then(r => r.json())
      .then((updatedQuestion) => onUpdatedQuestion(updatedQuestion))
  }

  // function updateCorrectAnswer()

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange= {(event) => updateCorrectIndex(question, event.target.value)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick= {() => handleDeleteClick(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
