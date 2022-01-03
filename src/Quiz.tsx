import { useState } from 'react'
import {
  MovieAnswers,
  MovieQuestion,
  MovieQuestions,
  MovieQuizScore,
} from './MovieTypes'

export const generateAnswerButtons = (
  movieAnswers: MovieAnswers[],
  index: number,
  score: MovieQuizScore[],
  setScore: (score: MovieQuizScore[]) => void,
  quizQuestion: string,
) => {
  const determineScore = (movieTitle: string) => {
    const scoreList = score
    const actualAnswer = movieAnswers[index].Title
    if (movieTitle === movieAnswers[index].Title) {
      scoreList.push({
        quizQuestion: quizQuestion,
        quizAnswer: actualAnswer,
        quizGuess: movieTitle,
        isAnswerCorrect: true,
      })
    } else {
      scoreList.push({
        quizQuestion: quizQuestion,
        quizAnswer: actualAnswer,
        quizGuess: movieTitle,
        isAnswerCorrect: false,
      })
    }
    setScore(scoreList)
  }

  return movieAnswers.map((movieAnswer) => (
    <div>
      <button onClick={() => determineScore(movieAnswer.Title)}>
        {movieAnswer.Title}
      </button>
      <br></br>
    </div>
  ))
}

const DoQuiz = (
  movieAnswers: MovieAnswers[],
  index: number,
  score: MovieQuizScore[],
  setScore: (scores: MovieQuizScore[]) => void,
  currentQuestion: MovieQuestion,
  handleNext: () => void,
) => {
  return (
    <div>
      <h2>{`${currentQuestion.question} ${
        movieAnswers[index][currentQuestion.answerPropertyName]
      }`}</h2>
      {generateAnswerButtons(
        movieAnswers,
        index,
        score,
        setScore,
        currentQuestion.question +
          movieAnswers[index][currentQuestion.answerPropertyName],
      )}
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

const showScore = (score: MovieQuizScore[]) => {
  let tally = 0
  score.forEach((x) => (x.isAnswerCorrect ? (tally += 1) : null))
  return (
    <div>
      <h3>
        Your Score is {tally} out of {score.length}. You got{' '}
        {Math.round(tally / score.length)}
      </h3>
    </div>
  )
}

export const getRandomQ = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const Quiz: React.FC<{ movieAnswers: MovieAnswers[] }> = ({
  movieAnswers: movieAnswers,
}) => {
  const [index, setIndex] = useState<number>(getRandomQ(movieAnswers.length))
  const [quizQuestionNumber, setQuizQuestionNumber] = useState<number>(0)
  const [score, setScore] = useState<MovieQuizScore[]>([])
  const [quizTime, setQuizTime] = useState(true)
  const handleNext = () => {
    setIndex(getRandomQ(movieAnswers.length))
    console.log(MovieQuestions.length)
    console.log(quizQuestionNumber)
    if (quizQuestionNumber < MovieQuestions.length - 1) {
      setQuizQuestionNumber(quizQuestionNumber + 1)
    } else {
      setQuizTime(false)
    }
  }
  const currentQuestion: MovieQuestion = MovieQuestions[quizQuestionNumber]

  if (quizTime) {
    return DoQuiz(
      movieAnswers,
      index,
      score,
      setScore,
      currentQuestion,
      handleNext,
    )
  } else {
    return showScore(score)
  }
}
