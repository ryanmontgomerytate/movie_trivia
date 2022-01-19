import { MovieData } from '../MovieTypes'


export default {
    fetchData: jest.fn(() => mockMovieDataList)
}

export const mockResponseTheShawshankRedemption: MovieData = {
  Title: 'The Shawshank Redemption',
  Year: '1994',
  Rated: 'R',
  Released: '14 Oct 1994',
  Runtime: '142 min',
  Genre: 'Drama',
  Director: 'Frank Darabont',
  Writer: 'Stephen King, Frank Darabont',
  Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton',
  Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  Language: 'English',
  Country: 'United States',
  Awards: 'Nominated for 7 Oscars. 21 wins & 43 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '9.3/10' },
    { Source: 'Rotten Tomatoes', Value: '91%' },
    { Source: 'Metacritic', Value: '80/100' },
  ],
  Metascore: '80',
  imdbRating: '9.3',
  imdbVotes: '2,523,987',
  Type: 'movie',
  DVD: '21 Dec 1999',
  BoxOffice: '$28,699,976',
}

export const mockResponseTheGodFather = {
  Title: 'The Godfather',
  Year: '1972',
  Rated: 'R',
  Released: '24 Mar 1972',
  Runtime: '175 min',
  Genre: 'Crime, Drama',
  Director: 'Francis Ford Coppola',
  Writer: 'Mario Puzo, Francis Ford Coppola',
  Actors: 'Marlon Brando, Al Pacino, James Caan',
  Plot: 'The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.',
  Language: 'English, Italian, Latin',
  Country: 'United States',
  Awards: 'Won 3 Oscars. 31 wins & 30 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '9.2/10' },
    { Source: 'Rotten Tomatoes', Value: '97%' },
    { Source: 'Metacritic', Value: '100/100' },
  ],
  Metascore: '100',
  imdbRating: '9.2',
  imdbVotes: '1,729,128',
  imdbID: 'tt0068646',
  Type: 'movie',
  DVD: '11 May 2004',
  BoxOffice: '$134,966,411',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
}

export const mockResponseTheDarkKnight = {
  Title: 'The Dark Knight',
  Year: '2008',
  Rated: 'PG-13',
  Released: '18 Jul 2008',
  Runtime: '152 min',
  Genre: 'Action, Crime, Drama',
  Director: 'Christopher Nolan',
  Writer: 'Jonathan Nolan, Christopher Nolan, David S. Goyer',
  Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart',
  Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  Language: 'English, Mandarin',
  Country: 'United States, United Kingdom',
  Awards: 'Won 2 Oscars. 159 wins & 163 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '9.0/10' },
    { Source: 'Rotten Tomatoes', Value: '94%' },
    { Source: 'Metacritic', Value: '84/100' },
  ],
  Metascore: '84',
  imdbRating: '9.0',
  imdbVotes: '2,458,791',
  imdbID: 'tt0468569',
  Type: 'movie',
  DVD: '09 Dec 2008',
  BoxOffice: '$534,858,444',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
}

export const mockResponseParasite = {
  Title: 'Parasite',
  Year: '2019',
  Rated: 'R',
  Released: '08 Nov 2019',
  Runtime: '132 min',
  Genre: 'Comedy, Drama, Thriller',
  Director: 'Bong Joon Ho',
  Writer: 'Bong Joon Ho, Jin-won Han',
  Actors: 'Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho',
  Plot: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
  Language: 'Korean, English',
  Country: 'South Korea',
  Awards: 'Won 4 Oscars. 307 wins & 272 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.6/10' },
    { Source: 'Rotten Tomatoes', Value: '98%' },
    { Source: 'Metacritic', Value: '96/100' },
  ],
  Metascore: '96',
  imdbRating: '8.6',
  imdbVotes: '692,780',
  imdbID: 'tt6751668',
  Type: 'movie',
  DVD: '11 Oct 2019',
  BoxOffice: '$53,369,749',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
}

 export const mockMovieDataList: MovieData[] = [
  mockResponseTheShawshankRedemption,
  mockResponseTheGodFather,
  mockResponseTheDarkKnight,
  mockResponseParasite
]



