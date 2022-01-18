import React from 'react'
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { App } from './App'
import { mockMovieDataList, mockResponseParasite, mockResponseTheDarkKnight, mockResponseTheGodFather, mockResponseTheShawshankRedemption } from './__mocks__/mockMovieData'
const mockFetchData = jest.fn(() => mockMovieDataList)

describe('Individual pieces of App', () => {

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
    const errorElement = screen.getByText(
      /Enter the first movie title/i,
    ) as HTMLParagraphElement
    expect(errorElement).toBeTruthy
  })

  test('shoule be move to the first quiz question', async () => {
    render(<App />)
    const inputMovie1 = screen.getByPlaceholderText(/Movie Title One/i)
    fireEvent.change(inputMovie1, { target: { value: 'Batman' } })
    expect((inputMovie1 as any).value).toBe('Batman')
    const inputMovie2 = screen.getByPlaceholderText(/Movie Title Two/i)
    fireEvent.change(inputMovie2, { target: { value: 'Batman' } })
    expect((inputMovie2 as any).value).toBe('Batman')
  })
})

describe('Walks through whole movie trivia', () => {

  test('should render input element', async () => {
    // const mockFetchData = jest.fn(() => mockMovieDataList)
    render(<App />)
    // input movie titles into all four boxes
    const inputMovie1 = screen.getByPlaceholderText(/Movie Title One/i)
    fireEvent.change(inputMovie1, {
      target: { value: 'The Shawshank Redemption' },
    })

    const inputMovie2 = screen.getByPlaceholderText(/Movie Title Two/i)
    fireEvent.change(inputMovie2, { target: { value: 'The GodFather' } })

    const inputMovie3 = screen.getByPlaceholderText(/Movie Title Three/i)
    fireEvent.change(inputMovie3, { target: { value: 'The Dark Knight' } })

    const inputMovie4 = screen.getByPlaceholderText(/Movie Title Four/i)
    fireEvent.change(inputMovie4, { target: { value: 'Parasite' } })

    // click generate
    const buttonElement = screen.getByRole('button', { name: /Generate/i })
    fireEvent.click(buttonElement)

    await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /Generate/i }))
    // see if you can find answer buttons with the movie titles entered
     screen.debug()
    // see if fetch mock was called
    const buttonMovie1 = screen.getByRole('button', { name: mockResponseTheShawshankRedemption.Title})
    expect(buttonMovie1).toBeInTheDocument
    expect((buttonMovie1 as any).value).toBe(mockResponseTheShawshankRedemption.Title)
    const buttonMovie2 = screen.getByRole('button', { name: mockResponseTheGodFather.Title})
    const buttonMovie3 = screen.getByRole('button', { name: mockResponseTheDarkKnight.Title})
    const buttonMovie4 = screen.getByRole('button', { name: mockResponseParasite.Title})

    // check to see if all movie titles are button
    // check first question is actors
    // check funtionality of reset and next buttons
  })
})
