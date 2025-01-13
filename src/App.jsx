/*
[실습 12-2] : FormWithValidation 중앙화, forwardRef 사용.
*/

import { useState, useRef, forwardRef } from 'react'
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
    </div>
  )
}

const FormWithValidation = forwardRef(function FormWithValidation(
  { name, length, required = false },
  reference,
) {
  const [requiredValid, setRequiredValid] = useState(true)
  const [lengthValid, setLengthValid] = useState(true)

  console.log(' - rendered! : FormWithValidation')

  return (
    <div>
      {name} :{' '}
      <input
        ref={reference}
        type={name === 'Password' && 'password'}
        onChange={(e) => {
          const input = e.target.value
          if (required) {
            setRequiredValid(input.length > 0)
          }
          if (length) {
            setLengthValid(input.length <= length)
          }
        }}
      />
      {name === 'Password' && (
        <button
          onClick={(e) => {
            console.log('버튼 클릭')
            if (reference.current.type === 'password') {
              e.currentTarget.innerText = '감추기'
              reference.current.type = 'text'
            } else {
              e.currentTarget.innerText = '🔓 보이기'
              reference.current.type = 'password'
            }
          }}
        >
          🔓 보이기
        </button>
      )}
      {!requiredValid && <div style={{ color: 'red' }}>필수값</div>}
      {!lengthValid && <div style={{ color: 'red' }}>{length} 이하</div>}
    </div>
  )
})

function App() {
  const nameReference = useRef(null)
  const passwordReference = useRef(null)

  function registration() {}

  return (
    <section style={{ textAlign: 'start', width: 400 }}>
      {/* <UsernameInput />
      <PasswordInput /> */}

      <FormWithValidation ref={nameReference} name={'Username'} length={10} />
      <FormWithValidation ref={passwordReference} name={'Password'} length={8} required={true} />
      <button onClick={registration}>회원가입 완료</button>
    </section>
  )
}

export default App
