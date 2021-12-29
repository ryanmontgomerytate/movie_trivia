import React, { useEffect, useState } from 'react'
import { json } from 'stream/consumers'

export interface MovieTitles {
  movie1: string
  movie2: string
  movie3: string
  movie4: string
}

export const fetchData = async (values: MovieTitles): Promise<string[]> => {
  const apiUrl = 'https://www.omdbapi.com/?t='
  const apiKey = '&apikey=69942670'
  const apiCall = apiUrl + values.movie1 + apiKey
  let json = ''
  let jsonArray = ['', '', '', '']

  try {
    const response = await fetch(apiCall)
    json = await response.json()
    console.log(json)
  } catch (error) {
    console.log('error', error)
  }
  return jsonArray
}
