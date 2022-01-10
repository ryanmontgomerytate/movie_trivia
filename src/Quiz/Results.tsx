import { MovieQuizScore } from '../MovieTypes'

interface Props {
  totalScore: MovieQuizScore[]
}

export const Results: React.FC<Props> = ({ totalScore }) => {
  let tally = 0
  totalScore.forEach((x) => (x.isAnswerCorrect ? (tally += 1) : null))
  const percentage = Math.round((tally / totalScore.length) * 100)

  return (
    <div>
      <h2>
        Your score is {tally} out of {totalScore.length}. You got {percentage}%
        of the questions correct.
      </h2>
      <div>
        {totalScore.map((review) => (
          <div>
            {review.quizQuestion}
            <ul>Answer - {review.quizAnswer}</ul>
            <ul>Guess - {review.quizGuess}</ul>
            {review.quizAnswer !== review.quizGuess &&
              review.isAnswerCorrect === true && (
                <ul>Had multiple correct answers.</ul>
              )}
          </div>
        ))}
      </div>
    </div>
  )
}
