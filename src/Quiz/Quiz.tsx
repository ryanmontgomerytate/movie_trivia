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
  reset: () => void
}

export const Quiz: React.FC<Props> = ({ movieAnswers, reset }) => {
  const [index, setIndex] = useState<number>(getRandomQ(movieAnswers.length))
  const [quizQuestionNumber, setQuizQuestionNumber] = useState<number>(0)
  const [totalScore, setTotalScore] = useState<MovieQuizScore[]>([])
  const [currentScore, setCurrentScore] = useState<MovieQuizScore | null>(null)
  const [runQuiz, setRunQuiz] = useState(true)

  const handleNext = () => {
    setIndex(getRandomQ(movieAnswers.length))
    if (quizQuestionNumber !== MovieQuestions.length - 1) {
      setQuizQuestionNumber(quizQuestionNumber + 1)
    } else {
      setRunQuiz(false)
    }
    setTotalScore((oldScore) => [...oldScore, currentScore] as MovieQuizScore[])
    setCurrentScore(null)
  }
  const currentQuestion: MovieQuestion = MovieQuestions[quizQuestionNumber]

  if (runQuiz) {
    return (
      <GenerateQuiz
        movieAnswers={movieAnswers}
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

const getRandomQ = (max: number) => {
  return Math.floor(Math.random() * max)
}
