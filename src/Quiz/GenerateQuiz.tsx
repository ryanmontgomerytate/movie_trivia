import { MovieAnswers, MovieQuestion, MovieQuizScore } from '../MovieTypes'
import { GenerateAnswerButtons } from './GenerateAnswerButtons'
import { GenerateQuestion } from './GenerateQuestion'

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
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
