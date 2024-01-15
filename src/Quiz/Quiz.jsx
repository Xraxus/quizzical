import styles from "./Quiz.module.css";
import { decode } from "html-entities";
import { useEffect, useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await response.json();

      setQuestions(() => {
        const preppedQuestions = [];

        for (let item of data.results) {
          const shuffledAnswers = [
            ...item.incorrect_answers,
            item.correct_answer,
          ].sort((a, b) => 0.5 - Math.random());

          const correctAnswerIndex = shuffledAnswers.indexOf(
            item.correct_answer
          );

          preppedQuestions.push({
            question: item.question,
            answers: shuffledAnswers,
            correct: correctAnswerIndex,
          });
        }

        return preppedQuestions;
      });
    }

    fetchQuestions();
  }, []);

  function generateQuestionElements() {
    return questions.map((q, i) => (
      <fieldset key={i}>
        <legend>{decode(q.question)}</legend>
        {q.answers.map((answer, index) => (
          <label
            key={index}
            className={
              formSubmitted
                ? selectedAnswers[i] === index
                  ? q.correct === index
                    ? styles.correctAnswer
                    : styles.incorrectAnswer
                  : q.correct === index
                  ? styles.correctAnswer
                  : ""
                : ""
            }
          >
            {decode(answer)}
            <input
              type="radio"
              value={index}
              name={`question-${i}`}
              onChange={() => handleAnswerSelect(i, index)}
              disabled={formSubmitted}
            ></input>
          </label>
        ))}
      </fieldset>
    ));
  }

  function handleAnswerSelect(questionIndex, selectedAnswerIndex) {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = selectedAnswerIndex;
      return newAnswers;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
    // You can perform additional logic here after the form is submitted
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {generateQuestionElements()}
      <button type="submit">Check answers</button>
    </form>
  );
}

export default Quiz;
