import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from './App'
import { MovieData, MovieTitles } from './MovieTypes'

const mockFetchData = async (
  mockMovieTitles: MovieTitles,
): Promise<MovieData[]> => {
  let mockMovieAnswers: MovieData[] = []

  return mockMovieAnswers
}


describe('App', () => {

  test('should render input element', async () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/Movie Title One/i)
    expect(inputElement).toBeInTheDocument
  })

  test('shoule be able to type in input', async () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/Movie Title One/i)
    fireEvent.change(inputElement, { target: { value: 'Batman' } })
    expect((inputElement as any).value).toBe('Batman')
  })

  test('when generate clicked, input displays error under it', async () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/Movie Title One/i)
    const buttonElement = screen.getByRole('button', { name: /Generate/i })
    expect((inputElement as any).value).toBe('')
    fireEvent.click(buttonElement)
    const errorElement = screen.getByText(/Enter the first movie title/i) as HTMLParagraphElement
    expect(errorElement).toBeTruthy
  })


  test('shoule be able to type in input', async () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/Movie Title One/i)
    fireEvent.change(inputElement, { target: { value: 'Batman' } })
    expect((inputElement as any).value).toBe('Batman')
  })

})
