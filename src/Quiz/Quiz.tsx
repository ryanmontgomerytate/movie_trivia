import { useEffect } from 'react'
import { useState } from 'react'
import {
  MovieData,
  MovieQuestion,
  MovieQuestions,
  MovieQuizScore,
} from '../MovieTypes'
import { GenerateQuiz } from './GenerateQuiz'
import { Results } from './Results'

interface Props {
  movieData: MovieData[]
  reset: () => void
}

export const Quiz: React.FC<Props> = ({ movieData, reset }) => {
  const [index, setIndex] = useState<number>(
    getRandomDataSetIndex(movieData.length),
  )
  const [quizQuestionNumber, setQuizQuestionNumber] = useState<number>(0)
  const [totalScore, setTotalScore] = useState<MovieQuizScore[]>([])
  const [currentScore, setCurrentScore] = useState<MovieQuizScore | null>(null)
  const [runQuiz, setRunQuiz] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState<MovieQuestion>(
    MovieQuestions[quizQuestionNumber],
  )

  const handleNext = () => {
    if (quizQuestionNumber < MovieQuestions.length - 1) {
      const nextQuizQuestionNumber = figureNextQuizQuestionNumber(
        quizQuestionNumber,
        movieData,
      )
      setQuizQuestionNumber(nextQuizQuestionNumber)
      setCurrentQuestion(MovieQuestions[nextQuizQuestionNumber])
    } else {
      setRunQuiz(false)
    }
    setTotalScore((oldScore) => [...oldScore, currentScore] as MovieQuizScore[])
    setCurrentScore(null)
  }

  useEffect(() => {
    let nonEmptyAnswers: MovieData[] = []
    for (let i = 0; i < movieData.length; i++) {
      if (movieData[i][currentQuestion.answerPropertyName] !== 'N/A') {
        nonEmptyAnswers.push(movieData[i])
      }
    }
    const randomIndex = getRandomDataSetIndex(nonEmptyAnswers.length)
    setIndex(movieData.indexOf(nonEmptyAnswers[randomIndex]))
  }, [quizQuestionNumber])

  if (runQuiz) {
    return (
      <GenerateQuiz
        movieData={movieData}
        index={index}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        currentQuestion={currentQuestion}
        handleNext={handleNext}
        reset={reset}
      />
    )
  } else {
    return <Results totalScore={totalScore} reset={reset} />
  }
}

const getRandomDataSetIndex = (max: number) => {
  return Math.floor(Math.random() * max)
}

const figureNextQuizQuestionNumber = (
  quizQuestionNumber: number,
  movieData: MovieData[],
) => {
  let count: number = 1
  let maybeQuizQuestionNumber: number
  let avaiableAnswers: MovieData[] = []
  let nextQuizQuestionNumber: number = 0
  do {
    maybeQuizQuestionNumber = quizQuestionNumber + count
    const nextQuizQuestion = MovieQuestions[maybeQuizQuestionNumber]
    for (let i = 0; i <= movieData.length - 1; i++) {
      if (movieData[i][nextQuizQuestion.answerPropertyName] !== 'N/A') {
        avaiableAnswers.push(movieData[i])
      }
    }
    if (avaiableAnswers.length !== 0) {
      nextQuizQuestionNumber = maybeQuizQuestionNumber
    } else {
      count += count
    }
  } while (nextQuizQuestionNumber === 0)
  return nextQuizQuestionNumber
}
