import '@/App.css'
import { useState } from 'react'

function App() {
  const [level, setLevel] = useState(1)
  const [title, setTitle] = useState('Novice')

  const levelUp = () => {
    setLevel((previous) => {
      const newVal = previous + 1

      if (newVal == 30) setTitle('2차 전직')
      else if (newVal == 15) setTitle('1차 전직')

      return newVal
    })
  }

  return (
    <>
      <div style={{ marginBottom: 10 }}>{level}</div>
      <div style={{ marginBottom: 10 }}>{title}</div>
      <button onClick={levelUp}>레벨업!</button>
    </>
  )
}

export default App
