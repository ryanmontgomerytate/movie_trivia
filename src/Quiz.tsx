import { useState } from 'react'
import { MovieAnswers, MovieQuestion, MovieQuestions } from './MovieTypes'

export const generateAnswerButtons = (movieAnswers: MovieAnswers[]) => {
  return movieAnswers.map((movieAnswer) => (
    <div>
      <button>{movieAnswer.Title}</button>
      <br></br>
    </div>
  ))
}

export const getRandomQ = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const Quiz: React.FC<{ movieAnswers: MovieAnswers[] }> = ({
  movieAnswers: movieAnswers,
}) => {
  const [index, setIndex] = useState<number>(getRandomQ(movieAnswers.length))
  const [quizQuestionNumber, setQuizQuestionNumber] = useState<number>(0)
  const handleNext = () => {
    setIndex(getRandomQ(movieAnswers.length))
    setQuizQuestionNumber(quizQuestionNumber + 1)
  }
  const currentQuestion: MovieQuestion = MovieQuestions[quizQuestionNumber]

  return (
    <div>
      <div>
        <h2>{`${currentQuestion.question} ${
          movieAnswers[index][currentQuestion.answerPropertyName]
        }`}</h2>
        {generateAnswerButtons(movieAnswers)}
        <br />
        {quizQuestionNumber < MovieQuestions.length && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  )
}
