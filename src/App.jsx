/*
Props Drilling 문제 예시
*/

import React, { useState } from 'react'
import './App.css'

function ThirdCompo({ count }) {
  return <>Count is {count}</>
}

function SecondCompo({ count }) {
  return <ThirdCompo count={count} />
}

function FirstCompo({ count }) {
  return <SecondCompo count={count} />
}

function NonContextComponent({ count }) {
  return <div>Count is {count}</div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <div className='in-provide'>
          <FirstCompo count={count} />
        </div>
        <div className='outside-provide'>
          <NonContextComponent count={count} />
        </div>
      </div>
    </>
  )
}

export default App
