/*
[실습 9] : State 를 활용한 <input/> 과 Ref 를 활용한 <input/> 차이 : React 리렌더링 미발생
- setValid 로 valid 가 변경될 때만 리렌더링
*/

import { useState, useRef } from 'react'

function App() {
  const [valid, setValid] = useState(false)
  const ageRef = useRef()

  console.log('rendered')
  return (
    <>
      <input ref={ageRef} type='number' onChange={(e) => setValid(Number(e.target.value) >= 19)} />
      {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
    </>
  )
}

export default App
