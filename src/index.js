// This is for the fake API. Do not delete!
import { worker } from './api-mocks/browser'
worker.start()

import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './theme'

import Friends from './components/Friends'

const App = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => theme === "light" ? setTheme('dark') : setTheme('light')

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = darkTheme.backgroundColor
    } else {
      document.body.style.backgroundColor = lightTheme.backgroundColor
    }
  }, [theme])
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <button onClick={toggleTheme}>{theme === "light" ? '☀️' : '🌙'}</button>
      <Friends />
    </ThemeProvider>
  )
}

import './styles.css'

render(
  <App />,
  document.querySelector('#root')
)
