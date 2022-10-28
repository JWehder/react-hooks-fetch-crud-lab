import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(resp => resp.json())
      .then((questions) => setQuestions(questions))
  }, []);

  function handleQuestionChange(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      } else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  function handleAddQuestion(question) {
    setQuestions([...questions, question])
  }

  function handleButtonClick(deletedQuestion) {
    const filteredQuestions = questions.filter((question) => deletedQuestion.id !== question.id)
    setQuestions(filteredQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem= {handleAddQuestion} /> : <QuestionList handleButtonClick= {handleButtonClick} questions={questions} onUpdatedQuestion= {handleQuestionChange}/>}
    </main>
  );
}

export default App;
