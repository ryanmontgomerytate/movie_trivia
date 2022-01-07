import React, { useEffect, useState } from 'react'
import { fetchData } from './fetchMovieData'
import { MovieTitles, MovieAnswers } from './MovieTypes'
import { Quiz } from './Quiz/Quiz'
import './App.css'
import { TextField, Button, Grid, Paper } from '@mui/material'

const noMovieEntered = 'Please enter a movie title.'

const shouldDisplayError = (submitted: boolean, movieTitle: string) =>
  submitted && !movieTitle

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
    <div className="App">
      <div>
        {submitted && valid && movieAnswers.length > 0 ? (
          <div>
            <Paper
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
                p: 2,
                maxWidth: 500,
                flexGrow: 1,
              }}
            >
              <Quiz movieAnswers={movieAnswers} />
              <Button
                style={{ marginTop: '15px' }}
                variant="contained"
                onClick={reset}
              >
                Reset
              </Button>
            </Paper>
          </div>
        ) : (
          <div>
            {submitted && valid ? <div>Success!</div> : null}

            <Paper
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
                p: 2,
                maxWidth: 500,
                flexGrow: 1,
              }}
            >
              <h5>Please enter four movie titles</h5>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    error={shouldDisplayError(submitted, titles.movie1)}
                    helperText={
                      shouldDisplayError(submitted, titles.movie1) &&
                      noMovieEntered
                    }
                    onChange={handleMovie1InputChange}
                    value={titles.movie1}
                    className="form-field"
                    placeholder="Movie Title One"
                    name="movie1"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    error={shouldDisplayError(submitted, titles.movie2)}
                    helperText={
                      shouldDisplayError(submitted, titles.movie2) &&
                      noMovieEntered
                    }
                    onChange={handleMovie2InputChange}
                    value={titles.movie2}
                    className="form-field"
                    placeholder="Movie Title Two"
                    name="movie2"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    error={shouldDisplayError(submitted, titles.movie3)}
                    helperText={
                      shouldDisplayError(submitted, titles.movie3) &&
                      noMovieEntered
                    }
                    onChange={handleMovie3InputChange}
                    value={titles.movie3}
                    className="form-field"
                    placeholder="Movie Title Three"
                    name="movie3"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    error={shouldDisplayError(submitted, titles.movie4)}
                    helperText={
                      shouldDisplayError(submitted, titles.movie4) &&
                      noMovieEntered
                    }
                    onChange={handleMovie4InputChange}
                    value={titles.movie4}
                    className="form-field"
                    placeholder="Movie Title Four"
                    name="movie4"
                  />
                </Grid>
              </Grid>

              <Button
                style={{ marginTop: '15px' }}
                variant="contained"
                className="form-field"
                value="submit"
                onClick={handleSubmit}
              >
                Generate
              </Button>
            </Paper>
          </div>
        )}
      </div>
    </div>
  )
}
