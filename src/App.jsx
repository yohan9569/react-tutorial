/*
실습 18 : Context API 통해 다크 / 라이트 테마에 따른 스타일 변경 및 localStorage 및 이벤트 활용
[18-3] 운영체제에서 prefers-color-scheme 미디어 변경 이벤트 활용
*/

import { useState, createContext, useContext, useEffect } from 'react'
import '@/App.css'

const THEME = {
  DEFAULT: 'system',
  DARK: 'dark',
  LIGHT: 'light',
}

const themeContext = createContext({ theme: THEME.DEFAULT, setTheme: (state) => {} })

// 매 렌더링마다 재정의할 필요 없으니 밖으로 뺐음.
function handleThemeChange(e) {
  e.matches ? document.body.classList.add('dark') : document.body.classList.remove('dark')
}

function ThemeProvider({ children }) {
  const stored = localStorage.getItem('theme')
  const [theme, setTheme] = useState(stored ?? THEME.DEFAULT)
  // 저장된 값 있으면 그 값으로 초기화.

  useEffect(() => {
    const themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (theme === THEME.DEFAULT) {
      themeMedia.matches
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark')
      localStorage.setItem('theme', THEME.DEFAULT)
    }
    if (theme === THEME.DARK) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', THEME.DARK)
    }
    if (theme === THEME.LIGHT) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', THEME.LIGHT)
    }

    themeMedia.addEventListener('change', handleThemeChange)

    return () => {
      themeMedia.removeEventListener('change', handleThemeChange)
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
