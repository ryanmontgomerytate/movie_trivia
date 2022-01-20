import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { App } from '../app/App'
import {
  mockMovieDataList,
  mockResponseParasite,
  mockResponseTheDarkKnight,
  mockResponseTheGodFather,
  mockResponseTheShawshankRedemption,
} from './__mocks__/fetchData'
import { MovieQuestions } from '../quiz/types/MovieTypes'

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

  test('should allow input change ', async () => {
    render(<App />)
    const inputMovie1 = screen.getByPlaceholderText(/Movie Title One/i)
    fireEvent.change(inputMovie1, {
      target: { value: 'The Shawshank Redemption' },
    })
    expect((inputMovie1 as any).value).toBe('The Shawshank Redemption')

    const inputMovie2 = screen.getByPlaceholderText(/Movie Title Two/i)
    fireEvent.change(inputMovie2, { target: { value: 'The GodFather' } })
    expect((inputMovie2 as any).value).toBe('The GodFather')

    const inputMovie3 = screen.getByPlaceholderText(/Movie Title Three/i)
    fireEvent.change(inputMovie3, { target: { value: 'The Dark Knight' } })
    expect((inputMovie3 as any).value).toBe('The Dark Knight')

    const inputMovie4 = screen.getByPlaceholderText(/Movie Title Four/i)
    fireEvent.change(inputMovie4, { target: { value: 'Parasite' } })
    expect((inputMovie4 as any).value).toBe('Parasite')

    fireEvent.change(inputMovie4, { target: { value: '' } })
    expect((inputMovie4 as any).value).toBe('')
    fireEvent.change(inputMovie4, { target: { value: 'Batman' } })
    expect((inputMovie4 as any).value).toBe('Batman')
  })

  test('take input for all movies and should render answer buttons with corresponding movie inputs', async () => {
    render(<App />)
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

    await waitForElementToBeRemoved(() =>
      screen.getByRole('button', { name: /Generate/i }),
    )
    // see if you can find answer buttons with the movie titles entered
    // see if fetch mock was called
    // check to see if all movie titles are button
    const buttonMovie1 = screen.getByRole('button', {
      name: mockResponseTheShawshankRedemption.Title,
    })
    expect(buttonMovie1).toBeInTheDocument
    expect((buttonMovie1 as any).value).toBe(
      mockResponseTheShawshankRedemption.Title,
    )
    const buttonMovie2 = screen.getByRole('button', {
      name: mockResponseTheGodFather.Title,
    })
    expect(buttonMovie2).toBeInTheDocument
    expect((buttonMovie2 as any).value).toBe(mockResponseTheGodFather.Title)
    const buttonMovie3 = screen.getByRole('button', {
      name: mockResponseTheDarkKnight.Title,
    })
    expect(buttonMovie3).toBeInTheDocument
    expect((buttonMovie3 as any).value).toBe(mockResponseTheDarkKnight.Title)
    const buttonMovie4 = screen.getByRole('button', {
      name: mockResponseParasite.Title,
    })
    expect(buttonMovie4).toBeInTheDocument
    expect((buttonMovie4 as any).value).toBe(mockResponseParasite.Title)
  })
  test('check first question is about Actors', async () => {
    render(<App />)
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

    const buttonElement = screen.getByRole('button', { name: /Generate/i })
    fireEvent.click(buttonElement)

    await waitForElementToBeRemoved(() =>
      screen.getByRole('button', { name: /Generate/i }),
    )

    const questionPart1 = screen.getByTestId('questionPart1')

    expect(questionPart1.textContent).toBe(MovieQuestions[0].question)
  })

  test('check second part of Actors question is contained in answer set', async () => {
    render(<App />)
    const inputMovie1 = screen.getByPlaceholderText(/Movie Title One/i)
    fireEvent.change(inputMovie1, {
      target: { value: mockResponseTheShawshankRedemption.Title },
    })
    const inputMovie2 = screen.getByPlaceholderText(/Movie Title Two/i)
    fireEvent.change(inputMovie2, {
      target: { value: mockResponseTheGodFather.Title },
    })
    const inputMovie3 = screen.getByPlaceholderText(/Movie Title Three/i)
    fireEvent.change(inputMovie3, {
      target: { value: mockResponseTheDarkKnight.Title },
    })
    const inputMovie4 = screen.getByPlaceholderText(/Movie Title Four/i)
    fireEvent.change(inputMovie4, {
      target: { value: mockResponseParasite.Title },
    })
    const buttonElement = screen.getByRole('button', { name: /Generate/i })
    fireEvent.click(buttonElement)
    await waitForElementToBeRemoved(() =>
      screen.getByRole('button', { name: /Generate/i }),
    )

    const questionPart2 = screen.getByTestId('questionPart2')

    mockMovieDataList.find(
      (movieData) => movieData.Actors === questionPart2.textContent,
    )
    expect(
      mockMovieDataList.find(
        (movieData) => movieData.Actors === questionPart2.textContent,
      ),
    ).toBeTruthy
  })
  test('check funtionality of reset button', async () => {
    render(<App />)
    fireEvent.change(screen.getByPlaceholderText(/Movie Title One/i), {
      target: { value: mockResponseTheShawshankRedemption.Title },
    })
    fireEvent.change(screen.getByPlaceholderText(/Movie Title Two/i), {
      target: { value: mockResponseTheGodFather.Title },
    })
    fireEvent.change(screen.getByPlaceholderText(/Movie Title Three/i), {
      target: { value: mockResponseTheDarkKnight.Title },
    })
    fireEvent.change(screen.getByPlaceholderText(/Movie Title Four/i), {
      target: { value: mockResponseParasite.Title },
    })
    fireEvent.click(screen.getByRole('button', { name: /Generate/i }))
    await waitForElementToBeRemoved(() =>
      screen.getByRole('button', { name: /Generate/i }),
    )
    expect(screen.queryByPlaceholderText(/Movie Title One/i)).toBeNull

    expect(
      (
        screen.getByRole('button', {
          name: mockResponseTheShawshankRedemption.Title,
        }) as any
      ).value,
    ).toBe(mockResponseTheShawshankRedemption.Title)
    expect(
      (
        screen.getByRole('button', {
          name: mockResponseTheGodFather.Title,
        }) as any
      ).value,
    ).toBe(mockResponseTheGodFather.Title)
    expect(
      (
        screen.getByRole('button', {
          name: mockResponseTheDarkKnight.Title,
        }) as any
      ).value,
    ).toBe(mockResponseTheDarkKnight.Title)
    expect(
      (
        screen.getByRole('button', {
          name: mockResponseParasite.Title,
        }) as any
      ).value,
    ).toBe(mockResponseParasite.Title)
    const resetButton = screen.getByRole('button', { name: /Reset/i })
    fireEvent.click(resetButton)
    expect(screen.queryByPlaceholderText(/Movie Title One/i)).toBeTruthy
    expect(
      screen.queryByRole('button', {
        name: mockResponseTheShawshankRedemption.Title,
      }),
    ).toBeNull()
  })

  test('check funtionality of Next button', async () => {
    render(<App />)
    fireEvent.change(screen.getByPlaceholderText(/Movie Title One/i), {
      target: { value: mockResponseTheShawshankRedemption.Title },
    })
    fireEvent.change(screen.getByPlaceholderText(/Movie Title Two/i), {
      target: { value: mockResponseTheGodFather.Title },
    })
    fireEvent.change(screen.getByPlaceholderText(/Movie Title Three/i), {
      target: { value: mockResponseTheDarkKnight.Title },
    })
    fireEvent.change(screen.getByPlaceholderText(/Movie Title Four/i), {
      target: { value: mockResponseParasite.Title },
    })
    fireEvent.click(screen.getByRole('button', { name: /Generate/i }))
    await waitForElementToBeRemoved(() =>
      screen.getByRole('button', { name: /Generate/i }),
    )

    const buttonMovie1 = screen.getByRole('button', {
      name: mockResponseTheShawshankRedemption.Title,
    })

    expect((buttonMovie1 as any).value).toBe(
      mockResponseTheShawshankRedemption.Title,
    )
    expect(
      (
        screen.getByRole('button', {
          name: mockResponseTheGodFather.Title,
        }) as any
      ).value,
    ).toBe(mockResponseTheGodFather.Title)
    expect(
      (
        screen.getByRole('button', {
          name: mockResponseTheDarkKnight.Title,
        }) as any
      ).value,
    ).toBe(mockResponseTheDarkKnight.Title)
    expect(
      (
        screen.getByRole('button', {
          name: mockResponseParasite.Title,
        }) as any
      ).value,
    ).toBe(mockResponseParasite.Title)

    const nextButton = screen.getByRole('button', { name: /Next/i })

    expect(nextButton).toBeDisabled

    fireEvent.click(buttonMovie1)

    expect(nextButton).not.toBeDisabled

    fireEvent.click(nextButton)

    expect(screen.getByTestId('questionPart1').textContent).toBe(
      MovieQuestions[1].question,
    )
  })
})
