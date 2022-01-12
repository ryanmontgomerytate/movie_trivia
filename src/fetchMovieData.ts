import { MovieData, MovieTitles } from './MovieTypes'

export const fetchData = async (
  movieTitles: MovieTitles,
): Promise<MovieData[]> => {
  const apiUrl = 'https://www.omdbapi.com/?t='
  const apiKey = '&apikey=6994267'

  let json
  let movieAnswers: MovieData[] = []

  for (const [, value] of Object.entries(movieTitles)) {
    const apiCall = apiUrl + `${value}` + apiKey
    try {
      const response = await fetch(apiCall)
      json = (await response.json()) as MovieData
      movieAnswers.push(Object.assign(new MovieData(), json))
    } catch (error) {
      console.log('error', error)
    }
  }

  return movieAnswers
}
