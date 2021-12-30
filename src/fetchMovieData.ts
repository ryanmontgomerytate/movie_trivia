import { MovieAnswers, MovieTitles } from './MovieTypes'

export const fetchData = async (
  movieTitles: MovieTitles,
): Promise<MovieAnswers[]> => {
  const apiUrl = 'https://www.omdbapi.com/?t='
  const apiKey = '&apikey=69942670'

  let json
  let movieAnswers: MovieAnswers[] = []

  for (const [key, value] of Object.entries(movieTitles)) {
    const apiCall = apiUrl + `${value}` + apiKey
    try {
      const response = await fetch(apiCall)
      json = (await response.json()) as MovieAnswers
      movieAnswers.push(Object.assign(new MovieAnswers(), json))
    } catch (error) {
      console.log('error', error)
    }
  }

  return movieAnswers
}