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
}

export const GenerateQuiz: React.FC<Props> = ({
  movieAnswers,
  index,
  setCurrentScore,
  currentQuestion,
  handleNext,
}) => {
  return (
    <div>
      <GenerateQuestion
        movieAnswers={movieAnswers}
        index={index}
        currentQuestion={currentQuestion}
      />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
      </Grid>

      <br />
      <Button
        style={{ marginTop: '15px' }}
        variant="contained"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  )
}
