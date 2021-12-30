import { MovieAnswers, MovieQuestions } from './MovieTypes'

export const Quiz: React.FC<{ movieAnswers: MovieAnswers[] }> = ({
  movieAnswers: movieAnswers,
}) => {
  return (
    <div>
      <div>
        <h2>{movieAnswers[0].Title}</h2>
        <p>{MovieQuestions.ACTOR_QUESTION}</p>
        <p>{movieAnswers[0].Actors}</p>
      </div>
      <div>
        <h2>{movieAnswers[0].Title}</h2>
        <p>{MovieQuestions.MOVIE_RATINGS}</p>
        <p>{movieAnswers[0].Ratings[0].Value}</p>
      </div>
    </div>
  )
}
