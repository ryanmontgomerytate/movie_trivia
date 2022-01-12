import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { Header } from './Header'
import { Footer } from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#92353e',
      main: '#77030E',
    },
    secondary: {
      main: '#03776C',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
