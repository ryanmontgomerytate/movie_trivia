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
      <>
        <h3>{currentQuestion.question}</h3>
        <p>Information is not avaible and or did not happen for this title.</p>
      </>
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
          <p key={rating.Source}>
            {rating.Source}: {rating.Value}
          </p>
        ))}
      </div>
    )
  } else {
    theReturn = (
      <>
        <h3>{currentQuestion.question}</h3>
        <p>{movieAnswers[index][currentQuestion.answerPropertyName]}</p>
      </>
    )
  }
  return theReturn
}
