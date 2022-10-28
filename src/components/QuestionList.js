import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({ questions, handleButtonClick, onUpdatedQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => <QuestionItem onDelete= {handleButtonClick}key= {question.id} question= {question} onUpdatedQuestion= {onUpdatedQuestion}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
