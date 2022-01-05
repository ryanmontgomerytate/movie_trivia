import { useState } from 'react'
import {
  MovieAnswers,
  MovieQuestion,
  MovieQuestions,
  MovieQuizScore,
} from '../MovieTypes'
import { GenerateQuiz } from './GenerateQuiz'
import { Results } from './Results'

interface Props {
  movieAnswers: MovieAnswers[]
}

export const Quiz: React.FC<Props> = ({ movieAnswers: movieAnswers }) => {
  const [index, setIndex] = useState<number>(getRandomQ(movieAnswers.length))
  const [quizQuestionNumber, setQuizQuestionNumber] = useState<number>(0)
  const [totalScore, setTotalScore] = useState<MovieQuizScore[]>([])
  const [currentScore, setCurrentScore] = useState<MovieQuizScore>()
  const [runQuiz, setRunQuiz] = useState(true)

  const handleNext = () => {
    setIndex(getRandomQ(movieAnswers.length))
    if (quizQuestionNumber < MovieQuestions.length - 1) {
      setQuizQuestionNumber(quizQuestionNumber + 1)
      setTotalScore(
        (oldScore) => [...oldScore, currentScore] as MovieQuizScore[],
      )
    } else {
      setRunQuiz(false)
    }
  }
  const currentQuestion: MovieQuestion = MovieQuestions[quizQuestionNumber]

  if (runQuiz) {
    return (
      <GenerateQuiz
        movieAnswers={movieAnswers}
        index={index}
        setCurrentScore={setCurrentScore}
        currentQuestion={currentQuestion}
        handleNext={handleNext}
      />
    )
  } else {
    return <Results totalScore={totalScore} />
  }
}

const getRandomQ = (max: number) => {
  return Math.floor(Math.random() * max)
}
