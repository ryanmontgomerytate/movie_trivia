import { MovieAnswers, MovieQuestion, MovieQuizScore } from '../MovieTypes'
import { GenerateAnswerButtons } from './GenerateAnswerButtons'
import { GenerateQuestion } from './GenerateQuestion'
import { Grid, Button } from '@mui/material'

interface Props {
  movieAnswers: MovieAnswers[]
  index: number
  setCurrentScore: (score: MovieQuizScore) => void
  currentQuestion: MovieQuestion
  handleNext: () => void
  reset: () => void
  currentScore: MovieQuizScore | null
}

export const GenerateQuiz: React.FC<Props> = ({
  movieAnswers,
  index,
  setCurrentScore,
  currentQuestion,
  handleNext,
  reset,
  currentScore,
}) => {
  return (
    <div>
      <GenerateQuestion
        movieAnswers={movieAnswers}
        index={index}
        currentQuestion={currentQuestion}
      />
      <GenerateAnswerButtons
        movieAnswers={movieAnswers}
        index={index}
        setCurrentScore={setCurrentScore}
        theQuestion={
          <GenerateQuestion
            movieAnswers={movieAnswers}
            index={index}
            currentQuestion={currentQuestion}
          />
        }
        currentQuestion={currentQuestion}
      />
      <br />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button
            style={{ marginTop: '15px', float: 'left' }}
            variant="contained"
            color="error"
            onClick={reset}
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            disabled={currentScore === null}
            style={{ marginTop: '15px', float: 'right' }}
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
