import { MovieQuizScore } from '../MovieTypes'
import { Button } from '@mui/material'

interface Props {
  totalScore: MovieQuizScore[]
  reset: () => void
}

export const Results: React.FC<Props> = ({ totalScore, reset }) => {
  let tally = 0
  totalScore.forEach((x) => (x.isAnswerCorrect ? (tally += 1) : null))
  const percentage = Math.round((tally / totalScore.length) * 100)

  return (
    <div>
      <h2>
        Your score is {tally} out of {totalScore.length}. You got {percentage}%
        of the questions correct.
      </h2>
      <Button variant="contained" color="success" onClick={reset}>
        🍿 Play again 🍿
      </Button>
      <div>
        {totalScore.map((score, index) => (
          <div key={index}>
            {score.quizQuestion}
            <p>Answer: {score.quizAnswer}</p>
            <p>
              Guess: {score.quizGuess} {score.isAnswerCorrect ? '🍿' : '❌'}
            </p>
            {score.quizAnswer !== score.quizGuess &&
              score.isAnswerCorrect === true && (
                <p>Had multiple correct answers.</p>
              )}
          </div>
        ))}
      </div>
    </div>
  )
}
