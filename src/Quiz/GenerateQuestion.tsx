import { MovieData, MovieQuestion } from '../MovieTypes'

interface Props {
  movieData: MovieData[]
  index: number
  currentQuestion: MovieQuestion
}

export const GenerateQuestion: React.FC<Props> = ({
  movieData,
  index,
  currentQuestion,
}) => {
  let theReturn: JSX.Element = <div>'Question not working'</div>
  if (currentQuestion.answerPropertyName === 'Poster') {
    theReturn = (
      <div>
        <h3 data-testid='questionPart1'>{currentQuestion.question}</h3>
        <p data-testid='questionPart2'>
          <img
            src={movieData[index][currentQuestion.answerPropertyName]}
            alt={movieData[index].Title}
            width="75"
            height="100"
          ></img>
        </p>
      </div>
    )
  } else if (currentQuestion.answerPropertyName === 'Ratings') {
    theReturn = (
      <div>
        <h3 data-testid='questionPart1'>{currentQuestion.question}</h3>
        <div data-testid='questionPart2'>
        {movieData[index].Ratings.map((rating) => (
          <p key={rating.Source}>
            {rating.Source}: {rating.Value}
          </p>
        ))}</div>
      </div>
    )
  } else {
    theReturn = (
      <>
        <h3 data-testid='questionPart1'>{currentQuestion.question}</h3>
        <p data-testid='questionPart2'>{movieData[index][currentQuestion.answerPropertyName]}</p>
      </>
    )
  }
  return theReturn
}
