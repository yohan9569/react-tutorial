/*
실습 12 : Ref 와 State 를 조합하여, 유효성 검증에 따른 포커스까지 도입하여 회원가입 페이지 만들기
[12-4] 유효성 검증을 위한 상태 단일화 (불변성 객체로 인한 리렌더 이슈) -> onChange 마다 새 객체로 setState
*/

import { useState, useRef, forwardRef } from 'react'
import '@/App.css'

function IdInput() {
  return (
    <div>
      ID: <input />
    </div>
  )
}

function PwInput() {
  const reference = useRef()
  const [valid, setValid] = useState({
    required: false,
    min: false,
    max: true,
  })

  function changType(e) {
    if (reference.current.type === 'password') {
      reference.current.type = 'text'
      e.target.value = '감추기'
    } else {
      reference.current.type = 'password'
      e.target.value = '보이기'
    }
  }

  console.log('PW- rerendered')

  return (
    <div>
      PW:{' '}
      <input
        type='password'
        ref={reference}
        onChange={(e) => {
          const length = e.target.value.length
          setValid({
            required: length !== 0,
            min: length > 8,
            max: length < 20,
          })
        }}
      />
      <button onClick={changType}>보이기</button>
      {valid.required || <div style={{ color: 'red' }}>필수 항목</div>}
      {valid.min || <div style={{ color: 'red' }}>최소 8 글자</div>}
      {valid.max || <div style={{ color: 'red' }}>최대 20 글자</div>}
    </div>
  )
}

function App() {
  console.log('APP- rerendered')
  function registration() {}

  return (
    <>
      <IdInput />
      <PwInput />
      <button onClick={registration}>회원가입</button>
    </>
  )
}

export default App
