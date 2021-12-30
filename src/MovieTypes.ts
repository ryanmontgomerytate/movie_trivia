export const MovieQuestions = {
  ACTOR_QUESTION: 'Who is the actor?',
  MOVIE_RATINGS: "What are the ratings?"
}

export interface MovieTitles {
  movie1: string
  movie2: string
  movie3: string
  movie4: string
}

export interface MovieRating {
  Source: string
  Value: string
}

export class MovieAnswers {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: MovieRating[]
  Released: string
  Runtime: string
  Title: string
  Type: string
  Writer: string
  Year: string
  imdbRating: string
  imdbVotes: string
}
