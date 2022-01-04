import React, { useEffect, useState } from 'react'
import { fetchData } from './fetchMovieData'
import { MovieTitles, MovieAnswers } from './MovieTypes'
import { Quiz } from './Quiz'

export const App: React.FC = () => {
  const [titles, setTitle] = useState<MovieTitles>({
    movie1: '',
    movie2: '',
    movie3: '',
    movie4: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)
  const [movieAnswers, setTheMovieAnswers] = useState<MovieAnswers[]>([])

  const reset = () => {
    setSubmitted(false)
    setValid(false)
    setTheMovieAnswers([])
    setTitle({ movie1: '', movie2: '', movie3: '', movie4: '' })
  }

  useEffect(() => {
    if (submitted) {
      const callFetch = async () => {
        const movieAnswersReturned = await fetchData(titles)
        setTheMovieAnswers(movieAnswersReturned)
      }
      callFetch()
    }
  }, [submitted])

  const handleMovie1InputChange = (event: any) => {
    setTitle({ ...titles, movie1: event.target.value })
  }
  const handleMovie2InputChange = (event: any) => {
    setTitle({ ...titles, movie2: event.target.value })
  }
  const handleMovie3InputChange = (event: any) => {
    setTitle({ ...titles, movie3: event.target.value })
  }
  const handleMovie4InputChange = (event: any) => {
    setTitle({ ...titles, movie4: event.target.value })
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (titles.movie1 && titles.movie2 && titles.movie3 && titles.movie4) {
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div>
      <h1>Welcome to Movie Trivia Generator</h1>
      <h2>
        Using <a href="http://www.omdbapi.com/">OMDb API</a>
      </h2>
      <div>
        {submitted && movieAnswers.length > 0 ? (
          <div>
            <Quiz movieAnswers={movieAnswers} />
            <button onClick={reset}>Reset</button>
          </div>
        ) : (
          <div>
            Please enter four movie titles
            <form className="movies-form" onSubmit={handleSubmit}>
              {submitted && valid ? <div>Success!</div> : null}
              <ol>
                <li>
                  <input
                    onChange={handleMovie1InputChange}
                    value={titles.movie1}
                    className="form-field"
                    placeholder="Movie Title One"
                    name="movie1"
                  />
                  {submitted && !titles.movie1 ? (
                    <span>Please enter movie title one.</span>
                  ) : null}
                </li>
                <li>
                  <input
                    onChange={handleMovie2InputChange}
                    value={titles.movie2}
                    className="form-field"
                    placeholder="Movie Title Two"
                    name="movie2"
                  />
                  {submitted && !titles.movie2 ? (
                    <span>Please enter movie title two.</span>
                  ) : null}
                </li>
                <li>
                  <input
                    onChange={handleMovie3InputChange}
                    value={titles.movie3}
                    className="form-field"
                    placeholder="Movie Title Three"
                    name="movie3"
                  />
                  {submitted && !titles.movie3 ? (
                    <span>Please enter movie title three.</span>
                  ) : null}
                </li>
                <li>
                  <input
                    onChange={handleMovie4InputChange}
                    value={titles.movie4}
                    className="form-field"
                    placeholder="Movie Title Four"
                    name="movie4"
                  />
                  {submitted && !titles.movie4 ? (
                    <span>Please enter movie title four.</span>
                  ) : null}
                </li>
              </ol>
              <button className="form-field" type="submit">
                Generate
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
