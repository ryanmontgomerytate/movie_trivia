import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [values, setValues] = useState({
    movie1: '',
    movie2: '',
    movie3: '',
    movie4: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleMovie1InputChange = (event: any) => {
    setValues({ ...values, movie1: event.target.value })
  }
  const handleMovie2InputChange = (event: any) => {
    setValues({ ...values, movie2: event.target.value })
  }
  const handleMovie3InputChange = (event: any) => {
    setValues({ ...values, movie3: event.target.value })
  }
  const handleMovie4InputChange = (event: any) => {
    setValues({ ...values, movie4: event.target.value })
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (values.movie1 && values.movie2 && values.movie3 && values.movie4) {
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
      <body>
        {submitted ? (
          <p>Generating</p>
        ) : (
          <p>
            Please enter four movie titles
            <form className="movies-form" onSubmit={handleSubmit}>
              {submitted && valid ? <div>Success!</div> : null}
              <ol>
                <li>
                  <input
                    onChange={handleMovie1InputChange}
                    value={values.movie1}
                    className="form-field"
                    placeholder="Movie Title One"
                    name="movie1"
                  />
                  {submitted && !values.movie1 ? (
                    <span>Please enter movie title one.</span>
                  ) : null}
                </li>
                <li>
                  <input
                    onChange={handleMovie2InputChange}
                    value={values.movie2}
                    className="form-field"
                    placeholder="Movie Title Two"
                    name="movie2"
                  />
                  {submitted && !values.movie2 ? (
                    <span>Please enter movie title two.</span>
                  ) : null}
                </li>
                <li>
                  <input
                    onChange={handleMovie3InputChange}
                    value={values.movie3}
                    className="form-field"
                    placeholder="Movie Title Three"
                    name="movie3"
                  />
                  {submitted && !values.movie3 ? (
                    <span>Please enter movie title three.</span>
                  ) : null}
                </li>
                <li>
                  <input
                    onChange={handleMovie4InputChange}
                    value={values.movie4}
                    className="form-field"
                    placeholder="Movie Title Four"
                    name="movie4"
                  />
                  {submitted && !values.movie4 ? (
                    <span>Please enter movie title four.</span>
                  ) : null}
                </li>
              </ol>
              <button className="form-field" type="submit">
                Generate
              </button>
            </form>
          </p>
        )}
      </body>
    </div>
  )
}

export default App
