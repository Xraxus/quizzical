import styles from "./Quiz.module.css";
import { decode } from "html-entities";
import { useEffect, useState, Fragment } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
        );
        const data = await response.json();

        if (data.response_code !== 0) {
          throw new Error("Questions couldn't load");
        }
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

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setTimeout(fetchQuestions, 3000);
      }
    }

    fetchQuestions();
  }, []);

  function generateQuestionElements() {
    return questions.map((q, i) => (
      <fieldset key={i} className={styles.fieldset}>
        <legend>{decode(q.question)}</legend>
        {q.answers.map((answer, index) => (
          <Fragment key={index}>
            <input
              type="radio"
              value={index}
              id={`${i}-answer-${index}`}
              name={`question-${i}`}
              onChange={() => handleAnswerSelect(i, index)}
              disabled={formSubmitted}
            ></input>
            <label
              htmlFor={`${i}-answer-${index}`}
              className={
                formSubmitted
                  ? selectedAnswers[i] === index //   - If the current answer is selected:
                    ? q.correct === index
                      ? styles.correctAnswer //     - If the selected answer is correct, apply styles.correctAnswer.
                      : styles.incorrectAnswer //     - If the selected answer is incorrect, apply styles.incorrectAnswer.
                    : q.correct === index //   - If the current answer is not selected but it is the correct answer, apply styles.correctAnswer.
                    ? styles.correctAnswer // - If formSubmitted is false, no additional styles are applied.
                    : ""
                  : ""
              }
            >
              {decode(answer)}
            </label>
          </Fragment>
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

    if (!formSubmitted) {
      for (let i = 0; i < questions.length; i++) {
        if (selectedAnswers[i] === questions[i].correct)
          setScore((prevScore) => prevScore + 1);
      }
      setFormSubmitted(true);
    } else {
      location.reload();
    }
  }

  return (
    <>
      {loading && <div className={styles.loader}></div>}
      {!loading && (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          {generateQuestionElements()}
          {!loading && (
            <button type="submit">
              {formSubmitted ? "Go back" : "Check answers"}
            </button>
          )}
          {formSubmitted && <p>You scored {score}/5 correct answers</p>}
        </form>
      )}
    </>
  );
}

export default Quiz;
