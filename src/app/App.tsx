import React, { useEffect, useState } from 'react'
import { fetchData } from '../quiz/fetch/fetchMovieData'
import { MovieTitles, MovieData } from '../quiz/types/MovieTypes'
import { Quiz } from '../quiz/components/Quiz'
import './App.css'
import { TextField, Button, Grid, Paper } from '@mui/material'

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
  const [isEmpty, setIsEmpty] = useState(true)
  const [valid, setValid] = useState(false)
  const [movieData, setMovieData] = useState<MovieData[]>([])

  const reset = () => {
    setIsEmpty(true)
    setSubmitted(false)
    setValid(false)
    setMovieData([])
    setTitle({ movie1: '', movie2: '', movie3: '', movie4: '' })
  }

  useEffect(() => {
    const callFetch = async () => {
      const movieDataReturned = await fetchData(titles)
      setMovieData(movieDataReturned)
    }
    if (submitted && !isEmpty) {
      callFetch()
    }
  }, [submitted, isEmpty, titles])

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
    if (
      titles.movie1 !== '' &&
      titles.movie2 !== '' &&
      titles.movie3 !== '' &&
      titles.movie4 !== ''
    ) {
      setIsEmpty(false)
    }
  }

  return (
    <div className="App">
      <div>
        {!isEmpty && submitted && valid && movieData.length > 0 ? (
          <div>
            <Paper
              elevation={18}
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
                marginBottom: '50px',
                p: 2,
                maxWidth: 500,
                flexGrow: 1,
              }}
            >
              <Quiz movieData={movieData} reset={reset} />
            </Paper>
          </div>
        ) : (
          <div>
            <Paper
              elevation={18}
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
                p: 2,
                maxWidth: 500,
                flexGrow: 1,
              }}
            >
              <h2>🍿 Enter four movie titles 🍿</h2>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    error={shouldDisplayError(submitted, titles.movie1)}
                    helperText={
                      shouldDisplayError(submitted, titles.movie1) &&
                      'Enter the first movie title'
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
                      'Enter the second movie title'
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
                      'Enter the third movie title'
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
                      'Enter the fourth movie title'
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
                className="generateButton"
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
