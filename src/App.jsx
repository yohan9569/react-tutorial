/*
실습 12 : Ref 와 State 를 조합하여, 유효성 검증에 따른 포커스까지 도입하여 회원가입 페이지 만들기
실습 12-1: 아이디/패스워드 입력 컴포넌트 생성
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
  return (
    <div>
      PW: <input />
      <button>보이기</button>
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
