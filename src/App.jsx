/*
[실습 10] 불필요한 리렌더링 없는 Validation 을 갖춘 이름 / 설명 / 메일 폼 제출 페이지를 만들어라
- 가장 먼저 이것저것 생각하지말고 최소한 불필요한 리렌더링 없이 동작되는 형태로 개발하라
*/

import { useState, useRef } from 'react'
import '@/App.css'

function App() {
  // const [valid, setValid] = useState(false)
  const nameRef = useRef()
  const descRef = useRef()
  const mailRef = useRef()

  const [required, setRequired] = useState(true)
  const [lengthValid, setLengthValid] = useState(true)

  const handleSubmit = () => {
    const name = nameRef?.current?.value
    const desc = descRef?.current?.value
    const mail = mailRef?.current?.value

    console.log(name, desc, mail)
  }

  console.log('- rerendered')
  return (
    <>
      이름:{' '}
      <input
        ref={nameRef}
        type='text'
        name='name'
        onChange={(e) => {
          setRequired(e.target.value.length !== 0)
          setLengthValid(e.target.value.length < 10)
        }}
      />
      {lengthValid || <div style={{ color: 'red' }}>길이 준수</div>}
      {required || <div style={{ color: 'red' }}>필수 항목</div>}
      설명: <input ref={descRef} type='text' name='desc'></input>
      메일: <input ref={mailRef} type='email' name='mail'></input>
      <button type='button' onClick={handleSubmit}>
        제출
      </button>
    </>
  )
}

export default App
