/*
실습 12 : Ref 와 State 를 조합하여, 유효성 검증에 따른 포커스까지 도입하여 회원가입 페이지 만들기
[12-3] 유효성 검증을 위한 상태 생성 및 검증 함수 생성
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
  const [requiredValid, setRequiredValid] = useState(false)
  const [minLengthValid, setMinLengthValid] = useState(false)
  const [maxLengthValid, setMaxLengthValid] = useState(true)

  function changType(e) {
    if (reference.current.type === 'password') {
      reference.current.type = 'text'
      e.target.value = '감추기'
    } else {
      reference.current.type = 'password'
      e.target.value = '보이기'
    }
  }

  return (
    <div>
      PW:{' '}
      <input
        type='password'
        ref={reference}
        onChange={(e) => {
          const length = e.target.value.length
          setRequiredValid(length !== 0)
          setMinLengthValid(length > 8)
          setMaxLengthValid(length < 20)
        }}
      />
      <button onClick={changType}>보이기</button>
      {requiredValid || <div style={{ color: 'red' }}>필수 항목</div>}
      {minLengthValid || <div style={{ color: 'red' }}>최소 8 글자</div>}
      {maxLengthValid || <div style={{ color: 'red' }}>최대 20 글자</div>}
    </div>
  )
}

function App() {
  console.log('- rerendered')
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
