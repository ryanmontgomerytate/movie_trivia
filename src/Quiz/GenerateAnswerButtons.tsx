import { MovieAnswers, MovieQuestion, MovieQuizScore } from '../MovieTypes'
import { Button, Grid } from '@mui/material'

interface Props {
  movieAnswers: MovieAnswers[]
  index: number
  setCurrentScore: (score: MovieQuizScore) => void
  theQuestion: JSX.Element
  currentQuestion: MovieQuestion
}

export const GenerateAnswerButtons: React.FC<Props> = ({
  movieAnswers,
  index,
  setCurrentScore,
  theQuestion,
  currentQuestion,
}) => {
  const determineScore = (movieTitle: string) => {
    const actualAnswer = movieAnswers[index].Title
    const movieQuizScore = {
      quizQuestion: theQuestion,
      quizAnswer: actualAnswer,
      quizGuess: movieTitle,
    }

    if (movieTitle === actualAnswer) {
      setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
    } else {
      if (
        movieAnswers[0][currentQuestion.answerPropertyName] ===
          movieAnswers[index][currentQuestion.answerPropertyName] &&
        0 != index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else if (
        movieAnswers[1][currentQuestion.answerPropertyName] ===
          movieAnswers[index][currentQuestion.answerPropertyName] &&
        1 != index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else if (
        movieAnswers[2][currentQuestion.answerPropertyName] ===
          movieAnswers[index][currentQuestion.answerPropertyName] &&
        2 != index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else if (
        movieAnswers[3][currentQuestion.answerPropertyName] ===
          movieAnswers[index][currentQuestion.answerPropertyName] &&
        3 != index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: false })
      }
    }
  }
  const answerButtons = movieAnswers.map((movieAnswer) => (
    <Grid item xs={6}>
      <Button
        variant="contained"
        type="button"
        onClick={() => determineScore(movieAnswer.Title)}
      >
        {movieAnswer.Title}
      </Button>
      </Grid>
  ))

  return <>{answerButtons}</>
}
