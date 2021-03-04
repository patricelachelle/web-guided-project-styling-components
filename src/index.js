// This is for the fake API. Do not delete!
import { worker } from './api-mocks/browser'
worker.start()

import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Friends from './components/Friends'
import { lightTheme, darkTheme } from './theme'

import './styles.css'

const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme  = () => setTheme( theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? lightTheme.background : darkTheme.background
  }, [theme])
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
      <Friends />
    </ThemeProvider>
  )
}

render(
  <App />,
  document.querySelector('#root')
)
