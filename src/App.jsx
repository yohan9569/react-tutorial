/*
실습 18 : Context API 통해 다크 / 라이트 테마에 따른 스타일 변경 및 localStorage 및 이벤트 활용
[18-1] useContext 통해 다크 / 라이트 테마에 따른 스타일 변경
*/

import { useState, createContext, useContext, useEffect } from 'react'
import '@/App.css'

const THEME = {
  DEFAULT: 'system',
  DARK: 'dark',
  LIGHT: 'light',
}

const themeContext = createContext({ theme: THEME.DEFAULT, setTheme: (state) => {} })

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME.DEFAULT)

  useEffect(() => {
    if (theme === THEME.DEFAULT) {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark')
    }
    if (theme === THEME.DARK) {
      document.body.classList.add('dark')
    }
    if (theme === THEME.LIGHT) {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>
}

function ThemeSelect() {
  const { theme, setTheme } = useContext(themeContext)

  return (
    <select defaultValue={theme} onChange={(e) => setTheme(e.target.value)}>
      {Object.values(THEME).map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

function App() {
  return (
    <ThemeProvider>
      <h1>Theme</h1>
      <ThemeSelect />
    </ThemeProvider>
  )
}

export default App
