import { MovieAnswers, MovieQuestion } from '../MovieTypes'

interface Props {
  movieAnswers: MovieAnswers[]
  index: number
  currentQuestion: MovieQuestion
}

export const GenerateQuestion: React.FC<Props> = ({
  movieAnswers,
  index,
  currentQuestion,
}) => {
  let theReturn: JSX.Element = <div>'Question not working'</div>

  if (movieAnswers[index][currentQuestion.answerPropertyName] === 'N/A') {
    theReturn = (
      <h3>
        {currentQuestion.question} Information is not avaible and or did not
        happen for this title.
      </h3>
    )
    // const firstNonEmptyAnswer = movieAnswers.find(
    //   (movieAnswer) =>
    //     movieAnswer[currentQuestion.answerPropertyName] !== 'N/A',
    // )
    // if (firstNonEmptyAnswer) {
    //   theReturn = (
    //     <div>
    //       <h3>
    //         {currentQuestion.question +
    //           firstNonEmptyAnswer[currentQuestion.answerPropertyName]}
    //       </h3>
    //     </div>
    //   )
    // } else {
    //   return <></>
    // }
  } else if (currentQuestion.answerPropertyName === 'Poster') {
    theReturn = (
      <div>
        <h3>{currentQuestion.question}</h3>
        <p>
          <img
            src={movieAnswers[index][currentQuestion.answerPropertyName]}
            alt={movieAnswers[index].Title}
            width="75"
            height="100"
          ></img>
        </p>
      </div>
    )
  } else if (currentQuestion.answerPropertyName === 'Ratings') {
    theReturn = (
      <div>
        <h3>{currentQuestion.question}</h3>
        {movieAnswers[index].Ratings.map((rating) => (
          <ul>
            <li>
              {rating.Source}
              <ul>
                <li>{rating.Value}</li>
              </ul>
            </li>
          </ul>
        ))}
      </div>
    )
  } else {
    theReturn = (
      <h3>
        {currentQuestion.question +
          movieAnswers[index][currentQuestion.answerPropertyName]}
      </h3>
    )
  }
  return theReturn
}
