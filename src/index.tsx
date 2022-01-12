import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { Header } from './Header'
import { Footer } from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './About'

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
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
