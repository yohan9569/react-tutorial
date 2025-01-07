import '@/App.css'
import { useState } from 'react'

function App() {
  const [age, setAge] = useState(0)
  const [valid, setValid] = useState(false)

  const handleInput = (e) => {
    const input = e.currentTarget.value
    setAge(input)
    setValid(input >= 19)
  }

  return (
    <>
      <input type='number' value={age} onChange={handleInput} />
      {valid ? <div>성년</div> : <div>미성년</div>}
    </>
  )
}

export default App
