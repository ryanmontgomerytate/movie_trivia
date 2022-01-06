export interface MovieQuestion {
  answerPropertyName: keyof MovieAnswers
  question: string
}

export interface MovieQuizScore {
  quizQuestion: JSX.Element
  quizAnswer: string
  quizGuess: string
  isAnswerCorrect: boolean
}

export const MovieQuestions: MovieQuestion[] = [
  {
    answerPropertyName: 'Actors',
    question: 'This movie had the following actors: ',
  },
  {
    answerPropertyName: 'Awards',
    question: 'This movie recieved these recognitions: ',
  },
  {
    answerPropertyName: 'BoxOffice',
    question: 'This movie earned the following at the Box Office: ',
  },
  { answerPropertyName: 'DVD', question: 'This movie went to DVD on: ' },
  { answerPropertyName: 'Director', question: 'This movie was directed by: ' },
  { answerPropertyName: 'Genre', question: 'This movie is this genre: ' },
  {
    answerPropertyName: 'Metascore',
    question: 'This movie has this Metascore: ',
  },
  { answerPropertyName: 'Plot', question: 'This movie has this plot: ' },
  {
    answerPropertyName: 'Poster',
    question: 'This movie has the following Poster: ',
  },
  {
    answerPropertyName: 'Rated',
    question: 'This movie has the following film rating: ',
  },
  {
    answerPropertyName: 'Ratings',
    question: 'This movie has the following critic and audience ratings: ',
  },
  { answerPropertyName: 'Released', question: 'This movie was released on: ' },
  {
    answerPropertyName: 'Runtime',
    question: 'This movie has the following runtime: ',
  },
  {
    answerPropertyName: 'Writer',
    question: 'This movie has the following writer(s): ',
  },
  {
    answerPropertyName: 'imdbRating',
    question: 'This movie has the following IMDB rating: ',
  },
  {
    answerPropertyName: 'imdbVotes',
    question: 'This movie has the following IMDB votes: ',
  },
]

export interface MovieTitles {
  movie1: string | null
  movie2: string | null
  movie3: string | null
  movie4: string | null
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
