/*
[실습 12-1] : password ref 이용해 타입 바꾸기
*/

import { useRef } from 'react'
import '@/App.css'

function UsernameInput() {
  return (
    <div>
      Username : <input />
    </div>
  )
}

function PasswordInput() {
  const reference = useRef(null)
  return (
    <div>
      Password : <input type='password' ref={reference} />
      <button
        onClick={(e) => {
          reference.current.type = reference.current.type === 'password' ? 'text' : 'password'
        }}
      >
        🔓 보이기
      </button>
    </div>
  )
}

function App() {
  function registration() {}

  return (
    <section style={{ textAlign: 'start', width: 400 }}>
      <UsernameInput />
      <PasswordInput />
      <button onClick={registration}>회원가입 완료</button>
    </section>
  )
}

export default App
