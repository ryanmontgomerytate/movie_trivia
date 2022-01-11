import { MovieData, MovieQuestion, MovieQuizScore } from '../MovieTypes'
import { Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {
  movieData: MovieData[]
  index: number
  setCurrentScore: (score: MovieQuizScore) => void
  theQuestion: JSX.Element
  currentQuestion: MovieQuestion
}

export const GenerateAnswerButtons: React.FC<Props> = ({
  movieData,
  index,
  setCurrentScore,
  theQuestion,
  currentQuestion,
}) => {
  const [selected, setSelected] = useState<string>('')

  const handleClick = (movieTitle: string) => {
    determineScore(movieTitle)
    setSelected(movieTitle)
  }

  useEffect(() => setSelected(''), [currentQuestion])

  const determineScore = (movieTitle: string) => {
    const actualAnswer = movieData[index].Title
    const movieQuizScore = {
      quizQuestion: theQuestion,
      quizAnswer: actualAnswer,
      quizGuess: movieTitle,
    }

    if (movieTitle === actualAnswer) {
      setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
    } else {
      // if there are multiple correct answers of the same value
      if (
        movieData[0][currentQuestion.answerPropertyName] ===
          movieData[index][currentQuestion.answerPropertyName] &&
        0 !== index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else if (
        movieData[1][currentQuestion.answerPropertyName] ===
          movieData[index][currentQuestion.answerPropertyName] &&
        1 !== index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else if (
        movieData[2][currentQuestion.answerPropertyName] ===
          movieData[index][currentQuestion.answerPropertyName] &&
        2 !== index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else if (
        movieData[3][currentQuestion.answerPropertyName] ===
          movieData[index][currentQuestion.answerPropertyName] &&
        3 !== index
      ) {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: true })
      } else {
        setCurrentScore({ ...movieQuizScore, isAnswerCorrect: false })
      }
    }
  }
  const answerButtons = movieData.map((movieAnswer) => (
    <Grid key={movieAnswer.Title} item xs={6}>
      <Button
        key={movieAnswer.Title}
        variant="outlined"
        type="button"
        onClick={() => handleClick(movieAnswer.Title)}
        className={movieAnswer.Title}
        color={movieAnswer.Title === selected ? 'secondary' : 'primary'}
        size="large"
        sx={{ minWidth: 240, minHeight: 70 }}
      >
        {movieAnswer.Title}
      </Button>
    </Grid>
  ))

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {answerButtons}
    </Grid>
  )
}
