/*
실습 12 : Ref 와 State 를 조합하여, 유효성 검증에 따른 포커스까지 도입하여 회원가입 페이지 만들기
[12-2] 패스워드 컴포넌트 내 useRef 통한 input 태그 타입 변경
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
      PW: <input type='password' ref={reference} />
      <button onClick={changType}>보이기</button>
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
