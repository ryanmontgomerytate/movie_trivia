import { useState } from 'react'
import {
  MovieAnswers,
  MovieQuestion,
  MovieQuestions,
  MovieQuizScore,
} from './MovieTypes'

export const generateAnswerButtons = (
  movieAnswers: MovieAnswers[],
  index: number,
  setCurrentScore: (score: MovieQuizScore) => void,
  theQuestion: JSX.Element
) => {
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
      setCurrentScore({ ...movieQuizScore, isAnswerCorrect: false })
    }
  }

  return movieAnswers.map((movieAnswer) => (
    <div>
      <button onClick={() => determineScore(movieAnswer.Title)}>
        {movieAnswer.Title}
      </button>
      <br></br>
    </div>
  ))
}

export const MakeQuestion = (
  movieAnswers: MovieAnswers[],
  index: number,
  currentQuestion: MovieQuestion,
) => {
  let theReturn: JSX.Element = <div>'Question not working'</div>

  if (movieAnswers[index][currentQuestion.answerPropertyName] === 'N/A') {
    theReturn = (
      <h3>
        {currentQuestion.question +
          'information not avaiable for this title on IMDB'}
      </h3>
    )
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

const DoQuiz = (
  movieAnswers: MovieAnswers[],
  index: number,
  score: MovieQuizScore[],
  setCurrentScore: (score: MovieQuizScore) => void,
  currentQuestion: MovieQuestion,
  handleNext: () => void,
) => {
  return (
    <div>
      {MakeQuestion(movieAnswers, index, currentQuestion)}
      {generateAnswerButtons(
        movieAnswers,
        index,
        setCurrentScore,
        MakeQuestion(movieAnswers, index, currentQuestion)
      )}
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

const showScore = (totalScore: MovieQuizScore[]) => {
  let tally = 0
  totalScore.forEach((x) => (x.isAnswerCorrect ? (tally += 1) : null))
  const percentage = Math.round((tally / totalScore.length) * 100)
  return (
    <div>
      <h3>
        Your score is {tally} out of {totalScore.length}. You got {percentage}%
        of the questions correct.
      </h3>
      <div>
        {totalScore.map((review) => (
          <ul>
            <li>{review.quizQuestion}</li>
            <ul>Answer - {review.quizAnswer}</ul>
            <ul>Guess - {review.quizGuess}</ul>
          </ul>
        ))}
      </div>
    </div>
  )
}

export const getRandomQ = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const Quiz: React.FC<{ movieAnswers: MovieAnswers[] }> = ({
  movieAnswers: movieAnswers,
}) => {
  const [index, setIndex] = useState<number>(getRandomQ(movieAnswers.length))
  const [quizQuestionNumber, setQuizQuestionNumber] = useState<number>(0)
  const [totalScore, setTotalScore] = useState<MovieQuizScore[]>([])
  const [currentScore, setCurrentScore] = useState<MovieQuizScore>()
  const [quizTime, setQuizTime] = useState(true)
  const handleNext = () => {
    setIndex(getRandomQ(movieAnswers.length))
    if (quizQuestionNumber < MovieQuestions.length - 1) {
      setQuizQuestionNumber(quizQuestionNumber + 1)
      setTotalScore(
        (oldScore) => [...oldScore, currentScore] as MovieQuizScore[],
      )
    } else {
      setQuizTime(false)
    }
    
    if (movieAnswers[index][MovieQuestions[quizQuestionNumber].answerPropertyName] === 'N/A'){
      console.log(MovieQuestions[quizQuestionNumber].question +
        movieAnswers[index][MovieQuestions[quizQuestionNumber].answerPropertyName])
    }


  }
  const currentQuestion: MovieQuestion = MovieQuestions[quizQuestionNumber]

  if (quizTime) {
    return DoQuiz(
      movieAnswers,
      index,
      totalScore,
      setCurrentScore,
      currentQuestion,
      handleNext,
    )
  } else {
    return showScore(totalScore)
  }
}
