/*
  18-1: useContext 통해 다크 / 라이트 테마에 따른 스타일 변경
*/

import { useState, createContext, useContext, useEffect } from 'react'
import './App.css'

const THEME = {
  DEFAULT: 'system',
  DARK: 'dark',
  LIGHT: 'light',
}

const ThemeContext = createContext({
  // default value
  theme: THEME.DEFAULT,
  setTheme: (state) => {}, // type 추론 때문에, parameter 맞춰줘야 함.
})

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME.DEFAULT)

  useEffect(() => {
    // theme 관련 css 변경 로직
    console.log(theme)
    switch (theme) {
      case THEME.DARK:
        document.body.classList.add('dark')
        break
      case THEME.LIGHT:
        document.body.classList.remove('dark')
        break
      case THEME.DEFAULT:
      default:
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? document.body.classList.add('dark')
          : document.body.classList.remove('dark')
        break
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

function ThemeSelect() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <select defaultValue={theme} onChange={(e) => setTheme(e.target.value)}>
      {Object.entries(THEME).map((entry, index) => (
        <option key={entry[0]} value={entry[1]}>
          {entry[1]}
        </option>
      ))}
    </select>
  )
}

function App() {
  return (
    <>
      <ThemeProvider>
        <h3>Theme</h3>
        <ThemeSelect />
      </ThemeProvider>
    </>
  )
}

export default App
