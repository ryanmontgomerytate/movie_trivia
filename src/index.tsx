import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { Header } from './Header'
import { Footer } from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
